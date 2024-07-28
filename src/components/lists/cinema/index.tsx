import React, {useState} from 'react';
import {useTranslation} from 'react-i18next';
import {View, Text, TouchableOpacity, FlatList, Image} from 'react-native';
import {cinemaData} from '~dummyData';
import useStyle from './styles';
import {AppImages} from '~assets';

const Cinema: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const styles = useStyle();
  const {t} = useTranslation('movie');
  const renderItem = ({item, index}: {item: ICinema; index: number}) => {
    return (
      <View>
        <Text style={styles.showTime}>
          {item?.showTime}
          <Text style={styles.hall}>{`  ${item?.hall}`}</Text>
        </Text>
        <TouchableOpacity
          onPress={() => setSelectedIndex(index)}
          activeOpacity={0.8}
          style={[
            styles.seatContainer,
            selectedIndex === index && styles.selectedSeatContainer,
          ]}>
          <Image
            source={AppImages.map}
            resizeMode="contain"
            style={styles.image}
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
