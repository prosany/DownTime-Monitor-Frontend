import API from '@/services/redux.service';
import { combineReducers } from '@reduxjs/toolkit';
import coreSlice from '@/redux/slices/coreSlice';

const rootReducer = combineReducers({
  core: coreSlice,
  [API.reducerPath]: API.reducer,
});

export default rootReducer;
