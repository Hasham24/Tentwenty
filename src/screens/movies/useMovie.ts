import {useCallback} from 'react';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from 'react-native-screens/lib/typescript/native-stack/types';
import {ScreenNames, ServicesPath} from '~constants';
import {useGetMoviesQuery} from '~services';
import {RootStackParamList} from '~types/routes';

export default () => {
  const {navigate} =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const {data} = useGetMoviesQuery(ServicesPath.API_KEY);
  const {results = []} = data || {};
  const navigationHandler = useCallback(
    (id: string) => {
      navigate(ScreenNames.MovieDetails, {id});
    },
    [navigate],
  );
  return {results, navigationHandler};
};
