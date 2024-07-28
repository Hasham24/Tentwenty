import {RouteProp, useRoute} from '@react-navigation/native';
import {useGetMovieDetailsQuery, useGetMovieTrailerQuery} from '~services';
import {RootStackParamList} from '~types/routes';
type IMovieDetailsRoute = RouteProp<RootStackParamList, 'movieDetails'>;
export default () => {
  // routes and navigation
  const route = useRoute<IMovieDetailsRoute>();
  const {id = ''} = route?.params || {};
  const {data, isLoading} = useGetMovieDetailsQuery(id);
  const {data: videoData} = useGetMovieTrailerQuery(id);
  console.log(videoData, 'l');
  return {data, isLoading};
};
