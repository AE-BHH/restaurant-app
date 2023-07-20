import React from 'react'

function DiscardedIngredients(props) {
	return (
		<div
			style={{
				backgroundColor: 'forestgreen',
				width: '350px',
				opacity: '0.7',
			}}>
			<h3>Discarded Ingredients</h3>
			<ul>
				{props.discardedIngredients.map((item) => {
					return (
						<div key={item}>
							<button
								style={{
									backgroundColor: 'burlywood',
								}}
								value={item}
								onClick={props.restoreIngredients}>
								+
							</button>
							{item}
						</div>
					)
				})}
			</ul>
		</div>
	)
}

export default DiscardedIngredients
