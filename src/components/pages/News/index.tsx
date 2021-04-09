import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useCallbackOne} from 'use-memo-one';
import {IRootState} from '../../../store';
import {getNews, searchArticles} from '../../../store/news/actions';
import {Container} from '../../atoms/Container';
import {SearchBar} from '../../organisms/SearchBar';
import {NewsList} from '../../templates/NewsList';

export const News: React.FC = React.memo(({}) => {
  const [refreshing, setRefreshing] = useState(false);
  const [searchKey, setSearchKey] = useState('');

  const dispatch = useDispatch();
  const {news, search_result} = useSelector((state: IRootState) => ({
    news: state.newsReducer.news,
    search_result: state.newsReducer.search_result,
  }));

  const initialFetch = useCallbackOne(() => {
    dispatch(getNews());
  }, []);

  useEffect(() => {
    initialFetch();
  }, [initialFetch]);

  const _onRefresh = async () => {
    setRefreshing(true);
    await dispatch(getNews());
    setRefreshing(false);
  };

  const _onSearch = async (text: string) => {
    setSearchKey(text);
    await dispatch(searchArticles(text));
  };

  return (
    <Container>
      <NewsList
        searchBar={<SearchBar value={searchKey} onSearch={_onSearch} />}
        refreshing={refreshing}
        onRefresh={_onRefresh}
        data={search_result && search_result?.length > 0 ? search_result : news}
      />
    </Container>
  );
});
