import React from 'react';
import { TouchableOpacity } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { TransitionPresets } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';

import { HomeScreen, MealsScreen, MealDetailsScreen } from '/screens';
import colors from '../constants/colors';

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
            headerTitle: route.params?.meal?.title,
            // headerRight: () => (
            //   <TouchableOpacity onPress={() => console.log('fav!!')}>
            //     <Ionicons name="heart-outline" size={24} color="white" />
            //   </TouchableOpacity>
            // ),
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;
