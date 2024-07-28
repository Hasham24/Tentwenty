import {useCallback} from 'react';
import {isEmpty} from 'lodash';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {useGetMovieDetailsQuery, useGetMovieTrailerQuery} from '~services';
import {NativeStackNavigationProp} from 'react-native-screens/lib/typescript/native-stack/types';
import {RootStackParamList} from '~types/routes';
import {ScreenNames} from '~constants';

type IMovieDetailsRoute = RouteProp<RootStackParamList, 'movieDetails'>;
export default () => {
  // routes and navigation
  const {navigate} =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const route = useRoute<IMovieDetailsRoute>();
  const {id = ''} = route?.params || {};
  const {data, isLoading} = useGetMovieDetailsQuery(id);
  const {data: videoData} = useGetMovieTrailerQuery(id);
  console.log(videoData);
  const watchTrailerHandler = useCallback(() => {
    navigate(ScreenNames.WatchTrailer);
  }, [navigate]);
  const selectTickerHandler = useCallback(() => {
    if (!isEmpty(data)) {
      navigate(ScreenNames.SelectTicket, {movie: data});
    }
  }, [data, navigate]);
  return {data, isLoading, selectTickerHandler, watchTrailerHandler};
};
