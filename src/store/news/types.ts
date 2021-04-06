import {AxiosResponse} from 'axios';

export const LIST_NEWS = 'SEARCH_MOVIES';
export const MOVIES_DETAILS = 'MOVIES_DETAILS';

interface Source {
  id: string;
  name: string;
}

interface News {
  source: Source;
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
}

export interface NewsList {
  type: typeof LIST_NEWS;
  payload: AxiosResponse<News[]>;
}

export interface MoviesState {
  news: NewsList;
}
