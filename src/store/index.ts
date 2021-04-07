import {configureStore, Store} from '@reduxjs/toolkit';
import {useDispatch} from 'react-redux';
import thunk from 'redux-thunk';
import {newsReducer} from './news/reducer';
import {NewsAction, NewsState} from './news/types';

export const store: Store<NewsState, NewsAction> = configureStore({
  reducer: newsReducer,
  middleware: [thunk] as const,
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
