import {configureStore, combineReducers} from '@reduxjs/toolkit';
import {setupListeners} from '@reduxjs/toolkit/query';
import {movieApi} from '~services';

const reducers = combineReducers({
  [movieApi.reducerPath]: movieApi.reducer,
});

const store = configureStore({
  reducer: reducers,
  middleware: getDefaultMiddleware => {
    const middlewares = getDefaultMiddleware({
      serializableCheck: false,
    }).concat(movieApi.middleware);

    return middlewares;
  },
});

setupListeners(store.dispatch);

export {store};
export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;