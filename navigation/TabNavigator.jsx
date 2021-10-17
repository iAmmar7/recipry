import React from 'react';
import { Platform } from 'react-native';
import { NavigationContainer, getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import { FavoritesScreen } from '/screens';
import { MealsNavigator, FavoritesNavigator } from './StackNavigator';
import colors from '../constants/colors';

const Tab = Platform.OS === 'android' ? createMaterialBottomTabNavigator() : createBottomTabNavigator();

const TabNavigatorComponent = ({ children }) =>
  Platform.OS === 'android' ? (
    <Tab.Navigator
      activeColor={colors.white}
      shifting={true}
      screenOptions={({ route }) => {
        const routeName = getFocusedRouteNameFromRoute(route);
        console.log('routeName', routeName);
        return {
          tabBarColor: colors.primary,
          ...(routeName === 'Meals' && { tabBarColor: colors.darkGrey }),
        };
      }}
    >
      {children}
    </Tab.Navigator>
  ) : (
    <Tab.Navigator
      screenOptions={({ route }) => {
        const routeName = getFocusedRouteNameFromRoute(route);
        return {
          headerShown: false,
          tabBarStyle: { backgroundColor: colors.primary },
          ...(routeName === 'CategoryMeals' && { tabBarStyle: { backgroundColor: colors.darkGrey } }),
          tabBarLabelStyle: { fontSize: 12 },
          tabBarActiveTintColor: colors.white,
        };
      }}
    >
      {children}
    </Tab.Navigator>
  );

const TabNavigator = () => {
  return (
    <NavigationContainer>
      <TabNavigatorComponent>
        <Tab.Screen
          name="MealsTab"
          component={MealsNavigator}
          options={() => ({
            tabBarIcon: (tabInfo) => <Ionicons name="ios-restaurant" size={tabInfo.size || 22} color={tabInfo.color} />,
          })}
        />
        <Tab.Screen
          name="FavoritesTab"
          component={FavoritesNavigator}
          options={{
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
    </NavigationContainer>
  );
};

export default TabNavigator;
