import {useTheme} from '@react-navigation/native';
import React, {ReactElement} from 'react';
import {ListRenderItem, RefreshControl, ViewStyle} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {Article} from '../../../interfaces/Article';
import {ArticleItem} from '../../organisms/ArticleItem';
import styles from './styles';

interface Props {
  data: Article[] | undefined;
  style?: ViewStyle;
  onRefresh?: () => void;
  refreshing: boolean;
  searchBar?: ReactElement;
}

export const NewsList: React.FC<Props> = React.memo(
  ({data, refreshing, onRefresh, searchBar, style}) => {
    const {colors} = useTheme();

    const _renderArticle: ListRenderItem<Article> = ({item}) => {
      return <ArticleItem {...item} />;
    };

    return (
      <FlatList
        ListHeaderComponent={searchBar}
        contentContainerStyle={styles.listContainer}
        keyExtractor={(item, index) => index.toString()}
        renderItem={_renderArticle}
        data={data}
        style={[styles.container, style]}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            tintColor={colors.primary}
          />
        }
      />
    );
  },
);
