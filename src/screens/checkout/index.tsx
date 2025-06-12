import React from 'react';
import {View} from 'react-native';
import {getFormattedDate} from '~utils';
import {SafeScreen, Header} from '~components';
import useSelectTicket from './useCheckoutTicket';
import useStyle from './styles';

const CheckoutTicket = () => {
  const {movie, date, cinema} = useSelectTicket();
  const {title} = movie;
  const styles = useStyle();
  return (
    <SafeScreen>
      <Header
        title={title}
        textStyle={styles.text}
        descriptionText={`${getFormattedDate(String(date))} | ${
          cinema?.showTime
        } ${cinema?.hall} `}
      />
      <View style={styles.container}></View>
    </SafeScreen>
  );
};

export default CheckoutTicket;
