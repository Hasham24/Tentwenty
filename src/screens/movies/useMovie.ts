import {useCallback} from 'react';
import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from 'react-native-screens/lib/typescript/native-stack/types';
import {ScreenNames, ServicesPath} from '~constants';
import {useGetMoviesQuery} from '~services';
import {RootStackParamList} from '~types/routes';
import {selectMovies} from '~store';

export default () => {
  const {navigate} =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const {isLoading} = useGetMoviesQuery(ServicesPath.API_KEY);
  const movies = useSelector(selectMovies);
  const navigationHandler = useCallback(
    (id: string) => {
      navigate(ScreenNames.MovieDetails, {id});
    },
    [navigate],
  );
  return {movies, isLoading, navigationHandler};
};
