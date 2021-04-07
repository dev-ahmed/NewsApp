import {endpoints} from '../../constants/endpoints';
import {get} from '../../utils/api';
import {NewsDispatch, LIST_NEWS} from './types';

export const getNews = () => async (dispatch: NewsDispatch) => {
  const resp = await get(endpoints.NEWS, {params: {q: 'apple'}});
  dispatch({type: LIST_NEWS, news: resp.data.articles});
};
