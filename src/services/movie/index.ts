import {Movie, ReducerPath, Method} from '~constants';
import {api} from '../api';

export const movieApi = api(ReducerPath.MOVIE_API).injectEndpoints({
  endpoints: build => ({
    getMovies: build.query<IGetMoviesResponse, string>({
      query: api_key => ({
        url: Movie.GET_MOVIES,
        method: Method.GET,
        params: {api_key, limit: 10},
      }),
    }),
    getMovieDetails: build.query<IMovieDetails, string>({
      query: movieId => ({
        url: `${movieId}`,
        method: Method.GET,
      }),
    }),
    getMovieTrailer: build.query<any, string>({
      query: movieId => ({
        url: `${movieId}${Movie.GET_TRAILER}`,
        method: Method.GET,
      }),
    }),
  }),
  overrideExisting: false,
});

export const {
  useGetMoviesQuery,
  useGetMovieDetailsQuery,
  useGetMovieTrailerQuery,
} = movieApi;
