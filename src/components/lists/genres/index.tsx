import React from 'react';
import {View, Text} from 'react-native';
import {colors} from '~theme';
import useStyle from './styles';

interface Props {
  genres: IGenre[];
}

const Genres: React.FC<Props> = props => {
  const {genres = []} = props;
  const styles = useStyle();
  const color = [colors.lightGreen, colors.pink, colors.purple, colors.yellow];
  return (
    <View style={styles.container}>
      {genres.map((item: IGenre, index: number) => (
        <View
          key={String(index)}
          style={[styles.item, {backgroundColor: color[index % color.length]}]}>
          <Text style={styles.text}>{item?.name}</Text>
        </View>
      ))}
    </View>
  );
};
export default Genres;
