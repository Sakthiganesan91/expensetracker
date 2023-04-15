import React from "react";
import { useState } from "react";
import "../styles/Filter.css";
function Filter(props) {
  const [searchYear, setSearchYear] = useState("2022");

  const searchYearHandler = (event) => {
    setSearchYear(event.target.value);
  };

  props.search(searchYear);

  return (
    <div className="overallContainer">
      <form>
        <div className="filter_container">
          <div className="label">
            <label>Show By Year</label>
          </div>

          <div className="option">
            <select onChange={searchYearHandler}>
              <option value="2022">2022</option>
              <option value="2021">2021</option>
              <option value="2020">2020</option>
              <option value="2019">2019</option>
            </select>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Filter;
