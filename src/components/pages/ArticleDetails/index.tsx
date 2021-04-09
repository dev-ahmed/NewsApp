import {RouteProp, useRoute} from '@react-navigation/core';
import {translate} from '../../../utils/i18n-helper';
import React from 'react';
import {fonts} from '../../../constants/fonts';
import {RootStackParamList} from '../../../navigation/root-navigation';
import {Container} from '../../atoms/Container';
import {Image} from '../../atoms/Image';
import {Text} from '../../atoms/Text';
import styles from './styles';
import {View} from 'react-native';

export const ArticleDetails: React.FC = React.memo(({}) => {
  const {params} = useRoute<RouteProp<RootStackParamList, 'Details'>>();
  const {urlToImage, author, title, description, content, publishedAt} = params;
  const date = new Date(publishedAt);
  return (
    <Container>
      <>
        <Image style={styles.headerImage} source={{uri: urlToImage}} />
        <Text style={{...fonts.headlines.title}}>{title}</Text>
        <View style={styles.authorContainer}>
          <Text style={[styles.author, {...fonts.headlines.date}]}>
            {translate('Author')} : {author}
          </Text>
          <Text style={[styles.author, {...fonts.headlines.date}]}>
            {translate('Date')} : {date.toDateString()}
          </Text>
        </View>
        <Text style={{...fonts.headlines.description}}>{description}</Text>
        <Text style={{...fonts.headlines.description}}>{content}</Text>
      </>
    </Container>
  );
});
