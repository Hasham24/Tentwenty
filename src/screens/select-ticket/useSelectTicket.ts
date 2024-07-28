import {useCallback} from 'react';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {NativeStackNavigationProp} from 'react-native-screens/lib/typescript/native-stack/types';
import {RootStackParamList} from '~types/routes';
type ISelectTicketRoute = RouteProp<RootStackParamList, 'selectTicket'>;
export default () => {
  // routes and navigation
  const {navigate} =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const route = useRoute<ISelectTicketRoute>();
  const {movie} = route?.params || {};

  return {movie};
};
