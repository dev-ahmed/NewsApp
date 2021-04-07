import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useCallbackOne} from 'use-memo-one';
import {getNews} from '../../../store/news/actions';
import {NewsState} from '../../../store/news/types';
import {Container} from '../../atoms/Container';
import {NewsList} from '../../templates/NewsList';

export const News: React.FC = React.memo(({}) => {
  const dispatch = useDispatch();
  const {news} = useSelector((state: NewsState) => ({
    news: state.news,
  }));

  const initialFetch = useCallbackOne(() => {
    dispatch(getNews());
  }, []);

  useEffect(() => {
    initialFetch();
  }, [initialFetch]);

  return (
    <Container>
      <NewsList data={news} />
    </Container>
  );
});
