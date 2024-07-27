import {useGetMoviesQuery} from '~services';

export default () => {
  // routes and navigation
  const {data} = useGetMoviesQuery('3a77ccc724b3b6416cfa76200650586a');
  const {results = []} = data || {};
  return {results};
};
