import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {ArticleDetails} from '../components/pages/ArticleDetails';
import {ROUTES} from '../constants/routes';
import {Article} from '../interfaces/Article';
import {Tabs} from './tab-navigator';

export type RootStackParamList = {
  Tabs: undefined;
  Details: Article;
};

const Stack = createStackNavigator<RootStackParamList>();

export const RootStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={ROUTES.TABS}>
      <Stack.Screen name={ROUTES.TABS} component={Tabs} />
      <Stack.Screen name={ROUTES.DETAILS} component={ArticleDetails} />
    </Stack.Navigator>
  );
};
