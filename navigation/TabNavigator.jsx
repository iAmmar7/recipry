import React from 'react';
import { NavigationContainer, getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import { FavoritesScreen } from '/screens';
import StackNavigator from './StackNavigator';
import colors from '../constants/colors';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <NavigationContainer>
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
        <Tab.Screen
          name="Meals"
          component={StackNavigator}
          options={() => ({
            tabBarIcon: (tabInfo) => <Ionicons name="ios-restaurant" size={tabInfo.size} color={tabInfo.color} />,
          })}
        />
        <Tab.Screen
          name="Favorites"
          component={FavoritesScreen}
          options={{
            tabBarIcon: (tabInfo) => (
              <Ionicons
                name={tabInfo.focused ? 'heart-sharp' : 'heart-outline'}
                size={tabInfo.size}
                color={tabInfo.color}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default TabNavigator;
