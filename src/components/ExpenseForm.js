import React, { useState } from "react";

import "../styles/ExpenseForm.css";

function ExpenseForm(props) {
  const [expense, setExpense] = useState({
    holder: "",
    title: "",
    cost: "",
    date: "",
  });

  const holderHandler = (event) => {
    setExpense({
      ...expense,
      holder: event.target.value,
    });
  };
  const titleHandler = (event) => {
    setExpense({
      ...expense,
      title: event.target.value,
    });
  };
  const costHandler = (event) => {
    setExpense({
      ...expense,
      cost: event.target.valueAsNumber,
    });
  };
  const dateHandler = (event) => {
    setExpense({
      ...expense,
      date: event.target.value,
    });
  };
  const submitHandler = (event) => {
    event.preventDefault();

    const newExpense = {
      id: Math.random() * 2,
      holder: expense.holder,
      title: expense.title,
      cost: expense.cost,
      date: expense.date,
    };
    props.exp(newExpense);
    props.show();
    setExpense({
      holder: "",
      title: "",
      cost: "",
      date: "",
    });
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <div className="container">
          <div className="inputContainer">
            <div>
              <label>Expense Holder Name</label>
            </div>
            <div>
              <input
                type="text"
                onChange={holderHandler}
                value={expense.holder}
              />
            </div>
            <div>
              <label>Expense Name</label>
            </div>
            <div>
              <input
                type="text"
                onChange={titleHandler}
                value={expense.title}
              />
            </div>

            <div>
              <label>Expense Cost</label>
            </div>
            <div>
              <input
                type="number"
                onChange={costHandler}
                value={expense.cost}
              />
            </div>

            <div>
              <label>Date</label>
            </div>
            <div>
              <input type="date" onChange={dateHandler} value={expense.date} />
            </div>
            <button type="submit">Submit</button>
            <div>
              <button type="button" onClick={props.show}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ExpenseForm;
