export function getAllIngredients(recipeArr) {
	return recipeArr.reduce((prev, curr) => {
		curr.ingredients.forEach((item) => {
			if (!prev.includes(item)) {
				prev.push(item)
			}
		})
		return prev
	}, [])
}

export function getActiveRecipes(activeIngredients, recipeArr) {
	return recipeArr.filter((recipe) => {
		let keepRecipe = true
		recipe.ingredients.forEach((ingredient) => {
			if (!activeIngredients.includes(ingredient)) {
				keepRecipe = false
			}
		})

		return keepRecipe
	})
}

export function getUpdatedActiveIngredients(activeIngredients, item) {
	return activeIngredients.filter((element) => {
		if (element === item) {
			return false
		} else {
			return true
		}
	})
}

export function getUpdatedDiscardedIngredients(activeIngredients, item) {
	return [...activeIngredients, item]
}

export function removeIngredient(arr, ingredient) {
	return arr.filter((element) => {
		if (element === ingredient) {
			return false
		} else {
			return true
		}
	})
}

export function addIngredient(prev, ingredient) {
	return [...prev, ingredient]
}

export function sort(arr){
	return arr.sort((a, b) => {
		if (a > b){
			return 1
		} else if (a > b){
			return -1
		} else {
			return 0
		}
	})
}