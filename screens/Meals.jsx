import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';

import { MealItem } from '/components';
import { MEALS } from '../data';

const Meals = (props) => {
  const {
    navigation,
    route: { params: { category } = {} },
  } = props;

  const displayedMeals = MEALS.filter((meal) => meal.categoryIds.indexOf(category.id) >= 0);

  return (
    <View style={{ ...styles.screen, backgroundColor: category.color }}>
      <FlatList
        data={displayedMeals}
        renderItem={({ item }) => (
          <MealItem
            title={item.title}
            imageUrl={item.imageUrl}
            duration={item.duration}
            complexity={item.complexity}
            affordability={item.affordability}
            onSelectMeal={() => navigation.navigate('MealDetails', { meal: item })}
          />
        )}
        style={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  list: {
    width: '100%',
  },
});

export default Meals;
