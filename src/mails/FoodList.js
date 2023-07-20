import React from 'react'
import recipeArr from '../assets/recipesData'
import RecipeGenerator from '../components/RecipeGenerator'

function FoodList() {
	return (
		<div>
			<RecipeGenerator recipes={recipeArr} />
		</div>
	)
}

export default FoodList
