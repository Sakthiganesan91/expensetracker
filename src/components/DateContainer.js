import React from "react";
import "../styles/DateContainer.css";
function DateContainer(props) {
  const date = new Date(props.date);
  return (
    <React.Fragment>
      <div className="dateContainer">
        <div className="container">
          <h2>{date.toLocaleString("en-US", { day: "2-digit" })}</h2>
          <p>{date.toLocaleString("en-US", { month: "long" })}</p>
        </div>
        <div>
          <h3>{date.getFullYear()}</h3>
        </div>
      </div>
    </React.Fragment>
  );
}

export default DateContainer;
