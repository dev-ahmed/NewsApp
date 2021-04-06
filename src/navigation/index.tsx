import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {RootStack} from './root-navigation';

export const Container = () => {
  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
};
