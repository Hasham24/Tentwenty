import React from 'react';
import {
  Image,
  Text,
  View,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import useStyle from './styles';
import {getImage} from '~utils';
import {ImageSizes} from '~constants';

interface Props extends TouchableOpacityProps {
  item: IMovie;
}
const MovieItem: React.FC<Props> = props => {
  const {item, onPress} = props;
  const {title = '', backdrop_path} = item;
  const styles = useStyle();
  return (
    <TouchableOpacity activeOpacity={0.9} onPress={onPress}>
      <Image
        source={{uri: getImage(ImageSizes.w1280, backdrop_path)}}
        style={styles.image}
      />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};
export default MovieItem;
