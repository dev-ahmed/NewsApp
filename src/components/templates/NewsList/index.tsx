import React from 'react';
import {ListRenderItem, ViewStyle} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {Article} from '../../../interfaces/Article';
import {ArticleItem} from '../../organisms/ArticleItem';
import styles from './styles';

interface Props {
  data: Article[] | undefined;
  style?: ViewStyle;
}

export const NewsList: React.FC<Props> = React.memo(({data, style}) => {
  const _renderArticle: ListRenderItem<Article> = ({item}) => {
    return <ArticleItem {...item} />;
  };

  return (
    <FlatList
      contentContainerStyle={styles.listContainer}
      keyExtractor={(item, index) => index.toString()}
      renderItem={_renderArticle}
      data={data}
      style={[styles.container, style]}
    />
  );
});
