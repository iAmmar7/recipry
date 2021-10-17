import React from 'react';
import { View, StyleSheet } from 'react-native';

import { MealList } from '/components';
import { MEALS } from '../data';
import colors from '../constants/colors';

const Meals = (props) => {
  const { navigation } = props;

  const favMeals = MEALS.filter((meal) => meal.id === 'm1' || meal.id === 'm2');

  return (
    <View style={styles.screen}>
      <MealList data={favMeals} navigation={navigation} itemBgColor={colors.primary} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.secondary,
  },
});

export default Meals;
