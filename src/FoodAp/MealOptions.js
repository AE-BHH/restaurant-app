export default function MealOptions({ meals, activeMeals }) {
	function isMealActive(meal) {
		return activeMeals.includes(meal)
	}
	return (
		<div>
			<h4>Meal Options:</h4>
			<ul>
				{Object.keys(meals).map((meal, i) => {
					return (
						<li
							key={`${meals}-${i}`}
							className={isMealActive(meal) ? 'active-meal' : 'non-active-meal'}
							style={{ margin: '3px' }}>
							{meal}
						</li>
					)
				})}
			</ul>
		</div>
	)
}
