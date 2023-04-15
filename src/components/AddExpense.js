import React from "react";
import "../styles/AddExpense.css";
function AddExpense(props) {
  return (
    <div className="ae">
      <div className="addExpense">
        <button onClick={props.show} className="addExpensebtn">
          Add Expense
        </button>
      </div>
    </div>
  );
}

export default AddExpense;
