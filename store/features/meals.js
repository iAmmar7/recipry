import { createSlice } from '@reduxjs/toolkit';

import { MEALS } from '../../data';

const initialState = {
  meals: MEALS,
  filteredMeals: MEALS,
  favoriteMeals: [],
};

export const mealSlice = createSlice({
  name: 'meals',
  initialState,
  reducers: {
    toggleFavorite: (state, action) => {
      const index = state.favoriteMeals.findIndex((item) => item.id === action.payload);
      if (index > -1) {
        state.favoriteMeals.splice(index, 1);
      } else {
        const meal = state.meals.find((item) => item.id === action.payload);
        state.favoriteMeals.push(meal);
      }
      return state;
    },
    setFilters: (state, action) => {
      const filters = action.payload;
      const updatedFilteredMeals = state.meals.filter((meal) => {
        if (filters.glutenFree && !meal.isGlutenFree) {
          return false;
        }
        if (filters.lactoseFree && !meal.isLactoseFree) {
          return false;
        }
        if (filters.vegetarian && !meal.isVegetarian) {
          return false;
        }
        if (filters.vegan && !meal.isVegan) {
          return false;
        }
        return meal;
      });
      state.filteredMeals = updatedFilteredMeals;
    },
  },
});

export const { toggleFavorite, setFilters } = mealSlice.actions;

export default mealSlice.reducer;
