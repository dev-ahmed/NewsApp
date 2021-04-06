import * as React from 'react';
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from '@react-navigation/native';
import {RootStack} from './root-navigation';
import {useColorScheme} from 'react-native';

export const Container = () => {
  const scheme = useColorScheme();
  const isDark = scheme === 'dark';

  return (
    <NavigationContainer theme={isDark ? DarkTheme : DefaultTheme}>
      <RootStack />
    </NavigationContainer>
  );
};
