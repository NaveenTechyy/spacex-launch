import React, { useState } from "react";
import "./FilterItem.css";

const FilterItem = ({ filterValueSelected }) => {
  const [checked, setChecked] = useState("All");

  const handleChange = e => {
    setChecked(e.target.value);
    filterValueSelected(e.target.value);
  };

  return (
    <div className="filter-area">
      <div className="filter-by-name1">
        <label>
          <input
            type="checkbox"
            style={{ cursor: "pointer" }}
            value="All"
            checked={checked === "All"}
            onChange={handleChange}
          />
          All
        </label>
      </div>
      <div className="filter-by-name2">
        <label>
          <input
            type="checkbox"
            style={{ cursor: "pointer" }}
            value="Falcon"
            checked={checked === "Falcon"}
            onChange={handleChange}
          />
          Falcon
        </label>
      </div>
      <div className="filter-by-name3">
        <label>
          <input
            type="checkbox"
            style={{ cursor: "pointer" }}
            value="Starship"
            checked={checked === "Starship"}
            onChange={handleChange}
          />
          Starship
        </label>
      </div>
    </div>
  );
};

export default FilterItem;
