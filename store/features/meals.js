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
  reducer: {
    makeFavorite: (state, action) => {
      state.favoriteMeals.push(action.payload);
    },
  },
});

export const { makeFavorite } = mealSlice.actions;

export default mealSlice.reducer;
