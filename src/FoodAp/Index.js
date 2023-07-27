import React from 'react'
import { useEffect, useState } from 'react'

import { getMealCategories, getMealByCategory, getMealDetails } from './api'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { removeIngredient, addIngredient } from '../utils'

function Index() {
	const [categories, setCategories] = useState([])
	//creat a state for active category
	const [activeCategory, setActiveCategory] = useState('')
	const [meals, setMeals] = useState({})
	const [ingredients, setIngredients] = useState([])
	const [activeIngredients, setActiveIngredients] = useState([])

	useEffect(() => {
		getMealCategories().then((data) => {
			const foodCategoryArr = data.categories.map((obj) => {
				return obj.strCategory
			})
			setCategories(foodCategoryArr)
		})
	}, [])

	useEffect(() => {
		if (activeCategory !== '') {
			getMealByCategory(activeCategory).then((data) => {
				const mealArr = data.meals.map((obj) => {
					return obj.strMeal
				})
				setMeals(mealArr)

				const promiseArr = data.meals.map((obj) => {
					return getMealDetails(obj.idMeal)
				})
				Promise.all(promiseArr).then((data) => {
					const ingredientsArr = data.reduce((prev, curr) => {
						const c = curr.meals[0]

						for (let i = 1; i <= 20; i++) {
							const keyName = `strIngredient${i}`
							const value = c[keyName]

							if (
								value !== null &&
								value !== '' &&
								prev.indexOf(value) === -1
							) {
								prev.push(value)
							}
						}

						return prev
					}, [])

					setIngredients(ingredientsArr)
				})
			})
		}
	}, [activeCategory])

	function handleCategorySelect(event) {
		const foodCategoryType = event.target.value
		setActiveCategory(foodCategoryType)
	}

	function handleAddIng(event) {
		const newActiveIng = event.target.value

		const updatedIngs = removeIngredient(ingredients, newActiveIng)

		const updateActiveIng = addIngredient(activeIngredients, newActiveIng)
		setActiveIngredients(updateActiveIng)
		if (updatedIngs.length < 0) {
			alert()
		}
	}

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
			<Row>
				<Col>
					<h3>Meal Options:</h3>
					<ol>
						{meals.map((meal, index) => {
							console.log(meal)
							return <li key={`${meal}-${index}`}>{meal}</li>
						})}
					</ol>
				</Col>
				<Col>
					<h3>Active Ingredients:</h3>
					<ul>
						{activeIngredients.map((item) => {
							return (
								<div key={item}>
									<li>{item}</li>
								</div>
							)
						})}
					</ul>
				</Col>
				<Col>
					<h3>All Ingredients:</h3>
					<ul>
						{ingredients.map((item) => {
							return (
								<div key={item}>
									<button
										className='btn btn-outline-secondary my-1 btn-sm'
										onClick={handleAddIng}
										value={item}>
										-
									</button>
									{item}
								</div>
							)
						})}
					</ul>
				</Col>
			</Row>
		</div>
	)
}
export default Index
