import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function IngredientScale({ ingredientCount }) {
	const frequentArr = Object.values(ingredientCount)
	const reducedFrequencyArr = frequentArr.reduce((prev, curr) => {
		if (!prev.includes(curr)) {
			prev.push(curr)
		}
		return prev
	}, [])

	const sortedFrequentArr = reducedFrequencyArr.sort((a, b) => a - b)
	const maxCount = Math.max(...sortedFrequentArr)
	const styleFrequentArr = sortedFrequentArr.map((item) => {
		const ratio = item / maxCount
		return {
			filter: `brightness(${1 + ratio})`,
			backgroundColor: 'green',
		}
	})

	return (
		<div className='text-center mt-5'>
			<h3>Ingredient Scale</h3>
			<Row>
				<Col className='text-secondary fw-bolder'>Less Frequent: </Col>
				{styleFrequentArr.map((style, i) => {
					return <Col key={i} style={style}></Col>
				})}

				<Col className='text-secondary fw-bolder'>More Frequent</Col>
			</Row>
		</div>
	)
}
