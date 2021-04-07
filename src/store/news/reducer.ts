import {LIST_NEWS, NewsAction, NewsState} from './types';

const initialState: NewsState = {
  news: [],
};

export const newsReducer = (
  state = initialState,
  action: NewsAction,
): NewsState => {
  switch (action.type) {
    case LIST_NEWS:
      return {
        ...state,
        news: action.news,
      };
    default:
      return state;
  }
};
