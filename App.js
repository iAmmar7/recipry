import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';

import colors from './constants/colors';
import HomeScreen from './screens/Home';
import MealsScreen from './screens/Meals';
import MealDetailsScreen from './screens/MealDetails';

const fetchFonts = () => {
  return Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  });
};

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  if (!fontsLoaded)
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontsLoaded(true)}
        onError={(err) => console.log('Fetch fonts error', err)}
      />
    );

  return (
    <>
      <StatusBar style="inverted" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{
              headerStyle: {
                backgroundColor: colors.primary,
              },
              headerTitleStyle: {
                color: colors.white,
                fontFamily: 'open-sans-bold',
              },
            }}
          />
          <Stack.Screen name="Meals" component={MealsScreen} />
          <Stack.Screen name="MealDetails" component={MealDetailsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
