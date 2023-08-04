import { removeCookies } from './util.js'
import { selectedCategory, addButtonListeners } from "./optionButtons.js"
import { getRecipeBoxWithCategory, getRecipeBox, setPathToRecipe } from "./recipeBox.js"


let numberOfRecipes = 7
const recipeList = document.getElementById('recipesList')

removeCookies()
setPathToRecipe('./recipe.html')

addButtonListeners(newRecipeAction, 'Button')

async function newRecipeAction() {
  removeRecipes()
  await crateRecipes()
}

async function removeRecipes() {
  recipeList.innerHTML = ''
}
async function crateRecipes() {
  for (let i = 0; i < numberOfRecipes; i++) {
    const listItem = document.createElement('li')
    const box = await recipeBox()
    listItem.appendChild(box)
    recipeList.appendChild(listItem)
    addBoxButtons(i, listItem)
  }
}

function addBoxButtons(index, listItem) {
  const container = document.createElement('section')
  container.title = 'Buttons for recipe ' + index
  container.innerHTML = `
<h2>Options</h2>
<ul>
	<li><button title="Any Recipe ${index}" id="AnyButtonRecipe${index}">Any</button></li>
	<li><button title="Vegan Recipe ${index}" id="VeganButtonRecipe${index}">Vegan</button></li>
	<li><button title="Vegetarian Recipe ${index}" id="VegetarianButtonRecipe${index}">Vegetarian</button></li>
	<li><button title="Beef Recipe ${index}" id="BeefButtonRecipe${index}">Beef</button></li>
	<li><button title="Chicken Recipe ${index}" id="ChickenButtonRecipe${index}">Chicken</button></li>
	<li><button title="Pork Recipe ${index}" id="PorkButtonRecipe${index}">Pork</button></li>
	<li><button title="Lamb Recipe ${index}" id="LambButtonRecipe${index}">Lamb</button></li>
	<li><button title="Goat Recipe ${index}" id="GoatButtonRecipe${index}">Goat</button></li>
	<li><button title="Seafood Recipe ${index}" id="SeafoodButtonRecipe${index}">Seafood</button></li>
	<li><button title="Pasta Recipe ${index}" id="PastaButtonRecipe${index}">Pasta</button></li>
</ul>
  `
  listItem.appendChild(container)
  addButtonListeners(() => newRecipe(listItem), 'ButtonRecipe' + index)
}

async function newRecipe(container) {
  const box = await recipeBox()
  container.replaceChild(box, container.firstChild)
}

async function recipeBox() {
  if (selectedCategory == 'Any') {
    return await getRecipeBox()
  } else {
    return await getRecipeBoxWithCategory(selectedCategory)
  }
}

