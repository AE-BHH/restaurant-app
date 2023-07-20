import CardGenerator from './CardGenerator'

function RecipeContainer(props) {
	return (
		<div className=''>
			<CardGenerator arr={props.arr} />
		</div>
	)
}
export default RecipeContainer
