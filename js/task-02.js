const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsEl = document.querySelector("#ingredients");
console.log(ingredientsEl)

ingredients.map(ingredient => {
  const ingredientEl = document.createElement("li");
  ingredientEl.textContent = ingredient;
  ingredientEl.classList.add("item")
  ingredientsEl.prepend(ingredientEl)
  return console.log(ingredientEl)
})

