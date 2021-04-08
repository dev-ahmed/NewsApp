import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {News} from '../components/pages/News';
import {ROUTES} from '../constants/routes';
import {Settings} from '../components/pages/Settings';
import {translate} from '../utils/i18n-helper';

type ParamList = {
  News: undefined;
  Settings: undefined;
};

const Tab = createBottomTabNavigator<ParamList>();

export const Tabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        options={{tabBarLabel: translate('News')}}
        name={ROUTES.NEWS}
        component={News}
      />
      <Tab.Screen
        options={{tabBarLabel: translate('Settings')}}
        name={ROUTES.SETTINGS}
        component={Settings}
      />
    </Tab.Navigator>
  );
};
