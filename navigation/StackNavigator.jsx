import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TransitionPresets } from '@react-navigation/stack';

import { HomeScreen, MealsScreen, MealDetailsScreen, FavoritesScreen } from '/screens';
import colors from '../constants/colors';

const stackDefaultOptions = {
  ...TransitionPresets.SlideFromRightIOS,
  headerStyle: {
    backgroundColor: colors.primary,
  },
  headerTitleStyle: {
    color: colors.white,
    fontFamily: 'open-sans-bold',
  },
  headerTintColor: colors.white,
};

const Meals = createNativeStackNavigator();

const MealsNavigator = () => {
  return (
    <Meals.Navigator screenOptions={stackDefaultOptions}>
      <Meals.Screen name="Home" component={HomeScreen} />
      <Meals.Screen
        name="Meals"
        component={MealsScreen}
        options={({ route }) => ({
          title: route.params?.category?.title,
          headerStyle: {
            backgroundColor: colors.darkGrey,
          },
        })}
      />
      <Meals.Screen
        name="MealDetails"
        component={MealDetailsScreen}
        options={({ route }) => ({
          headerTitle: route.params?.meal?.title,
        })}
      />
    </Meals.Navigator>
  );
};

const Favorites = createNativeStackNavigator();

const FavoritesNavigator = () => {
  return (
    <Favorites.Navigator screenOptions={stackDefaultOptions}>
      <Favorites.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={() => ({
          headerTitle: 'Your Favorites',
        })}
      />
      <Favorites.Screen
        name="MealDetails"
        component={MealDetailsScreen}
        options={({ route }) => ({
          headerTitle: route.params?.meal?.title,
        })}
      />
    </Favorites.Navigator>
  );
};

export { MealsNavigator, FavoritesNavigator };
