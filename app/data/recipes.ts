export type Recipe = {
  id: string;
  title: string;
  emoji: string;
  minutes: number;
  difficulty: "Easy" | "Medium" | "Hard";
  cuisine: string;
  ingredients: string[];
  steps: string[];
};

export const recipes: Recipe[] = [
  {
    id: "margherita-pizza",
    title: "Margherita Pizza",
    emoji: "🍕",
    minutes: 35,
    difficulty: "Medium",
    cuisine: "Italian",
    ingredients: ["Pizza dough", "Tomato sauce", "Fresh mozzarella", "Basil"],
    steps: [
      "Stretch the dough into a round base.",
      "Spread the sauce and add mozzarella.",
      "Bake hot until the crust blisters, then top with basil.",
    ],
  },
  {
    id: "veg-biryani",
    title: "Veg Biryani",
    emoji: "🍛",
    minutes: 50,
    difficulty: "Hard",
    cuisine: "Indian",
    ingredients: ["Basmati rice", "Mixed vegetables", "Yogurt", "Biryani masala", "Fried onions"],
    steps: [
      "Marinate the vegetables in yogurt and masala.",
      "Parboil the rice until 70% cooked.",
      "Layer rice over vegetables with fried onions.",
      "Cover tightly and cook on low heat for 20 minutes.",
    ],
  },
  {
    id: "masala-dosa",
    title: "Masala Dosa",
    emoji: "🥞",
    minutes: 40,
    difficulty: "Medium",
    cuisine: "South Indian",
    ingredients: ["Dosa batter", "Potatoes", "Onions", "Mustard seeds", "Turmeric"],
    steps: [
      "Boil and mash the potatoes.",
      "Temper mustard seeds, then fry onions and turmeric and mix in the potatoes.",
      "Spread the batter thin on a hot tawa.",
      "Add the filling, fold, and serve with chutney.",
    ],
  },
  {
    id: "avocado-toast",
    title: "Avocado Toast",
    emoji: "🥑",
    minutes: 10,
    difficulty: "Easy",
    cuisine: "Cafe",
    ingredients: ["Bread slices", "Ripe avocado", "Lemon juice", "Salt", "Chilli flakes"],
    steps: [
      "Toast the bread until golden.",
      "Mash the avocado with lemon juice and salt.",
      "Spread on the toast and sprinkle chilli flakes.",
    ],
  },
  {
    id: "veg-sushi-roll",
    title: "Veg Sushi Roll",
    emoji: "🍣",
    minutes: 45,
    difficulty: "Hard",
    cuisine: "Japanese",
    ingredients: ["Sushi rice", "Nori sheets", "Cucumber", "Carrot", "Rice vinegar"],
    steps: [
      "Cook the rice and season with rice vinegar.",
      "Spread the rice on a nori sheet.",
      "Add cucumber and carrot strips, then roll tightly.",
      "Slice into pieces with a wet knife.",
    ],
  },
  {
    id: "tacos",
    title: "Veggie Tacos",
    emoji: "🌮",
    minutes: 25,
    difficulty: "Easy",
    cuisine: "Mexican",
    ingredients: ["Taco shells", "Beans", "Lettuce", "Tomato", "Cheese"],
    steps: [
      "Warm the beans with a little spice.",
      "Chop the lettuce and tomato.",
      "Fill the shells with beans, veggies and cheese.",
    ],
  },
];

export function getRecipe(id: string): Recipe | undefined {
  return recipes.find((recipe) => recipe.id === id);
}