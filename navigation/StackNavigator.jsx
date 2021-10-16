import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { TransitionPresets } from '@react-navigation/stack';

import colors from './constants/colors';
import HomeScreen from './screens/Home';
import MealsScreen from './screens/Meals';
import MealDetailsScreen from './screens/MealDetails';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          ...TransitionPresets.SlideFromRightIOS,
          headerStyle: {
            backgroundColor: colors.primary,
          },
          headerTitleStyle: {
            color: colors.white,
            fontFamily: 'open-sans-bold',
          },
          headerTintColor: colors.white,
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen
          name="Meals"
          component={MealsScreen}
          options={({ route }) => ({
            title: route.params?.category?.title,
            headerStyle: {
              backgroundColor: colors.darkGrey,
            },
          })}
        />
        <Stack.Screen
          name="MealDetails"
          component={MealDetailsScreen}
          options={({ route }) => ({
            title: route.params?.meal?.title,
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;
