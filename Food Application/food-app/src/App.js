import logo from './logo.svg';
import './App.css';
import React, { useState }  from "react";

import NewRecipe from './components/NewRecipe/NewRecipe';
import Recipes from './components/Recipes/Recipes';

const dummy_recipes = [{id: 'e1', title: "FoodItem1", dateOfCreation: new Date(2020, 2, 28), amount: 10}, 
{id: 'e2', title: "FoodItem2", dateOfCreation: new Date(2021, 2, 28), amount: 20},
{id: 'e3', title: "FoodItem3", dateOfCreation: new Date(2022, 2, 28), amount: 30},
];

const App = () => {

  const [recipes, setRecipes] = useState(dummy_recipes);

  const addRecipeHandler = (recipe) => {
    setRecipes((prevRecipes) => {
      return [recipe, ...prevRecipes];
    });
  };

  return (
    <div>
      <NewRecipe onAddExpense = {addRecipeHandler} />
      <Recipes food_recipes = {recipes} /> 
    </div>
  );

}

export default App;
