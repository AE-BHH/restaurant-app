import React from 'react'
import recipeArr from '../assets/recipesData'
import ActiveIngredients from './ActiveIngredients'
import DiscardedIngredients from './DiscardedIngredients'

function IngredientList(props) {
	return (
		<div className='row'>
			<div className='col'>
				<ActiveIngredients
					activeIngredients={props.activeIngredients}
					removeIngredients={props.handleRemoveIngredients}
				/>
			</div>
			<div className='col'>
				<DiscardedIngredients
					discardedIngredients={props.discardedIngredients}
					restoreIngredients={props.restoreIngredients}
				/>
			</div>
		</div>
	)
}

export default IngredientList
