class Meal {
  constructor(
    id,
    categoryIds,
    title,
    affordability,
    complexity,
    imageUrl,
    duration,
    ingredients,
    steps,
    isGlutenFree,
    isVegetarian,
    isLactoseFree,
    isVegan
  ) {
    this.id = id;
    this.categoryIds = categoryIds;
    this.title = title;
    this.affordability = affordability;
    this.complexity = complexity;
    this.imageUrl = imageUrl;
    this.duration = duration;
    this.ingredients = ingredients;
    this.steps = steps;
    this.isGlutenFree = isGlutenFree;
    this.isVegetarian = isVegetarian;
    this.isLactoseFree = isLactoseFree;
    this.isVegan = isVegan;
  }

  get() {
    return {
      id: this.id,
      categoryIds: this.categoryIds,
      title: this.title,
      affordability: this.affordability,
      complexity: this.complexity,
      imageUrl: this.imageUrl,
      duration: this.duration,
      ingredients: this.ingredients,
      steps: this.steps,
      isGlutenFree: this.isGlutenFree,
      isVegetarian: this.isVegetarian,
      isLactoseFree: this.isLactoseFree,
      isVegan: this.isVegan,
    };
  }
}

export default Meal;
