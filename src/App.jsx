// src/App.jsx
import './App.css';
import { useState } from 'react';
import IngredientList from './components/IngredientList/IngredientList.jsx';
import BurgerStack from './components/BurgerStack/BurgerStack.jsx';

const App = () => {
  const availableIngredients = [
    { name: 'Kaiser Bun', color: 'saddlebrown' },
    { name: 'Sesame Bun', color: 'sandybrown' },
    { name: 'Gluten Free Bun', color: 'peru' },
    { name: 'Lettuce Wrap', color: 'olivedrab' },
    { name: 'Beef Patty', color: '#3F250B' },
    { name: 'Soy Patty', color: '#3F250B' },
    { name: 'Black Bean Patty', color: '#3F250B' },
    { name: 'Chicken Patty', color: 'burlywood' },
    { name: 'Lettuce', color: 'lawngreen' },
    { name: 'Tomato', color: 'tomato' },
    { name: 'Bacon', color: 'maroon' },
    { name: 'Onion', color: 'lightyellow' },
    { name: 'Cheddar Cheese', color: '#FDE18B' },
    { name: 'Swiss Cheese', color: '#F1E1A8' },
  ];

  const [stack, setStack] = useState([]);

  const addToBurger = (ingredient) => {
    const stackCopy = [...stack];
    stackCopy.push(ingredient);
    setStack(stackCopy);
  };

  const removeFromBurger = (index) => {

    const stackCopy = [...stack];
    stackCopy.splice(index, 1);
    setStack(stackCopy);

  };
 
  return (
    <main>
      <h1>Burger Stacker</h1>
      <section>
      <IngredientList ingredients={availableIngredients} addToBurger={addToBurger}/>  
      <BurgerStack burger={stack} removeFromBurger={removeFromBurger}/>
      </section>
    </main>
  );
};

export default App;