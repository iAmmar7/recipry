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
        const meal = initialState.meals.find((item) => item.id === action.payload);
        state.favoriteMeals.push(meal);
      }
      return state;
    },
  },
});

export const { toggleFavorite } = mealSlice.actions;

export default mealSlice.reducer;
