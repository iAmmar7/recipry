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
  {
    id: 'c7',
    name: 'Breakfast',
    imageUrl: 'https://www.freeiconspng.com/thumbs/breakfast-png/download-breakfast-png-clipart-8.png',
  },
  {
    id: 'c8',
    name: 'Asian',
    imageUrl: 'https://banner.uclipart.com/20200111/vga/chicken-soup-cutlery-dish.png',
  },
  { id: 'c1', name: 'Italian', imageUrl: 'https://banner.uclipart.com/20200112/arv/delivery-pizza-food-cuisine.png' },
  { id: 'c9', name: 'French', imageUrl: 'https://banner.uclipart.com/20200112/zql/hamburger-line.png' },
  { id: 'c3', name: 'Hamburgers', imageUrl: 'https://banner.uclipart.com/20200112/qqu/fast-food-line-headgear.png' },
  {
    id: 'c2',
    name: 'Quick & Easy',
    imageUrl: 'https://banner.uclipart.com/20200112/pa/pasta-food-household-cleaning-supply.png',
  },
  {
    id: 'c5',
    name: 'Light & Lovely',
    imageUrl: 'https://banner.uclipart.com/20200706/vxr/sandwich-toast-salad-for-food-5f02d08dd4f564.40937162.png',
  },
  {
    id: 'c4',
    name: 'German',
    imageUrl: 'https://banner.uclipart.com/20200111/igc/lamb-meat-meat-food.png',
  },
  {
    id: 'c6',
    name: 'Exotic',
    imageUrl: 'https://banner.uclipart.com/20200112/xp/cake-baking-cup-food.png',
  },
  {
    id: 'c10',
    name: 'Summer',
    imageUrl: 'https://banner.uclipart.com/20200112/rco/ice-cream-ice-cream-cone-food.png',
  },
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
  (item, index) => new Category(categories[index].id, categories[index].name, colors[item], categories[index].imageUrl)
);
