import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';

export const News: React.FC = React.memo(({}) => {
  return (
    <View style={styles.container}>
      <Text>News</Text>
    </View>
  );
});
