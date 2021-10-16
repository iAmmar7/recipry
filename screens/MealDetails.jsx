import React, { useState, useLayoutEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const MealDetails = (props) => {
  const {
    navigation,
    route: { params: { meal } = {} },
  } = props;
  const [favorite, setFavorite] = useState(false);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () =>
        favorite ? (
          <TouchableOpacity onPress={() => setFavorite(!favorite)}>
            <Ionicons name="heart-sharp" size={24} color="white" />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={() => setFavorite(!favorite)}>
            <Ionicons name="heart-outline" size={24} color="white" />
          </TouchableOpacity>
        ),
    });
  }, [navigation, favorite]);

  return (
    <View style={styles.screen}>
      <Text>The MealDetails screen!</Text>
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

export default MealDetails;
