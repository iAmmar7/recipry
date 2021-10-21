import { configureStore } from '@reduxjs/toolkit';

import mealSlice from './features/meals';

const store = configureStore({
  reducer: {
    meals: mealSlice,
  },
});

export default store;
