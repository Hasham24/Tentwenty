import React from 'react';
import {View} from 'react-native';
import {getFormattedDate} from '~utils';
import {useTranslation} from 'react-i18next';
import {SafeScreen, Header, Button, DatePicker} from '~components';
import useSelectTicket from './useSelectTicket';
import useStyle from './styles';

const SelectTicket = () => {
  const {t} = useTranslation('movie');
  const {movie} = useSelectTicket();
  const {title, release_date} = movie;
  const styles = useStyle();
  return (
    <SafeScreen>
      <Header
        title={title}
        textStyle={styles.text}
        descriptionText={`${t('inTheaters')}${getFormattedDate(
          release_date || '',
        )}`}
      />
      <View style={styles.container}>
        <View style={styles.contentContainer}>
          <DatePicker />
        </View>
        <Button text={t('selectSeats')} style={styles.button} />
      </View>
    </SafeScreen>
  );
};

export default SelectTicket;
