import React, { useLayoutEffect } from 'react';
import { useSelector } from 'react-redux';
import { View, StyleSheet } from 'react-native';

import { CustomText, MealList } from '/components';
import colors from '../constants/colors';

const Meals = (props) => {
  const {
    navigation,
    route: { params: { category } = {} },
  } = props;
  const { filteredMeals } = useSelector((state) => state.meals);

  useLayoutEffect(() => {
    // Change tab navigation color
    navigation.getParent().setOptions({ tabBarColor: colors.darkGrey });
    return () => navigation.getParent().setOptions({ tabBarColor: colors.primary });
  }, [navigation]);

  const displayedMeals = filteredMeals.filter((meal) => meal.categoryIds.indexOf(category.id) >= 0);

  if (displayedMeals.length === 0)
    return (
      <View style={styles.noData}>
        <CustomText bold>No meals found. Please check your filters!</CustomText>
      </View>
    );

  return (
    <View style={styles.screen}>
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
  noData: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Meals;
