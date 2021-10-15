import React from 'react';
import { View, Text, Button, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import colors from '../constants/colors';

import { CATEGORIES } from '../data/dummy-data';

const HomeScreen = (props) => {
  const { navigation } = props;

  return (
    <FlatList
      data={CATEGORIES}
      numColumns={2}
      style={styles.flatList}
      renderItem={(data) => (
        <TouchableOpacity style={styles.gridItem} onPress={() => navigation.navigate('Meals', { category: data.item })}>
          <View>
            <Text>{data.item.title}</Text>
          </View>
        </TouchableOpacity>
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
