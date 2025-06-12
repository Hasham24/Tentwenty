import dayjs from 'dayjs';
import {useCallback, useState} from 'react';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {NativeStackNavigationProp} from 'react-native-screens/lib/typescript/native-stack/types';
import {ScreenNames} from '~constants';

type ISelectTicketRoute = RouteProp<RootStackParamList, 'selectTicket'>;
export default () => {
  const route = useRoute<ISelectTicketRoute>();
  const [selectedDate, setSelectedDate] = useState<Dayjs>(dayjs());
  const [selectedCinema, setSelectedCinema] = useState<ICinema | null>(null);
  const {navigate} =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const {movie} = route?.params || {};

  const selectSeatHandler = useCallback(() => {
    navigate(ScreenNames.CheckoutTicket, {
      movie,
      date: selectedDate,
      cinema: selectedCinema as ICinema,
    });
  }, [movie, selectedDate, selectedCinema, navigate]);

  return {
    movie,
    selectedDate,
    selectedCinema,
    setSelectedCinema,
    selectSeatHandler,
    setSelectedDate,
  };
};
