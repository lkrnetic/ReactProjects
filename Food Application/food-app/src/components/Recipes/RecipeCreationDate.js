import React from "react";

import "./RecipeCreationDate.css"

function RecipeCreationDate(props) {

    const month = props.dateOfCreation.toLocaleString('en-US', { month: 'long'});
    const day = props.dateOfCreation.toLocaleString('en-US', { day: '2-digit'});
    const year = props.dateOfCreation.getFullYear();

    return (
        <div className='expense-date'>
          <div className='expense-date__month'>{month}</div>
          <div className='expense-date__year'>{year}</div>
          <div className='expense-date__day'>{day}</div>
        </div>
      );
      
}

export default RecipeCreationDate;