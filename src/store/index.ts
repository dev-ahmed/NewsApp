import {configureStore} from '@reduxjs/toolkit';
import {newsReducer} from './reducers/reducer';

export const store = configureStore({
  reducer: {
    news: newsReducer,
  },
});
