import React from 'react';
import {useTranslation} from 'react-i18next';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ListRenderItem,
} from 'react-native';
import {SeatsGrid} from '~components/';
import {cinemaData} from '~dummyData';
import useStyle from './styles';

interface ICinemaProps {
  selectedCinema: ICinema | null;
  setSelectedCinema: (cinema: ICinema) => void;
}
const Cinema: React.FC<ICinemaProps> = props => {
  const {selectedCinema, setSelectedCinema} = props;
  const styles = useStyle();
  const {t} = useTranslation('movie');
  const renderItem: ListRenderItem<ICinema> = ({item}) => {
    const isSelected = item?.id === selectedCinema?.id;
    return (
      <View>
        <Text style={styles.showTime}>
          {item?.showTime}
          <Text style={styles.hall}>{`  ${item?.hall}`}</Text>
        </Text>
        <TouchableOpacity
          onPress={() => setSelectedCinema(item)}
          activeOpacity={0.8}
          style={[
            styles.seatContainer,
            isSelected && styles.selectedSeatContainer,
          ]}>
          <SeatsGrid
            seats={item?.seats}
            disabled
            seatStyle={styles.seatStyle}
          />
        </TouchableOpacity>
        <Text style={styles.from}>
          {t('from')}
          <Text
            style={styles.amount}>{` ${item?.price}${item?.currency} `}</Text>
          {t('or')}
          <Text
            style={styles.amount}>{` ${item?.bonus}${item?.currency} `}</Text>
        </Text>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={cinemaData}
        showsHorizontalScrollIndicator={false}
        horizontal
        keyExtractor={(_, index) => String(index)}
        renderItem={renderItem}
        contentContainerStyle={styles.contentContainer}
      />
    </View>
  );
};

export default Cinema;
