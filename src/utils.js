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
