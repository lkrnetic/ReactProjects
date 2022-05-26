import React, { useState } from "react";

import "./RecipeForm.css"

const RecipeForm = (props) => {

    const [enteredTitle, setEnteredTitle] = useState("");
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState("");

    // const [userInput, setUserInput] = useState({
    //     enteredTitle: "",
    //     enteredAmount: "",
    //     setEnteredDate: ""
    // });

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredTitle: event.target.value,
        // });
        /*
        setUserInput((prevState) => {
            return {...prevState, enteredTitle};
        });
        */
    };

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
        // setUserInput({
        //   ...userInput,
        //   enteredAmount: event.target.value,
        // });
      };

    const dateChangeHandler = (event) => {
        // setUserInput({
        //     ...userInput,
        //     enteredDate: event.target.value,
        // });
        setEnteredDate(event.target.value);
    };

    const submitHandler = (event) => {
        event.preventDefault();

        const recipeData = {
            title: enteredTitle,
            amount: +enteredAmount,
            dateOfCreation: new Date(enteredDate)
        };

        props.onSaveRecipeData(recipeData);
        
        setEnteredTitle("");
        setEnteredAmount("");
        setEnteredDate("");
    };

return (
    <div id="recipeForm">
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type="text" value={enteredTitle} onChange={titleChangeHandler}/>
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input
                        type='number'
                        min='0.01'
                        step='0.01'
                        value={enteredAmount}
                        onChange={amountChangeHandler}
                    />
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input
                        type='date'
                        min='2019-01-01'
                        max='2022-12-31'
                        value={enteredDate}
                        onChange={dateChangeHandler}
                    />
                </div>
                <div className='new-expense__actions'>
                    <button type="submit">Add Expense</button>
                </div>
            </div>
        </form>
    </div>
    );
};

export default RecipeForm;
