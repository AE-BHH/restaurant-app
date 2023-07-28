export default function AllIngredientCategory({
	ingredients,
	handleAddIng,
	ingredientCount,
}) {
	function getStyle(item) {
		const maxCount = Math.max(...Object.values(ingredientCount))
		const count = ingredientCount[item]
		const ratio = count / maxCount
		return {
			backgroundColor: 'green',
			filter: `brightness(${1 + ratio})`,
			margin: '3px',
		}
	}

	return (
		<div>
			<h3>All Ingredients:</h3>

			{ingredients.map((item, i) => {
				return (
					<div key={`${item}-${i}`} style={getStyle(item)}>
						<button
							className='btn btn-primary btn-sm'
							onClick={handleAddIng}
							value={item}>
							+
						</button>
						{item}
					</div>
				)
			})}
		</div>
	)
}
