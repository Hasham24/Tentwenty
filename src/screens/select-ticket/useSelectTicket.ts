import {Alert} from 'react-native';
import {useCallback} from 'react';
import {RouteProp, useRoute} from '@react-navigation/native';

type ISelectTicketRoute = RouteProp<RootStackParamList, 'selectTicket'>;
export default () => {
  const route = useRoute<ISelectTicketRoute>();
  const {movie} = route?.params || {};

  const selectSeatHandler = useCallback(() => {
    Alert.alert('Seat Selected', 'You have selected a seat.');
  }, []);

  return {movie, selectSeatHandler};
};
