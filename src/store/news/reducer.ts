import {Reducer} from 'redux';
import {LIST_NEWS, NewsActions, NewsState, SEARCH_ARTICLES} from './types';

const initialState = {
  news: [],
  search_result: [],
};

export const newsReducer: Reducer<NewsState, NewsActions> = (
  state = initialState,
  action,
) => {
  switch (action.type) {
    case LIST_NEWS:
      return {
        ...state,
        news: action.news,
      };
    case SEARCH_ARTICLES:
      return {
        ...state,
        search_result: action.search_result,
      };
    default:
      return state;
  }
};
