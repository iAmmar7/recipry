import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { CustomDrawer } from '/components';
import { FiltersNavigator } from './StackNavigator';
import TabNavigator from './TabNavigator';
import colors from '../constants/colors';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={(props) => <CustomDrawer {...props} />}
        screenOptions={{
          headerShown: false,
          drawerPosition: 'right',
          drawerActiveTintColor: 'grey',
          drawerLabelStyle: {
            color: colors.white,
          },
          drawerType: 'slide',
        }}
      >
        <Drawer.Screen
          name="MealsDrawer"
          component={TabNavigator}
          options={() => ({
            drawerLabel: 'Meals',
          })}
        />
        <Drawer.Screen
          name="FavoritesDrawer"
          component={TabNavigator}
          options={() => ({
            drawerLabel: 'Favorites',
          })}
        />
        <Drawer.Screen
          name="FiltersDrawer"
          component={FiltersNavigator}
          options={() => ({
            drawerLabel: 'Filters',
          })}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default DrawerNavigator;
