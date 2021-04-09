import {IRootState} from './../index';
import {endpoints} from '../../constants/endpoints';
import {get} from '../../utils/api';
import {memoizedSearch} from '../../utils/search-helper';
import {
  LIST_NEWS,
  NewsDispatch,
  SEARCH_ARTICLES,
  SearchDispatch,
} from './types';

export const getNews = () => async (dispatch: NewsDispatch) => {
  const resp = await get(endpoints.NEWS, {params: {q: 'apple'}});
  dispatch({type: LIST_NEWS, news: resp.data.articles});
};

export const searchArticles = (text: string) => async (
  dispatch: SearchDispatch,
  getState: () => IRootState,
) => {
  const {news} = getState().newsReducer;
  const newArticles = memoizedSearch(text, news);
  dispatch({type: SEARCH_ARTICLES, search_result: newArticles});
};
