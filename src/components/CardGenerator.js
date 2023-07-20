function CardGenerator({ arr }) {
	return (
		<div className="row">
			{arr.map((item) => {
				return (
					<div className="col">
						<h3>{item.name}</h3>

						{item.ingredients.map((ingredientItem) => {
							return (
								<ul>
									<li>{ingredientItem}</li>
								</ul>
							)
						})}
					</div>
				)
			})}
		</div>
	)
}

export default CardGenerator
