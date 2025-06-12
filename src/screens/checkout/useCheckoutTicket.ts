import {RouteProp, useRoute} from '@react-navigation/native';

type ICheckoutTicketRoute = RouteProp<RootStackParamList, 'checkoutTicket'>;
export default () => {
  const route = useRoute<ICheckoutTicketRoute>();
  const {movie, date, cinema} = route?.params || {};
  return {movie, date, cinema};
};
