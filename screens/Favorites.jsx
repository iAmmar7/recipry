import React from 'react';
import { useSelector } from 'react-redux';
import { View, StyleSheet } from 'react-native';

import { CustomText, MealList } from '/components';
import colors from '../constants/colors';

const Meals = (props) => {
  const { navigation } = props;
  const { favoriteMeals } = useSelector((state) => state.meals);

  if (!favoriteMeals || favoriteMeals?.length < 1)
    return (
      <View style={styles.noData}>
        <CustomText bold>No favorite meals found. Start adding some!</CustomText>
      </View>
    );

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
  noData: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Meals;
