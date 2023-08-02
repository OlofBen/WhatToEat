import { getRandomInt } from "./util.js"

export async function randomRecipe() {
	const response = await fetch('https://www.themealdb.com/api/json/v1/1/random.php')
	const json = await response.json()
	return await json.meals[0]
}

export const mealCategories = [
	'Vegan',
	'Vegetarian',
	'Beef',
	'Pork',
	'Chicken',
	'Lamb',
	'Goat',
	'Seafood',
	'Pasta'
]

export async function lookupMealById(id) {
	const response = await fetch('https://www.themealdb.com/api/json/v1/1/lookup.php?i=' + id)
	const meals = await response.json()
	return await meals.meals[0]
}

export async function getRecipesByName(name) {
	const response = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=' + name)
	return await response.json()
}

export async function filerByCategory(category) {
	const response = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=' + category)
	return await response.json()
}

export async function getOneRandomByCategory(category) {
	const allFiltered = await filerByCategory(category)
	const recipe = allFiltered.meals[getRandomInt(allFiltered.meals.length)]
	return await lookupMealById(recipe.idMeal)
}
