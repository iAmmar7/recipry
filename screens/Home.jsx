import React from 'react';
import { FlatList, StyleSheet } from 'react-native';

import { CategoryTile } from '/components';
import { CATEGORIES } from '../data';
import colors from '../constants/colors';

const HomeScreen = (props) => {
  const { navigation } = props;

  return (
    <FlatList
      data={CATEGORIES}
      numColumns={2}
      style={styles.flatList}
      renderItem={(data) => (
        <CategoryTile
          title={data.item.title}
          color={data.item.color}
          imageUrl={data.item.imageUrl}
          onSelect={() => navigation.navigate('Meals', { category: data.item })}
        />
      )}
    />
  );
};

const styles = StyleSheet.create({
  flatList: {
    backgroundColor: colors.secondary,
  },
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
  },
});

export default HomeScreen;
