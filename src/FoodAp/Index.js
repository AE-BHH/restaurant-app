import React from 'react'
import { useEffect, useState } from 'react'
import { getMealCategories, getMealByCategory, getMealDetails } from './api'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Categories from './Categories'
import MealOptions from './MealOptions'
import IngredientCategory from './IngredientCategory'
import AllIngredientCategory from './AllIngredientCategory'
import IngredientScale from './IngredientScale'
import {
	removeIngredient,
	addIngredient,
	getAllIngredients,
	getAllMeals,
	checkForActiveMeals,
	getIngredientCount,
	sort,
	removesActiveIng,
	updateAllIngredient,
} from '../utils'

function Index() {
	const [categories, setCategories] = useState([])
	const [activeCategory, setActiveCategory] = useState('')
	const [meals, setMeals] = useState({})
	const [ingredients, setIngredients] = useState([])
	const [activeIngredients, setActiveIngredients] = useState([])
	const [activeMeals, setActiveMeals] = useState([])
	const [ingredientCount, setIngredientCount] = useState({})

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
				const promiseArr = data.meals.map((obj) => {
					return getMealDetails(obj.idMeal)
				})

				Promise.all(promiseArr).then((data) => {
					const ingredientsArr = getAllIngredients(data)
					const mealObj = getAllMeals(data)
					const ingredientCountObj = getIngredientCount(data)

					setMeals(mealObj)
					setIngredients(sort(ingredientsArr))
					setIngredientCount(ingredientCountObj)
				})
			})
		}
	}, [activeCategory])

	function handleCategorySelect(event) {
		const foodCategoryType = event.target.value
		setActiveCategory(foodCategoryType)
		setActiveIngredients([])
	}

	function handleAddIng(event) {
		const newActiveIng = event.target.value

		const updatedIngs = removeIngredient(ingredients, newActiveIng)
		setIngredients(updatedIngs)

		const updateActiveIng = addIngredient(activeIngredients, newActiveIng)
		setActiveIngredients(updateActiveIng)

		const updatedActiveMeals = checkForActiveMeals(updateActiveIng, meals)
		setActiveMeals(updatedActiveMeals)
	}

	function handleRemoveIng(event) {
		const removeActiveIng = event.target.value

		const updateRemovedIng = removesActiveIng(
			activeIngredients,
			removeActiveIng
		)
		setActiveIngredients(updateRemovedIng)

    const updateAllIngredients = updateAllIngredient(
			ingredients,
			removeActiveIng
		)
    setIngredients(updateAllIngredients)

	}

	return (
		<div>
			<Categories
				activeCategory={activeCategory}
				categories={categories}
				handleCategorySelect={handleCategorySelect}
			/>
			<Row>
				<IngredientScale ingredientCount={ingredientCount} />
			</Row>
			<Row>
				<Col>
					<MealOptions meals={meals} activeMeals={activeMeals} />
				</Col>
				<Col>
					<IngredientCategory
						activeIngredients={activeIngredients}
						handleRemoveIng={handleRemoveIng}
					/>
				</Col>
				<Col>
					<AllIngredientCategory
						ingredients={ingredients}
						handleAddIng={handleAddIng}
						ingredientCount={ingredientCount}
					/>
				</Col>
			</Row>
		</div>
	)
}
export default Index
