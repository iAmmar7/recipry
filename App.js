import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import { enableScreens } from 'react-native-screens';

import StackNavigator from './navigation/StackNavigator';

// Make RN use native (Android|iOS) screen behavior. Good for performance
enableScreens();

const fetchFonts = () => {
  return Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  });
};

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
      <StackNavigator />
    </>
  );
}
