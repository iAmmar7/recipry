import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';

import MealItem from './MealItem';

const Meals = (props) => {
  const { data, itemBgColor, navigation } = props;

  return (
    <View style={{ ...styles.container }}>
      <FlatList
        data={data}
        style={styles.list}
        renderItem={({ item }) => (
          <MealItem
            title={item.title}
            imageUrl={item.imageUrl}
            duration={item.duration}
            complexity={item.complexity}
            affordability={item.affordability}
            onSelectMeal={() => navigation.navigate('MealDetails', { meal: item })}
            bgColor={itemBgColor}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
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
