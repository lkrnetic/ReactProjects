import React from 'react';

import RecipeItem from './RecipeItem';
import './RecipesList.css';

const RecipesList = (props) => {

  if (props.food_recipes.length === 0) {
    return <h2 className='expenses-list__fallback'>Found no recipes.</h2>;
  }

  return (
    <ul className='expenses-list'>
      {props.food_recipes.map((recipe) => (
        <RecipeItem
          key={recipe.id}
          title={recipe.title}
          dateOfCreation={recipe.dateOfCreation}
          amount={recipe.amount}
        />
      ))}
    </ul>
  );
};

export default RecipesList;