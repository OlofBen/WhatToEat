import { getRecipeBoxesByName, setPathToRecipe } from "./recipeBox.js"
import { removeCookies } from "./util.js"

removeCookies()
setPathToRecipe('./recipe.html')
const searchbar = document.getElementById('searchbar')
const recipeList = document.getElementById('recipes')
searchbar.onkeydown =
  function (event) {
    console.log('input')
    if (event.key == "Enter") {
      searchbarAction()
    }
  }

async function searchbarAction() {
  const name = searchbar.value
  const recipeBoxes = await getRecipeBoxesByName(name)
  recipeList.innerHTML = ''
  recipeBoxes.forEach(box => {
    recipeList.appendChild(box)
  });
}
