import Ingredient from '../Ingredient/Ingredient.jsx';

const BurgerStack = (props) => {

    {if (props.burger.length === 0) {
        return (<ul>No Ingredients</ul>);

    } else { 
        
        return (
            <ul>
                {props.burger.map((ingredient, index) => {

                    return (<Ingredient 
                                ingredient={ingredient} 
                                removeFromBurger={props.removeFromBurger}
                                index={index}
                                isInStack={true}
                            />)
                })}
            </ul>
        )
    }
  };
}
  export default BurgerStack;
  