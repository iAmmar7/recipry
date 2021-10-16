import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MealDetails = (props) => {
  const {
    route: { params: { meal } = {} },
  } = props;

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
