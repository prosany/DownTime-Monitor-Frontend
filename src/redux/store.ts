import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import API, { rtkQueryErrorLogger } from '@/services/redux.service';
import rootReducer from '@/redux/rootReducer';

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    })
      .concat(API.middleware)
      .concat(rtkQueryErrorLogger),
  devTools: process.env.NODE_ENV !== 'production',
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export type RootState = ReturnType<typeof store.getState>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
