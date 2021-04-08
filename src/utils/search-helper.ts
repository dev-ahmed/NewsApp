import memoize from 'fast-memoize';
import {Article} from '../interfaces/Article';

export const memoizedSearch = memoize((searchKey: string, list: Article[]) => {
  const newList = list?.filter(article => {
    return (
      article.author.includes(searchKey) || article.title.includes(searchKey)
    );
  });
  return newList;
});
