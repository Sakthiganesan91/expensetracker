import "./App.css";
import React, { useState } from "react";
import "./components/ExpenseItem";
import ExpenseItem from "./components/ExpenseItem";
import ExpenseForm from "./components/ExpenseForm";
import Filter from "./components/Filter";
import AddExpense from "./components/AddExpense";
const expenses = [];

function App() {
  const [exp, setExp] = useState(expenses);

  const [searchYear, setSearchYear] = useState("2022");
  const getExp = (expense) => {
    setExp((prevExp) => {
      return [expense, ...prevExp];
    });
  };

  const searchYearFun = (year) => {
    setSearchYear(year);
  };

  const [show, setShow] = useState(true);

  const showHandler = () => {
    setShow(!show);
    console.log(show);
  };

  return (
    <div className="App">
      <h1 style={{ color: "red" }}>Expense Tracker</h1>
      {show && <AddExpense show={showHandler} />}
      {!show && <ExpenseForm exp={getExp} show={showHandler} />}
      <Filter search={searchYearFun} />
      <ExpenseItem expense={exp} search={searchYear} />
    </div>
  );
}

export default App;
