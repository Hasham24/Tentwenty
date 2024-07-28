import dayjs from 'dayjs';
import React, {useState} from 'react';
import {useTranslation} from 'react-i18next';
import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import {generateDates} from '~utils';
import useStyle from './styles';

const DatePicker: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState(0);
  const styles = useStyle();
  const {t} = useTranslation('movie');
  const dates = generateDates(dayjs(), 30);
  const renderItem = ({item, index}: {item: dayjs.Dayjs; index: number}) => {
    return (
      <TouchableOpacity
        style={[
          styles.dateItem,
          selectedDate === index && styles.selectedDateItem,
        ]}
        onPress={() => setSelectedDate(index)}>
        <Text
          style={[
            styles.dateText,
            selectedDate === index && styles.selectedDateText,
          ]}>
          {item.format('D MMM')}
        </Text>
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{t('date')}</Text>
      <FlatList
        data={dates}
        showsHorizontalScrollIndicator={false}
        horizontal
        keyExtractor={(_, index) => String(index)}
        renderItem={renderItem}
        contentContainerStyle={styles.contentContainer}
      />
    </View>
  );
};

export default DatePicker;
