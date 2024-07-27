import {ServicesPath} from '~constants';
import {useGetMoviesQuery} from '~services';

export default () => {
  // routes and navigation
  const {data} = useGetMoviesQuery(ServicesPath.API_KEY);
  const {results = []} = data || {};
  return {results};
};
