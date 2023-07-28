export function getAllIngredients(data) {
	
	return data.reduce((prev, curr) => {
		const c = curr.meals[0]

		for (let i = 1; i <= 20; i++) {
			const keyName = `strIngredient${i}`
			const value = c[keyName]

			if (value !== null && value !== '' && prev.indexOf(value)) {
				prev.push(value)
			}
		}

		return prev
	}, [])
}

export function getAllMeals(data) {
	return data.reduce((prev, curr) => {
		const c = curr.meals[0]
		const ingArr = []

		for (let i = 1; i <= 20; i++) {
			const keyName = `strIngredient${i}`
			const value = c[keyName]
			if (value !== null && value !== '') {
				ingArr.push(value)
			}
		}

		prev[c.strMeal] = ingArr
		return prev
	}, {})
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

export function checkForActiveMeals(activeIngredients, meals) {
	const activeMealArr = []
	Object.keys(meals).forEach((meal) => {
		let shouldAddMeal = true

		meals[meal].forEach((ingredient) => {
			if (!activeIngredients.includes(ingredient)) {
				shouldAddMeal = false
			}
		})

		if (shouldAddMeal) {
			activeMealArr.push(meal)
		}
	})
	return activeMealArr
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

export function sort(arr) {
	return arr.sort((a, b) => {
		if (a > b) {
			return 1
		} else if (a > b) {
			return -1
		} else {
			return 0
		}
	})
}
export function getIngredientCount(data) {
	return data.reduce((prev, curr) => {
		const c = curr.meals[0]

		for (let i = 1; i <= 20; i++) {
			const keyName = `strIngredient${i}`
			const value = c[keyName]
			if (value !== null && value !== '') {
				if (prev.hasOwnProperty(value)) {
					prev[value] += 1
				} else {
					prev[value] = 1
				}
			}
		}

		return prev
	}, {})
}

export function removesActiveIng(arr, ingredient) {
	return arr.filter((element) => {
		if (element === ingredient) {
			return false
		} else {
			return true
		}
	})
}

export function updateAllIngredient(prev, ingredient) {
	return [...prev, ingredient]
}