import React, { useState } from "react";

import RecipesList from "./RecipesList"
import RecipesFilter from "./RecipesFilter"
import RecipesChart from "./RecipesChart";
import Card from "../UI/Card"
import './Recipes.css'

function Recipes(props) {
    const [filteredYear, setFilteredYear] = useState("2020");

    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    };

    const filteredRecipes = props.food_recipes.filter((recipe) => {
        return recipe.dateOfCreation.getFullYear().toString() === filteredYear;
    });

    // let recipesContent = <p>No recipes found</p>;

    // if (filteredRecipes.length > 0) {
    //     recipesContent = filteredRecipes.map((recipe) => 
    //         (<RecipeItem key={recipe.id} title={recipe.title} dateOfCreation={recipe.dateOfCreation}></RecipeItem>
    //     ));
    // };
    
    return (
        <div>
            <Card className='expenses'> 
                <h2>Recipes</h2>
                <RecipesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
                <RecipesChart recipes={filteredRecipes}/>
                <RecipesList food_recipes={filteredRecipes} />
                {/* <RecipeItem title={props.food_recipes[0].title} dateOfCreation={props.food_recipes[0].dateOfCreation}></RecipeItem>
                <RecipeItem title={props.food_recipes[1].title} dateOfCreation={props.food_recipes[1].dateOfCreation}></RecipeItem> */}
            </Card> 
        </div>                                         
    );

};

export default Recipes;