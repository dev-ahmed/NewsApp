import {useTheme} from '@react-navigation/native';
import React, {ReactChild} from 'react';
import {ViewStyle} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import styles from './styles';

interface Props {
  children: ReactChild;
  style?: ViewStyle;
}

export const Container: React.FC<Props> = React.memo(({children, style}) => {
  const {colors} = useTheme();
  return (
    <SafeAreaView
      style={[styles.container, {backgroundColor: colors.background}, style]}>
      {children}
    </SafeAreaView>
  );
});
