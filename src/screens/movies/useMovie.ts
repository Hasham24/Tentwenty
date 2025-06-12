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
  const [page, setPage] = useState<number>(1);
  const [refreshing, setRefreshing] = useState<boolean>(false);
  const {isLoading} = useGetMoviesQuery(page, {
    refetchOnMountOrArgChange: true,
  });
  const movies = useSelector(selectMovies);
  // Determine if there is more data to fetch
  const hasMore = movies?.length % 20 === 0 && movies?.length !== 0; // assuming 20 per page

  const navigationHandler = useCallback(
    (id: string) => {
      navigate(ScreenNames.MovieDetails, {id});
    },
    [navigate],
  );
  const onEndReachedHandler = useCallback(() => {
    if (!isLoading && hasMore) {
      setPage(prev => prev + 1);
    }
  }, [isLoading, hasMore]);

  const onRefreshHandler = useCallback(() => {
    if (!isLoading) {
      setRefreshing(true);
      setPage(1);
    }
  }, [isLoading]);

  // Set refreshing to false when loading is done and page is 1
  if (refreshing && !isLoading && page === 1) {
    setRefreshing(false);
  }

  return {
    movies,
    isLoading,
    refreshing,
    navigationHandler,
    onEndReachedHandler,
    onRefreshHandler,
  };
};
