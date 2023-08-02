import {removeCookies} from './util.js'
import {setPathToRecipe} from './recipeBox.js'

let numberOfRecipes = 7
const recipeList = document.getElementById('recipesList')

removeCookies()
setPathToRecipe('./recipe.html')

function crateRecopies() {
  for (let i = 0; i < numberOfRecipes; i++) {
    
  }
  
}

async function recipeBox() {
  if (selectedCategory == 'Any') {
    return await getRecipeBox()
  } else {
    return await getRecipeBoxWithCategory(selectedCategory)
  }
}

