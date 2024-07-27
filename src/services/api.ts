import isEmpty from 'lodash/isEmpty';
import {
  BaseQueryFn,
  FetchArgs,
  fetchBaseQuery,
  FetchBaseQueryError,
} from '@reduxjs/toolkit/query';
import {createApi} from '@reduxjs/toolkit/query/react';

const prefixUrl = 'https://api.themoviedb.org/3/movie/';
// `${process.env.API_URL}`;

const baseQuery = fetchBaseQuery({
  baseUrl: prefixUrl,
  prepareHeaders: headers => {
    const token = process.env.token;
    if (!isEmpty(token)) {
      headers.set(
        'Authorization',
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYTc3Y2NjNzI0YjNiNjQxNmNmYTc2MjAwNjUwNTg2YSIsIm5iZiI6MTcyMjA4MzgzMi40NzAxMjgsInN1YiI6IjY2YTRlOGI3NWM0YTgzZTFmNzllYzA5NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.A11Tx4FFoHji7fT_9rUQhgUUrJiui3DRhdShrLNQDzU',
      );
    }
    return headers;
  },
});

export const baseQueryWithInterceptor: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  const result = await baseQuery(args, api, extraOptions);
  if (result?.error) {
    const {status} = result.error;
    console.log(status);
    // Handle 401 Unauthorized
  }

  return result;
};
export const api = (reducerPath: string) => {
  return createApi({
    reducerPath,
    baseQuery: baseQueryWithInterceptor,
    endpoints: () => ({}),
  });
};
