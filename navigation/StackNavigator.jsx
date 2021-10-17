import React from 'react';
import { TouchableOpacity } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TransitionPresets } from '@react-navigation/stack';
import { DrawerActions } from '@react-navigation/native';

import { MaterialIcons } from '@expo/vector-icons';

import { HomeScreen, MealsScreen, MealDetailsScreen, FavoritesScreen, FiltersScreen } from '/screens';
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
      <Meals.Screen
        name="Home"
        component={HomeScreen}
        options={({ navigation }) => {
          return {
            headerRight: () => {
              return (
                <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}>
                  <MaterialIcons name="menu" size={24} color="white" />
                </TouchableOpacity>
              );
            },
          };
        }}
      />
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
        options={({ navigation }) => ({
          headerTitle: 'Your Favorites',
          headerRight: () => {
            return (
              <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}>
                <MaterialIcons name="menu" size={24} color="white" />
              </TouchableOpacity>
            );
          },
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

const Filters = createNativeStackNavigator();

const FiltersNavigator = () => {
  return (
    <Filters.Navigator screenOptions={stackDefaultOptions}>
      <Filters.Screen
        name="Filters"
        component={FiltersScreen}
        options={({ navigation }) => ({
          headerTitle: 'Filter Meals',
          headerRight: () => {
            return (
              <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}>
                <MaterialIcons name="menu" size={24} color="white" />
              </TouchableOpacity>
            );
          },
        })}
      />
    </Filters.Navigator>
  );
};

export { MealsNavigator, FavoritesNavigator, FiltersNavigator };
