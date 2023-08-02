import { getRecipeBoxWithCategory, getRecipeBox, setPathToRecipe} from "./recipeBox.js"
import { mealCategories } from "./data.js"
import { removeCookies } from "./util.js"

const recipeHolder = document.getElementById('recipe')
let selectedCategory = 'Any'
setPathToRecipe('./html/recipe.html')

setTimeout(addRecipe, 10)
removeCookies()
addButtonListeners(newRecipeAction)

async function addRecipe() {
  recipeHolder.appendChild(await recipeBox())
}

async function newRecipeAction() {
  const box = await recipeBox()
  recipeHolder.replaceChild(box, recipeHolder.firstChild)
}

async function recipeBox() {
  if (selectedCategory == 'Any') {
    return await getRecipeBox()
  } else {
    return await getRecipeBoxWithCategory(selectedCategory)
  }
}

function addButtonListeners(newRecipeAction) {
  mealCategories.forEach(category => {
    addButtonListener(category, newRecipeAction)
    });
  document.getElementById('AnyButton')
    .onclick = (_) => {
      selectedCategory = 'Any'
      newRecipeAction()
  }
}

function addButtonListener(category, newRecipeAction) {
  const id = category + 'Button'
  document.getElementById(id)
    .onclick = (_) => {
      selectedCategory = category
      newRecipeAction()
    }
}

