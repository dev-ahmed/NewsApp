import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {ROUTES} from '../constants/routes';
import {News} from '../components/pages/News';

type ParamList = {
  News: undefined;
};

const Stack = createStackNavigator<ParamList>();

export const RootStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={ROUTES.NEWS}>
      <Stack.Screen name={ROUTES.NEWS} component={News} />
    </Stack.Navigator>
  );
};
