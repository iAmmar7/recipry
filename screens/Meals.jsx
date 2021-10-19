import React, { useLayoutEffect } from 'react';
import { View, StyleSheet } from 'react-native';

import { MealList } from '/components';
import { MEALS } from '../data';
import colors from '../constants/colors';

const Meals = (props) => {
  const {
    navigation,
    route: { params: { category } = {} },
  } = props;

  useLayoutEffect(() => {
    // navigation.getParent().setOptions({ tabBarColor: colors.darkGrey });
    // return () => navigation.getParent().setOptions({ tabBarColor: colors.primary });
  }, [navigation]);

  const displayedMeals = MEALS.filter((meal) => meal.categoryIds.indexOf(category.id) >= 0);

  return (
    <View style={{ ...styles.screen, backgroundColor: category.color }}>
      <MealList
        data={displayedMeals}
        navigation={navigation}
        itemBgColor={colors.darkGrey}
        screenColor={category.color}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});

export default Meals;
