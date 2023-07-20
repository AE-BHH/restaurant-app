import React from 'react'

function ActiveIngredients(props) {
	return (
		<div
			style={{ backgroundColor: 'burlywood', width: '350px', opacity: '0.7' }}>
			<h3>Active Ingredients</h3>
			<ul>
				{props.activeIngredients.map((item) => {
					return (
						<div key={item}>
							<button
								style={{
									backgroundColor: 'darkred',
								}}
								value={item}
								onClick={props.removeIngredients}>
								-
							</button>
							{item}
						</div>
					)
				})}
			</ul>
		</div>
	)
}

export default ActiveIngredients
