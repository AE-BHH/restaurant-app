export default function IngredientCategory({
	activeIngredients,
	handleRemoveIng,
}) {
	return (
		<div>
			<h3>Active Ingredients:</h3>
			<ul>
				{activeIngredients.map((ingredient) => {
					return (
						<div
							key={ingredient}
							style={{ backgroundColor: 'lightgrey', margin: '3px' }}>
							<button
								className='btn btn-primary btn-sm'
								value={ingredient}
								onClick={handleRemoveIng}>
								-
							</button>
							{ingredient}
						</div>
					)
				})}
			</ul>
		</div>
	)
}
