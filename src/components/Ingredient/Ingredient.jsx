const Ingredient = (props) => {

    return (
        <li key={props.index} style={{ backgroundColor: props.ingredient.color}}>
        {props.ingredient.name}
        {props.isInStack ? <button onClick={() => props.removeFromBurger(props.index)}>&#215;</button>
                        : <button onClick={() => props.addToBurger(props.ingredient)}>&#43;</button>}
        </li>)  

};
  
export default Ingredient;