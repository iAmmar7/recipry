import Category from '../models/category';

const colors = [
  '#41d95d',
  '#f5a442',
  '#47fced',
  '#f5d142',
  '#368dff',
  '#f5428d',
  '#9eecff',
  '#f54242',
  '#ffc7ff',
  '#b9ffb0',
];

const categories = [
  'Breakfast',
  'Asian',
  'Italian',
  'French',
  'Hamburgers',
  'Quick & Easy',
  'Light & Lovely',
  'German',
  'Exotic',
  'Summer',
];

const randomNumbers = (max) => {
  const generatedNumbers = [];
  let i = 0;
  while (i < max) {
    generatedNumbers.push(
      (function generateUniqueNumber() {
        const newNumber = Math.floor(Math.random() * (max - 0)) + 0;
        if (generatedNumbers.includes(newNumber)) return generateUniqueNumber();
        return newNumber;
      })()
    );
    i++;
  }
  return generatedNumbers;
};

export const CATEGORIES = randomNumbers(10).map(
  (item, index) => new Category(`c${index}`, categories[index], colors[item])
);
