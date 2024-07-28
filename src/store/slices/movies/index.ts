import {RootState} from '~store';
import movieSlice from './slice';

// Reducer
export const movieSliceReducer = movieSlice.reducer;

// Actions
export const {filterMoviesByTitle} = movieSlice.actions;
// Selectors

export const selectMovies = (state: RootState) => state.movies.movies;
