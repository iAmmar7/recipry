import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';

import { MEALS } from '../data';
import CustomText from '/components/CustomText';

const Meals = (props) => {
  const {
    navigation,
    route: { params: { category } = {} },
  } = props;

  const displayedMeals = MEALS.filter((meal) => meal.categoryIds.indexOf(category.id) >= 0);

  console.log('displayedMeals', displayedMeals);

  return (
    <View style={styles.screen}>
      <FlatList
        data={displayedMeals}
        renderItem={(data) => (
          <View>
            <CustomText>{data.item.title}</CustomText>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Meals;
