import React from 'react';
import { Platform } from 'react-native';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import { CustomText } from '/components';
import { MealsNavigator, FavoritesNavigator } from './StackNavigator';
import colors from '../constants/colors';

const Tab = Platform.OS === 'android' ? createMaterialBottomTabNavigator() : createBottomTabNavigator();

const TabNavigatorComponent = ({ children }) =>
  Platform.OS === 'android' ? (
    <Tab.Navigator activeColor={colors.white} shifting={true}>
      {children}
    </Tab.Navigator>
  ) : (
    <Tab.Navigator
      screenOptions={({ route }) => {
        const routeName = getFocusedRouteNameFromRoute(route);
        return {
          headerShown: false,
          tabBarStyle: { backgroundColor: colors.primary, paddingTop: 6, paddingBottom: 2 },
          ...(routeName === 'Meals' && {
            tabBarStyle: { backgroundColor: colors.darkGrey },
          }),
          tabBarLabelStyle: { fontSize: 12, fontFamily: 'open-sans' },
          tabBarActiveTintColor: colors.white,
        };
      }}
    >
      {children}
    </Tab.Navigator>
  );

const TabNavigator = () => {
  return (
    <TabNavigatorComponent>
      <Tab.Screen
        name="MealsTab"
        component={MealsNavigator}
        options={() => ({
          tabBarLabel: Platform.OS === 'android' ? <CustomText bold>Meals</CustomText> : 'Meals',
          tabBarIcon: (tabInfo) => <Ionicons name="ios-restaurant" size={tabInfo.size || 22} color={tabInfo.color} />,
        })}
      />
      <Tab.Screen
        name="FavoritesTab"
        component={FavoritesNavigator}
        options={{
          tabBarLabel: Platform.OS === 'android' ? <CustomText bold>Favorites</CustomText> : 'Favorites',
          tabBarIcon: (tabInfo) => (
            <Ionicons
              name={tabInfo.focused ? 'heart-sharp' : 'heart-outline'}
              size={tabInfo.size || 22}
              color={tabInfo.color}
            />
          ),
        }}
      />
    </TabNavigatorComponent>
  );
};

export default TabNavigator;
