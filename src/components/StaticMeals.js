import React from 'react'
import { useState } from 'react'
import filteredIngredients from './IngredientList'
import RecipeContainer from './RecipeContainer'
import IngredientList from './IngredientList'
import CardGenerator from './CardGenerator'
import recipeArr from '../assets/recipesData'
import { getAllIngredients, getActiveRecipes } from '../utils'

function StaticMeals() {
	const [activeIngredients, setActiveIngredients] = useState(
		getAllIngredients(recipeArr)
	)
	const [discardedIngredients, setDiscardedIngredients] = useState([])
	const [activeMeals, setActiveMeals] = useState(recipeArr)

	function handleRemoveIngredients(event) {
		const item = event.target.value

		const updatedActiveMeals = getActiveRecipes(activeIngredients, recipeArr)

		setActiveIngredients((prev) => {
			return prev.filter((element) => {
				if (element === item) {
					return false
				} else {
					return true
				}
			})
		})

		setDiscardedIngredients((previous) => {
			return [...previous, item]
		})

		setActiveMeals(updatedActiveMeals)
	}

	function restoreIngredients(event) {
		const item = event.target.value
		const updatedActiveMeals = getActiveRecipes(activeIngredients, recipeArr)

		setActiveIngredients((prev) => {
			return [...prev, item]
		})
		setDiscardedIngredients((prev) => {
			return prev.filter((element) => {
				if (element === item) {
					return false
				} else {
					return true
				}
			})
		})
		setActiveMeals(updatedActiveMeals)
	}
	return (
		<div>
			<IngredientList
				activeIngredients={activeIngredients}
				handleRemoveIngredients={handleRemoveIngredients}
				discardedIngredients={discardedIngredients}
				restoreIngredients={restoreIngredients}
			/>

			<RecipeContainer arr={activeMeals} />
		</div>
	)
}

export default StaticMeals
