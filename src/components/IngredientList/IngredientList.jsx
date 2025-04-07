import Ingredient from '../Ingredient/Ingredient.jsx';

const IngredientList = (props) => {

    return (
        <ul>
            {props.ingredients.map((ingredient, index) => {
                        return (<Ingredient 
                                    ingredient={ingredient} 
                                    addToBurger={props.addToBurger}
                                    index={index}
                                    isInStack={false}
                                />)
            })}
        </ul>
    );
};

export default IngredientList;
  