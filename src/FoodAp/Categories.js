export default function Categories({
	activeCategory,
	categories,
	handleCategorySelect,
}) {
	return (
		<div>
			<h3>Select Catagories</h3>
			<div>Active Category: {activeCategory}</div>
			{categories.length > 0 &&
				categories.map((category) => {
					return (
						<button
							className='btn btn-outline-primary fw-bolder mt-3'
							onClick={handleCategorySelect}
							value={category}
							key={category}>
							{category}
						</button>
					)
				})}
		</div>
	)
}
