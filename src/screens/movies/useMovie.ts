import {useCallback, useState} from 'react';
import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from 'react-native-screens/lib/typescript/native-stack/types';
import {ScreenNames} from '~constants';
import {useGetMoviesQuery} from '~services';
import {selectMovies} from '~store';

export default () => {
  const {navigate} =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [params, setParams] = useState({
    page: 1,
  });
  const {isLoading} = useGetMoviesQuery(params, {
    refetchOnMountOrArgChange: true,
  });
  const movies = useSelector(selectMovies);
  const navigationHandler = useCallback(
    (id: string) => {
      navigate(ScreenNames.MovieDetails, {id});
    },
    [navigate],
  );
  const onEndReachedHandler = useCallback(() => {}, []);
  const onRefreshHandler = useCallback(() => {}, []);
  const searchHandler = useCallback((query: string) => {
    setParams(prev => ({
      ...prev,
      query,
    }));
  }, []);

  return {
    movies,
    isLoading,
    navigationHandler,
    searchHandler,
    onEndReachedHandler,
    onRefreshHandler,
  };
};
