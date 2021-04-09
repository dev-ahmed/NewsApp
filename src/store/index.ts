import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {useDispatch} from 'react-redux';
import thunk from 'redux-thunk';
import {newsReducer} from './news/reducer';
import {settingsReducer} from './settings/reducer';

const reducer = combineReducers({newsReducer, settingsReducer});

export const store = configureStore({
  reducer: reducer,
  middleware: [thunk] as const,
});

export type IRootState = ReturnType<typeof reducer>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
