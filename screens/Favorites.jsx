import React from 'react';
import { useSelector } from 'react-redux';
import { View, StyleSheet } from 'react-native';

import { MealList } from '/components';
import colors from '../constants/colors';

const Meals = (props) => {
  const { navigation } = props;
  const { favoriteMeals } = useSelector((state) => state.meals);

  return (
    <View style={styles.screen}>
      <MealList data={favoriteMeals} navigation={navigation} itemBgColor={colors.primary} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});

export default Meals;
