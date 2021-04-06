import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {ROUTES} from '../constants/routes';
import {Tabs} from './tab-navigator';

type ParamList = {
  Tabs: undefined;
};

const Stack = createStackNavigator<ParamList>();

export const RootStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={ROUTES.TABS}>
      <Stack.Screen name={ROUTES.TABS} component={Tabs} />
    </Stack.Navigator>
  );
};
