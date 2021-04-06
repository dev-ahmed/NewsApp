import React from 'react';
import {View} from '../../atoms/View';
import {Text} from '../../atoms/Text';
import styles from './styles';

export const News: React.FC = React.memo(({}) => {
  return (
    <View style={styles.container}>
      <Text>News</Text>
    </View>
  );
});
