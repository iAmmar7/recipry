import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const Meals = (props) => {
  const { navigation } = props;

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
