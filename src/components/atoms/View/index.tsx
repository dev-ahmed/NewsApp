import {useTheme} from '@react-navigation/native';
import React from 'react';
import {View as RNView, Text, ViewStyle} from 'react-native';
import styles from './styles';

interface Props {
  style: ViewStyle;
}

export const View: React.FC<Props> = React.memo(({style}) => {
  const {colors} = useTheme();
  return (
    <RNView
      style={[styles.container, {backgroundColor: colors.background}, style]}>
      <Text>View</Text>
    </RNView>
  );
});
