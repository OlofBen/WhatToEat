import { getRecipeBoxWithCategory, getRecipeBox, setPathToRecipe} from "./recipeBox.js"
import { removeCookies } from "./util.js"
import { selectedCategory, addButtonListeners } from "./optionButtons.js"

const recipeHolder = document.getElementById('recipe')
setPathToRecipe('./html/recipe.html')

setTimeout(addRecipe, 10)
removeCookies()
addButtonListeners(newRecipeAction, 'Button')

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
