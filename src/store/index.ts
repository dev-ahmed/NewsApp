import {configureStore} from '@reduxjs/toolkit';
import {useDispatch} from 'react-redux';
import thunk from 'redux-thunk';
import {newsReducer} from './news/reducer';

export const store = configureStore({
  reducer: newsReducer,
  middleware: [thunk] as const,
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
