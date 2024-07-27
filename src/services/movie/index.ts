import {Movie, ReducerPath, Method} from '~constants';
import {api} from '../api';

export const movieApi = api(ReducerPath.movieApi).injectEndpoints({
  endpoints: build => ({
    getMovies: build.query<IGetMovieResponse, string>({
      query: api_key => ({
        url: Movie.GET_MOVIES,
        method: Method.GET,
        params: {api_key},
      }),
    }),
  }),
  overrideExisting: false,
});

export const {useGetMoviesQuery} = movieApi;
