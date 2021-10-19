import React from 'react';
import { View, StyleSheet } from 'react-native';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';

import colors from '../constants/colors';

function CustomDrawer(props) {
  const { navigation, state } = props;

  return (
    <View style={styles.screen}>
      <DrawerContentScrollView {...props}>
        {(state.routes || []).map((route, index) => {
          // Remove "drawer" from the route name to get the label
          const label = route.name.split('Drawer')[0];

          // @description:
          // Drawer has 3 screens;
          // MealsDrawer - It is a TabNavigator and that TabNavigator has two StackNavigators. In case of MealsDrawer we need to go to the first stack navigator which is MealsTab
          // FavoritesDrawer - Same as MealsDrawer but in case of FavoritesDrawer we need to go to the second stack navigator which is FavoritesTab
          // FiltersDrawer - It is a direct StackNavigator which has only one screen. So, here we don't need to add condtion but I have added for consistency.
          let navigationScreen = '';
          if (route.name === 'MealsDrawer') navigationScreen = 'MealsTab';
          if (route.name === 'FavoritesDrawer') navigationScreen = 'FavoritesTab';
          if (route.name === 'FiltersDrawer') navigationScreen = 'Filters';

          // Check if this route is in focused
          const isFocused = state.index === index;

          return (
            <DrawerItem
              key={route.key}
              label={label}
              activeTintColor="grey"
              labelStyle={{ color: colors.white }}
              focused={isFocused}
              onPress={() => navigation.navigate(route.name, { screen: navigationScreen })}
            />
          );
        })}
      </DrawerContentScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.secondary,
  },
});

export default CustomDrawer;
