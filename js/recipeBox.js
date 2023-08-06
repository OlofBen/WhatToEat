import { randomRecipe, getRecipesByName, getOneRandomByCategory } from "./data.js"
import { addCookie } from "./util.js"

let pathToRecipe = '../html/recipe.html'

export function setPathToRecipe(path){
	pathToRecipe = path
}

export async function getRecipeBox() {
	const recipe = await randomRecipe()
	return createRecipeBox(recipe)
}

export async function getRecipeBoxWithCategory(category) {
	const recipe = await getOneRandomByCategory(category)
	return createRecipeBox(recipe)
}

export async function getRecipeBoxesByName(name) {
	const recipes = await getRecipesByName(name)
	if (recipes.meals == null) {
		return []
	}
	return recipes.meals.map(
		recipe => createRecipeBox(recipe)
	)
}

function createRecipeBox(recipe) {
	const container = document.createElement('div')
	container.className = 'recipe'
	container.id = recipe.idMeal
	container.appendChild(createHeader(recipe.strMeal, recipe.idMeal))
	container.appendChild(createImage(recipe.strMealThumb, recipe.strMeal))
	return container
}

function createHeader(headerText, recipeId) {
	const header = document.createElement('h2')
	const link = document.createElement('a')
	link.href = pathToRecipe
	link.innerText = headerText
	header.onclick = () => addCookie(recipeId)

	header.appendChild(link)
	return header
}
function createImage(src, alt) {
	const image = document.createElement('img')
	image.src = src
	image.alt = alt
	return image
}