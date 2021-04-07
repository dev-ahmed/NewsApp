import React from 'react';
import {View, Text} from 'react-native';
import {Article} from '../../../interfaces/Article';
import {Image} from '../../atoms/Image';
import styles from './styles';

export const ArticleItem: React.FC<Article> = React.memo(
  ({urlToImage, author, title}) => {
    return (
      <View style={styles.articleContainer}>
        <Image style={styles.articleImage} source={{uri: urlToImage}} />
        <View style={styles.descriptionContainer}>
          <Text style={[styles.text, styles.title]}> {author}</Text>
          <Text style={[styles.text, styles.desc]}> {title}</Text>
        </View>
      </View>
    );
  },
);
