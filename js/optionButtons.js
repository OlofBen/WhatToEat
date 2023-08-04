import { mealCategories } from "./data.js"

export let selectedCategory = 'Any'

export function addButtonListeners(newRecipeAction, name) {
  mealCategories.forEach(category => {
    addButtonListener(category, newRecipeAction, name)
    });
  document.getElementById('Any' + name)
    .onclick = (_) => {
      selectedCategory = 'Any'
      newRecipeAction()
  }
}

function addButtonListener(category, newRecipeAction, name) {
  const id = category + name
  console.log('id', id)
  document.getElementById(id)
    .onclick = (_) => {
      selectedCategory = category
      newRecipeAction()
    }
}

