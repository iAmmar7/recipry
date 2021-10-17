import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TransitionPresets } from '@react-navigation/stack';

import { HomeScreen, MealsScreen, MealDetailsScreen } from '/screens';
import colors from '../constants/colors';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
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
        name="CategoryMeals"
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
          headerTitle: route.params?.meal?.title,
        })}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;
