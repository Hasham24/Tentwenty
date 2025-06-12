import {Movie, ReducerPath, Method, ServicesPath} from '~constants';
import {api} from '../api';

export const movieApi = api(ReducerPath.MOVIE_API).injectEndpoints({
  endpoints: build => ({
    getMovies: build.query<IGetMoviesResponse, IGetMoviesRequest>({
      query: data => ({
        url: Movie.GET_MOVIES,
        method: Method.GET,
        params: {
          api_key: ServicesPath.API_KEY,
          page: data.page,
          query: 'sin',
        },
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
