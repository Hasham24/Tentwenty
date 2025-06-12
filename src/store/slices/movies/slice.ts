import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {movieApi} from '~services';

export interface MovieState {
  allMovies: IMovie[];
  movies: IMovie[];
}

// Define the initial state using that type
const initialState: MovieState = {
  allMovies: [],
  movies: [],
};

const movieSlice = createSlice({
  name: 'movies',
  initialState,
  extraReducers: builder => {
    builder.addMatcher(
      movieApi.endpoints.getMovies.matchFulfilled,
      (state, {payload}) => {
        state.allMovies =
          payload?.page === 1
            ? payload?.results
            : [...state.movies, ...payload?.results];
        state.movies =
          payload?.page === 1
            ? payload?.results
            : [...state.movies, ...payload?.results];
      },
    );
  },
  reducers: {
    filterMoviesByTitle(state, action: PayloadAction<string>) {
      const searchTerm = action.payload.toLowerCase();
      state.movies = state.allMovies.filter(movie =>
        movie.title.toLowerCase().includes(searchTerm),
      );
    },
  },
});
export default movieSlice;
