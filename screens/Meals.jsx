import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

import { CATEGORIES } from '../data/dummy-data';

const Meals = (props) => {
  const {
    navigation,
    route: { params: { category } = {} },
  } = props;

  // const selectedCategory = CATEGORIES.find((cat) => cat.id === categoryId);

  console.log('CatId', category);

  return (
    <View style={styles.screen}>
      <Text>The Meals screen!</Text>
      <Button title="Go to Details" onPress={() => navigation.navigate('MealDetails')} />
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
