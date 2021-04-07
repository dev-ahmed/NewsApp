import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from '@react-navigation/native';
import * as React from 'react';
import {useColorScheme} from 'react-native';
import {RootStack} from './root-navigation';

export const Container = () => {
  const scheme = useColorScheme();
  const isDark = scheme === 'dark';

  return (
    <NavigationContainer theme={isDark ? DarkTheme : DefaultTheme}>
      <RootStack />
    </NavigationContainer>
  );
};
