import { getRecipeId } from "./util.js"
import { lookupMealById } from "./data.js"

const recipeTitle = document.getElementById('recipeTitle')
const recipeText = document.getElementById('recipeText')
const recipeIngredients = document.getElementById('recipeIngredients')
const video = document.getElementById('video')

console.log(document.cookie);
setTimeout(loadRecipe, 10)

async function loadRecipe() {
  const id = getRecipeId()
  const recipe = await lookupMealById(id)
  recipeTitle.innerText = recipe.strMeal
  recipeText.innerText = recipe.strInstructions
  let ingredients = []
  let amountOfIngredient = []
  loadIngredientsAndAmount(recipe, ingredients, amountOfIngredient)
  for (let i = 0; i < ingredients.length; i++) {
    const ingredient = ingredients[i];
    const amount = amountOfIngredient[i]
    recipeIngredients.appendChild(
      tableRow(ingredient, amount)
    )
  }
  video.src = recipe.strYoutube
}

function tableRow(ingredient, amount) {
  const row = document.createElement('tr')
  row.appendChild(cell(ingredient))
  row.appendChild(cell(amount))
  return row
}

function cell(ingredient){
  const cell = document.createElement('td')
  cell.textContent = ingredient
  return cell
}

/**Function is needed because api does not store ingredients in array */
function loadIngredientsAndAmount(recipe, ingredients, amountOfIngredient) {
  for (const key in recipe) {
    if (Object.hasOwnProperty.call(recipe, key)) {
      const value = recipe[key]
      fillIngredients(ingredients, key, value)
      fillAmounts(amountOfIngredient, key, value)
    }
  }
}

function fillIngredients(ingredients, key, value) {
  if (key.startsWith('strIngredient') && value != "") {
    ingredients.push(value)
  }
}

function fillAmounts(amountList, key, value) {
  if (key.startsWith('strMeasure') && value != "") {
    amountList.push(value)
  }
}