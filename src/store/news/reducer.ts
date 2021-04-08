import {
  LIST_NEWS,
  NewsAction,
  NewsState,
  SearchAction,
  SEARCH_ARTICLES,
} from './types';

const initialState: NewsState = {
  news: [],
  search_result: [],
};

export const newsReducer = (
  state = initialState,
  action: NewsAction | SearchAction,
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
