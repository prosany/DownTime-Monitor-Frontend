import { baseURL } from '@/constants/baseUrls';
import { RootState } from '@/redux/store';
import { removeCookie } from '@/utils/cookies';
import type { Middleware, MiddlewareAPI } from '@reduxjs/toolkit';
import { isRejectedWithValue } from '@reduxjs/toolkit';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import toast from 'react-hot-toast';

export const rtkQueryErrorLogger: Middleware =
  (api: MiddlewareAPI) => (next) => async (action) => {
    if (isRejectedWithValue(action)) {
      console.warn('We got a rejected action!');
      const { data } = action.payload as { data: any };
      if (data?.code === 401 && data?.message === 'Invalid token') {
        toast.error(data?.message);
        removeCookie('vp-usr');
        removeCookie('vp-access');
        removeCookie('vp-refresh');
        window.location.href = '/login';
      }
    }
    return next(action);
  };

// Create our baseQuery instance
const baseQuery = fetchBaseQuery({
  baseUrl: baseURL,
  prepareHeaders: (headers, { getState }) => {
    const store = getState() as RootState;
    // const token = store.auth?.tokens?.access?.token;
    // if (token) {
    //   headers.set('Authorization', `Bearer ${token}`);
    // }
    return headers;
  },
});

const API = createApi({
  reducerPath: 'splitApi',
  baseQuery,
  tagTypes: [],
  endpoints: () => ({}),
});

// Enhance api for caching
export const enhancedApi = API.enhanceEndpoints({
  addTagTypes: [],
});

export default API;
