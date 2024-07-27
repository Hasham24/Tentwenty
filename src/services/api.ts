import isEmpty from 'lodash/isEmpty';
import {
  BaseQueryFn,
  FetchArgs,
  fetchBaseQuery,
  FetchBaseQueryError,
} from '@reduxjs/toolkit/query';
import {createApi} from '@reduxjs/toolkit/query/react';
import {ServicesPath} from '~constants';

const prefixUrl = ServicesPath.BASE_URL;
// `${process.env.API_URL}`;
const baseQuery = fetchBaseQuery({
  baseUrl: prefixUrl,
  prepareHeaders: headers => {
    const token = ServicesPath.TOKEN;
    if (!isEmpty(token)) {
      headers.set('Authorization', `Bearer ${token}`);
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
