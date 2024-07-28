import React, {useState} from 'react';
import {
  Image,
  Text,
  View,
  TouchableOpacity,
  TouchableOpacityProps,
  ActivityIndicator,
} from 'react-native';
import {getImage} from '~utils';
import {ImageSizes} from '~constants';
import useStyle from './styles';
import {colors} from '~theme';
interface Props extends TouchableOpacityProps {
  item: IMovie;
}
const MovieItem: React.FC<Props> = props => {
  const [loading, setLoading] = useState<boolean>(true);
  const {item, onPress} = props;
  const {title = '', backdrop_path} = item;
  const styles = useStyle();
  return (
    <TouchableOpacity activeOpacity={0.9} onPress={onPress}>
      {loading && (
        <ActivityIndicator
          style={styles.activityIndicator}
          size="large"
          color={colors.lightBlue}
        />
      )}
      <Image
        source={{uri: getImage(ImageSizes.w1280, backdrop_path)}}
        style={styles.image}
        onLoadEnd={() => setLoading(false)}
      />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};
export default MovieItem;
