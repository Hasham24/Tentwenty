import {useCallback, useState} from 'react';
import {isEmpty} from 'lodash';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {useGetMovieDetailsQuery, useGetMovieTrailerQuery} from '~services';
import {NativeStackNavigationProp} from 'react-native-screens/lib/typescript/native-stack/types';
import {ScreenNames} from '~constants';

type IMovieDetailsRoute = RouteProp<RootStackParamList, 'movieDetails'>;
export default () => {
  const [loading, setLoading] = useState<boolean>(true);
  // routes and navigation
  const {navigate} =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const route = useRoute<IMovieDetailsRoute>();
  const {id = ''} = route?.params || {};
  const {data, isLoading} = useGetMovieDetailsQuery(id);
  const {data: videoData} = useGetMovieTrailerQuery(id);
  const watchTrailerHandler = useCallback(() => {
    navigate(ScreenNames.WatchTrailer);
  }, [navigate]);
  const selectTickerHandler = useCallback(() => {
    if (!isEmpty(data)) {
      navigate(ScreenNames.SelectTicket, {movie: data});
    }
  }, [data, navigate]);
  return {
    data,
    isLoading,
    loading,
    videoData,
    setLoading,
    selectTickerHandler,
    watchTrailerHandler,
  };
};
