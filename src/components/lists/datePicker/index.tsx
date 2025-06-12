import React from 'react';
import dayjs, {Dayjs} from 'dayjs';
import {useTranslation} from 'react-i18next';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ListRenderItem,
} from 'react-native';
import {generateDates} from '~utils';
import useStyle from './styles';

interface IDatePickerProps {
  selectedDate: Dayjs;
  setSelectDate: (date: Dayjs) => void;
}
const DatePicker: React.FC<IDatePickerProps> = props => {
  const styles = useStyle();
  const dates = generateDates(dayjs(), 30);
  const {t} = useTranslation('movie');
  const {selectedDate, setSelectDate} = props;
  const renderItem: ListRenderItem<Dayjs> = ({item}) => {
    const isSelected = item.isSame(selectedDate, 'day');
    return (
      <TouchableOpacity
        style={[styles.dateItem, isSelected && styles.selectedDateItem]}
        onPress={() => setSelectDate(item)}>
        <Text style={[styles.dateText, isSelected && styles.selectedDateText]}>
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
