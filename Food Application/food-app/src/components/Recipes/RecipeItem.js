import React, { useState } from 'react';

import RecipeCreationDate from "./RecipeCreationDate.js"
import Card from "../UI/Card"
import "./RecipeItem.css"

const RecipeItem = (props) => {
    // const expenseDate = new Date(2021, 2, 28);
    // const expenseTitle = "Car Insurance";
    // const expenseAmount = 294.67;
    // const month = props.dateOfCreation.toLocaleString('en-US', { month: 'long'});
    // const day = props.dateOfCreation.toLocaleString('en-US', { day: '2-digit'});

    return (
        <li>
            <Card className='expense-item'>
              <RecipeCreationDate dateOfCreation = {props.dateOfCreation} />
              <div className='expense-item__description'>
                <h2 id="recipe_item_id">{props.title}</h2>
                <div className='expense-item__price'>${props.amount}</div>
              </div>
            </Card>
        </li>
    );

  }
  
export default RecipeItem;