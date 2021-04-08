import {Article} from '../../interfaces/Article';

export const LIST_NEWS = 'LIST_NEWS';
export const SEARCH_ARTICLES = 'SEARCH_ARTICLES';

export type NewsAction = {
  type: typeof LIST_NEWS;
  news: Article[];
};

export type SearchAction = {
  type: typeof SEARCH_ARTICLES;
  search_result: Article[];
};

export type NewsState = {
  news: Article[];
  search_result?: Article[];
};

export type NewsDispatch = (args: NewsAction) => NewsAction;
export type SearchDispatch = (args: SearchAction) => SearchAction;
