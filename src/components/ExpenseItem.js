import React from "react";
import "./DateContainer";
import "../styles/ExpenseItem.css";
import DateContainer from "./DateContainer";

function ExpenseItem(props) {
  const search = props.search;

  const expenses = props.expense;
  const filteredExpense = expenses.filter((expense) => {
    const date = new Date(expense.date);
    return date.getFullYear().toString() === search;
  });
  if (filteredExpense.length === 0) {
    return (
      <div className="messageContainer">
        <p className="message">No Expenses</p>
      </div>
    );
  } else {
    return filteredExpense.map((expense) => (
      <div className="expenseContainer" key={expense.id}>
        <div className="date_titleContainer">
          <DateContainer date={expense.date} />
          <h1>{expense.holder} :</h1> <h1>{expense.title.toString()}</h1>
        </div>
        <h2>${expense.cost}</h2>
      </div>
    ));
  }
}

export default ExpenseItem;
