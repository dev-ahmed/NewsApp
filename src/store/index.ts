import {configureStore} from '@reduxjs/toolkit';
import {newsReducer} from './news/reducer';

export const store = configureStore({
  reducer: {
    news: newsReducer,
  },
});
