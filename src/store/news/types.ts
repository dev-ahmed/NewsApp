import {Article} from '../../interfaces/Article';

export const LIST_NEWS = 'LIST_NEWS';

export type NewsAction = {
  type: typeof LIST_NEWS;
  news: Article[] | undefined;
};

export type NewsState = {
  news: Article[] | undefined;
};

export type NewsDispatch = (args: NewsAction) => NewsAction;
