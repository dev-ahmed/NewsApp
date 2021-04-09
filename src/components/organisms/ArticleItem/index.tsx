import {useNavigation, useTheme} from '@react-navigation/native';
import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {ROUTES} from '../../../constants/routes';
import {Article} from '../../../interfaces/Article';
import {Image} from '../../atoms/Image';
import {Text} from '../../atoms/Text';
import styles from './styles';

export const ArticleItem: React.FC<Article> = React.memo(article => {
  const {urlToImage, author, title} = article;
  const {colors} = useTheme();
  const {navigate} = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigate(ROUTES.DETAILS, article)}
      style={[styles.articleContainer, {borderBottomColor: colors.border}]}>
      <Image style={styles.articleImage} source={{uri: urlToImage}} />
      <View style={styles.descriptionContainer}>
        <Text style={[styles.text, styles.title]}> {author}</Text>
        <Text style={[styles.text, styles.desc]}> {title}</Text>
      </View>
    </TouchableOpacity>
  );
});
