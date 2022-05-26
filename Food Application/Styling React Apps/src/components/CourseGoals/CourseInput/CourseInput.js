import React, { useState } from 'react';
// import styled from 'styled-components';

import Button from '../../UI/Button/Button';
import styles from './CourseInput.module.css';

// Instead of writing
// const FormControl = styled.div`
// .form-control {
//   margin: 0.5rem 0;
// }

// .form-control label {
//   font-weight: bold;
//   display: block;
//   margin-bottom: 0.5rem;
// }

// we write 
// margin: 0.5rem 0;

// & label {
//   font-weight: bold;
//   display: block;
//   margin-bottom: 0.5rem;
// }

// const FormControl = styled.div`
//   margin: 0.5rem 0;

//   & label {
//     font-weight: bold;
//     display: block;
//     margin-bottom: 0.5rem;
//     color: ${props => props.invalid ? "red" : "black"}
//   }

//  & input {
//   display: block;
//   width: 100%;
//   border: 1px solid ${props => (props.invalid ? 'red' : '#ccc')};
//   background: ${props => props.invalid ? "#ffd7d7" : "transparent"};
//   font: inherit;
//   line-height: 1.5rem;
//   padding: 0 0.25rem;
// }

// & input:focus {
//   outline: none;
//   background: #fad0ec;
//   border-color: #8b005d;
// }
// `;

const CourseInput = props => {

  const [enteredValue, setEnteredValue] = useState("");
  const [isValid, setIsValid] = useState(true);
  
  const goalInputChangeHandler = event => {
    if (event.target.value.trim().length > 0) {
      setIsValid(true);
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = event => {
    event.preventDefault();

    if (enteredValue.trim().length === 0) {
      setIsValid(false);
      return;
    }

    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`${styles['form-control']} ${!isValid && styles.invalid}`}>
        {/* We can do this way <FormControl className={!isValid && 'invalid'}> */}
        {/* <FormControl invalid={!isValid} > */}
        {/* <div className={`form-control ${!isValid ? 'invalid': ""} `}> */}
        {/* These below are inline styles that we can use */}
        {/* <div className="form-control"> */}
        {/* <label style={{color: !isValid ? "red" : "black"}}>Course Goal</label> */}
        <label>Course Goal</label>
        <input
          // style={{
          //   borderColor: !isValid ? 'red' : '#ccc',
          //   background: !isValid ? 'salmon' : 'transparent'
          // }}
          type="text"
          onChange={goalInputChangeHandler}
        />
        {/* </div> */}
        {/* </FormControl> */}

      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
