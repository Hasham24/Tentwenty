import {RouteProp, useRoute} from '@react-navigation/native';
import {useState, useCallback} from 'react';

type ICheckoutTicketRoute = RouteProp<RootStackParamList, 'checkoutTicket'>;
const MIN_SCALE = 0.8;
const MAX_SCALE = 2.0;
const SCALE_STEP = 0.2;
export default () => {
  const route = useRoute<ICheckoutTicketRoute>();
  const {movie, date, cinema} = route?.params || {};
  const [scale, setScale] = useState<number>(1);
  console.log(scale);
  const handleZoomIn = useCallback(() => {
    setScale(prev => Math.min(prev + SCALE_STEP, MAX_SCALE));
  }, []);

  const handleZoomOut = useCallback(() => {
    setScale(prev => Math.max(prev - SCALE_STEP, MIN_SCALE));
  }, []);
  return {movie, date, cinema, scale, handleZoomIn, handleZoomOut};
};
