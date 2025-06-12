import React from 'react';
import {View} from 'react-native';
import {getFormattedDate} from '~utils';
import {useTranslation} from 'react-i18next';
import {SafeScreen, Header, Button, DatePicker, Cinema} from '~components';
import useSelectTicket from './useSelectTicket';
import useStyle from './styles';

const SelectTicket = () => {
  const styles = useStyle();
  const {t} = useTranslation('movie');
  const {
    movie,
    selectedDate,
    selectedCinema,
    setSelectedCinema,
    selectSeatHandler,
    setSelectedDate,
  } = useSelectTicket();
  const {title, release_date} = movie;

  return (
    <SafeScreen>
      <Header
        title={title}
        textStyle={styles.text}
        descriptionText={`${t('inTheaters')} ${getFormattedDate(
          release_date || '',
        )}`}
      />
      <View style={styles.container}>
        <View style={styles.contentContainer}>
          <DatePicker
            selectedDate={selectedDate}
            setSelectDate={setSelectedDate}
          />
          <Cinema
            selectedCinema={selectedCinema}
            setSelectedCinema={setSelectedCinema}
          />
        </View>
        <Button
          style={styles.button}
          disabled={!selectedCinema}
          text={t('selectSeats')}
          onPress={selectSeatHandler}
        />
      </View>
    </SafeScreen>
  );
};

export default SelectTicket;
