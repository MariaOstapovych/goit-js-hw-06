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

const ingredientsArray = [];

ingredients.map(ingredient => {
  const ingredientEl = document.createElement("li");
  ingredientEl.textContent = ingredient;
  ingredientEl.classList.add("item");
  ingredientsArray.push(ingredientEl)
})

ingredientsEl.append(...ingredientsArray)

