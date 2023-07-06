import React, { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  // ---------------------------------------------------------------------------------------------
  /*
	Doing all 3 at once
	*/
  // const [userInput, setUserInput] = useState({
  //     enteredTitle: "",
  //     enteredDate: "",
  //     enteredAmount: "",
  // });

  // passing prevState funciton, to the setUserInput function. This is an anonymous arrow function. This passes the previous state snapshot to the function.
  // const changeAllStates = (event) => {
  //     setUserInput((prevState) => {
  //         return { ...prevState, enteredTitle: event.target.value };
  //     });
  // };
  // ---------------------------------------------------------------------------------------------
  /*
	Doing all 3 states seperately
	*/
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredDate, setDate] = useState("");
  const [enteredAmount, setAmount] = useState("");

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
    props.onSaveExpenseData(expenseData);
    setEnteredTitle("");
    setAmount("");
    setDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2023-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
