import React from "react";
import "./FilterItem.css";

const FilterItem = ({ filterValueSelected }) => {
  const filterList = (e) => {
    filterValueSelected(e.target.value);
  };
  return (
    <div className="filter-area">
      <select name="filterByName" onChange={filterList}>
        <option value="All">All</option>
        <option value="Falcon">Falcon</option>
        <option value="Starship">Starship</option>
      </select>
    </div>
  );
};

export default FilterItem;
