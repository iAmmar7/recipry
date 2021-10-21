import React, { useLayoutEffect } from 'react';
import { ScrollView, View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { Ionicons } from '@expo/vector-icons';

import { CustomText } from '/components';
import { toggleFavorite } from '../store/features/meals';
import colors from '../constants/colors';

const MealDetails = (props) => {
  const {
    navigation,
    route: { params: { meal, bgColor } = {} },
  } = props;
  const { favoriteMeals } = useSelector((state) => state.meals);
  const dispatch = useDispatch();

  useLayoutEffect(() => {
    // Add icon on stack navigator header
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={() => dispatch(toggleFavorite(meal.id))}>
          <Ionicons
            name={favoriteMeals.findIndex((item) => item.id === meal.id) > -1 ? 'heart-sharp' : 'heart-outline'}
            size={24}
            color="white"
          />
        </TouchableOpacity>
      ),
    });

    // Change color of tab on Tab navigator
    navigation.getParent().setOptions({
      tabBarColor: bgColor ? colors.darkGrey : colors.primary,
    });
  }, [navigation, favoriteMeals.length]);

  return (
    <ScrollView>
      <Image source={{ uri: meal.imageUrl }} style={styles.image} />
      <View style={{ ...styles.details, backgroundColor: bgColor ? colors.darkGrey : colors.primary }}>
        <CustomText white>{meal.duration}m</CustomText>
        <CustomText white>{meal.complexity.toUpperCase()}</CustomText>
        <CustomText white>{meal.affordability.toUpperCase()}</CustomText>
      </View>
      <CustomText title bold style={styles.title}>
        Ingredients
      </CustomText>
      {meal.ingredients.map((ing) => (
        <View key={ing} style={styles.listItem}>
          <CustomText>{ing}</CustomText>
        </View>
      ))}
      <CustomText title bold style={styles.title}>
        Steps
      </CustomText>
      {meal.steps.map((step, index) => (
        <View key={step} style={styles.listItem}>
          <CustomText bold>{index + 1}</CustomText>
          <CustomText style={styles.hyphen}>-</CustomText>
          <CustomText style={styles.stepDetails}>{step}</CustomText>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 200,
  },
  details: {
    flexDirection: 'row',
    paddingHorizontal: 15,
    paddingVertical: 8,
    marginBottom: 10,
    justifyContent: 'space-around',
  },
  title: {
    textAlign: 'center',
  },
  listItem: {
    marginVertical: 10,
    marginHorizontal: 20,
    borderColor: colors.lightGrey,
    borderWidth: 1,
    padding: 10,
    flexDirection: 'row',
  },
  hyphen: {
    marginHorizontal: 4,
  },
  stepDetails: {
    width: '95%',
  },
});

export default MealDetails;
