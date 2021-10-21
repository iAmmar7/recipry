import React, { useState, useEffect, useCallback } from 'react';
import { View, Switch, StyleSheet, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import colors from '../constants/colors';

import { DrawerIcon, CustomText } from '/components';
import { setFilters } from '../store/features/meals';

const FilterSwitch = ({ label, state, onChange }) => (
  <View style={styles.filterContainer}>
    <CustomText>{label}</CustomText>
    <Switch
      trackColor={{ true: colors.primary, false: colors.lightGrey }}
      thumbColor={colors.lightGrey}
      value={state}
      onValueChange={(newValue) => onChange(newValue)}
    />
  </View>
);

const Filters = (props) => {
  const { navigation } = props;
  const [isGlutenFree, setIsGlutenFree] = useState(false);
  const [isLactoseFree, setIsLactoseFree] = useState(false);
  const [isVegan, setIsVegan] = useState(false);
  const [isVegetarian, setIsVegetarian] = useState(false);
  const dispatch = useDispatch();

  const saveFilter = useCallback(() => {
    const filters = {
      glutenFree: isGlutenFree,
      lactoseFree: isLactoseFree,
      vegan: isVegan,
      vegetarian: isVegetarian,
    };

    dispatch(setFilters(filters));
  }, [isGlutenFree, isLactoseFree, isVegan, isVegetarian]);

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <View style={styles.filterIconContainer}>
          <TouchableOpacity style={styles.filterSave} onPress={() => saveFilter()}>
            <CustomText white>Save</CustomText>
          </TouchableOpacity>
          <DrawerIcon navigation={navigation} />
        </View>
      ),
    });
  }, [saveFilter]);

  return (
    <View style={styles.screen}>
      <CustomText title bold style={styles.title}>
        Available Filters / Restrictions
      </CustomText>
      <FilterSwitch label="Gluten-free" state={isGlutenFree} onChange={setIsGlutenFree} />
      <FilterSwitch label="Lactose-free" state={isLactoseFree} onChange={setIsLactoseFree} />
      <FilterSwitch label="Vegan" state={isVegan} onChange={setIsVegan} />
      <FilterSwitch label="Vegetarian" state={isVegetarian} onChange={setIsVegetarian} />
    </View>
  );
};

const styles = StyleSheet.create({
  filterIconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  filterSave: {
    marginRight: 20,
  },
  screen: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    margin: 20,
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '70%',
    marginVertical: 15,
  },
});

export default Filters;
