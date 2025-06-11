import React, {useCallback, useState} from 'react';
import {
  Image,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  ActivityIndicator,
} from 'react-native';
import {getImage} from '~utils';
import {ImageSizes} from '~constants';
import {colors} from '~theme';
import useStyle from './styles';

interface Props extends TouchableOpacityProps {
  item: IMovie;
}
const MovieItem: React.FC<Props> = props => {
  const [loading, setLoading] = useState<boolean>(true);
  const {item, onPress} = props;
  const {title = '', backdrop_path} = item;
  const styles = useStyle();
  const loadingHandler = useCallback(() => {
    setLoading(false);
  }, []);
  return (
    <TouchableOpacity activeOpacity={0.9} onPress={onPress}>
      {loading && (
        <ActivityIndicator
          style={styles.activityIndicator}
          size="small"
          color={colors.lightBlue}
        />
      )}
      <Image
        source={{uri: getImage(ImageSizes.w1280, backdrop_path)}}
        style={styles.image}
        onLoadEnd={loadingHandler}
        onError={loadingHandler}
      />
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};
export default MovieItem;
