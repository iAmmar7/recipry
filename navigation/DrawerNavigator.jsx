import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { FiltersNavigator } from './StackNavigator';
import TabNavigator from './TabNavigator';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{
          headerShown: false,
          drawerPosition: 'right',
        }}
      >
        <Drawer.Screen name="FavoritesDrawer" component={TabNavigator} />
        <Drawer.Screen
          name="FiltersDrawer"
          component={FiltersNavigator}
          options={({ route }) => ({
            headerTitle: route.params?.meal?.title,
          })}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default DrawerNavigator;
