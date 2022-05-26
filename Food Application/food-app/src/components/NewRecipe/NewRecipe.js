import React from "react";

import RecipeForm from "./RecipeForm";

import "./NewRecipe.css";

const NewRecipe = (props) => {

    const saveRecipeDataHandler = (enteredRecipeData) => {
        const recipeData = {
            ...enteredRecipeData,
            id: Math.random().toString()
        };
        props.onAddExpense(recipeData);
    };
    
    return (
        <div className="new-expense">
            <RecipeForm onSaveRecipeData={saveRecipeDataHandler} />
        </div>
    );  
    
};

export default NewRecipe;