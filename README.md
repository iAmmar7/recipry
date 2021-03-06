# recipry
Recipry is a react native based food recipes application.

## Purpose
> The purpose of this project is to learn how to integrate multiple navigators inside a single parent and how to integrate those navigators with redux :bangbang:

## Few features
- For navigation, this app is using *four* different navigators provided by the [React Navigation](https://reactnavigation.org/docs/getting-started/) library
  - **Stack Navigator**,
  - **Bottom Tabs Navigator** (for *iOS*),
  - **Material Bottom Tabs Navigator** (for *Android*), and
  - **Drawer Navigator**.
- Data flow between different screens through different these navigator options :arrows_counterclockwise:
- Different tab and header color according to the current route :rainbow:
- Cool color change algorithm for meal categories that allows user to see different color tiles every time they open the app :rainbow:
- Allow user to add recipe in their favorites section :heart:
- User can select few filters and meals are displayed to the user according to his/her filter selection :left_right_arrow:
- This app is using the **Open Sans** font for all the text :capital_abcd:
- For state management, this app has been integrated with **Redux** using [Redux Toolkit](https://redux-toolkit.js.org/) :purple_circle:

## Technologies
- React Native <img align="center" alt="ReactNative" src="https://img.shields.io/badge/-ReactNative-45b8d8?style=flat-square&logo=react&logoColor=white" />
- Expo CLI <img align="center" alt="Expo" src="https://img.shields.io/badge/-Expo-000000?style=flat-square&logo=expo&logoColor=white" />
- React Navigation <img align="center" alt="ReactNavigation" src="https://img.shields.io/badge/-ReactNavigation-52457B?style=flat-square&logo=react&logoColor=white" />
- Redux Toolkit <img align="center" alt="Redux" src="https://img.shields.io/badge/-Redux-764ABC?style=flat-square&logo=redux&logoColor=white" />

## App screens
| Home screen | Favorites screen | Favorite Meal Details screen | Side Drawer | Filters screen |
| ----------- | ------------ | -------------------------------- | ----------- | -------------- |
| <img src="assets/Home.png" width="200"/> | <img src="assets/Favorites.png" width="200"/> | <img src="assets/FavoriteMealDetails.png" width="200"/> | <img src="assets/Drawer.png" width="200"/> | <img src="assets/Filters.png" width="200"/> |

| Meals screen | Meals Details screen |
| ------------ | -------------------- |
| <img src="assets/Meals.png" width="200"/> | <img src="assets/MealDetails.png" width="200"/> |
