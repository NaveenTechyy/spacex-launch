import React, { useEffect, useState, memo } from "react";
import "./Rockets.css";
import { useSelector, useDispatch } from "react-redux";
import { getRocketsDataAsync } from "../../store/slice/RocketsSlice";
import { useNavigate } from "react-router-dom";

import FilterItem from "../../components/FilterItem/FilterItem";

const Rockets = () => {
  const rocketsData = useSelector(state => state?.rockets);
  const [filteredRockets, setFilteredRockets] = useState([]);
  const [filterText, setFilterText] = useState("All");
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const navigation = item => {
    navigate(`/rockets/${item.name}`, { state: { item } });
  };

  useEffect(() => {
    dispatch(getRocketsDataAsync("/rockets"));
  }, []);

  const filterValueSelected = filteredValue => {
    let filteredRocketList = rocketsData?.rocketsData.filter(item => {
      if (item.name.includes(filteredValue)) {
        return item;
      }
    });
    setFilteredRockets(filteredRocketList);
    setFilterText(filteredValue);
  };

  const DisplayList = ({ item }) => {
    return (
      <div className="rocket-wrapper" key={item?.id}>
        <div className="rocket-card" onClick={() => navigation(item)}>
          <div className="rocket-image">
            <img src={item?.flickr_images[0]} alt="rocket" />
          </div>
          <div className="rocket-details">
            <h3>{`Name : ${item?.name}`}</h3>
            <h4>{`Height : ${item?.height?.feet} ft`}</h4>
            <h4>{`Country : ${item?.country}`}</h4>
          </div>
        </div>
      </div>
    );
  };
  return (
    <>
      <div className="rocket-container">
        <div className="filter-div">
          <FilterItem filterValueSelected={filterValueSelected} />
        </div>
        <div className="rockets-divi">
          {filterText === "All" &&
            rocketsData?.rocketsData?.map(item => {
              return <DisplayList item={item} />;
            })}
          {filterText !== "All" &&
            filteredRockets?.map(item => {
              return <DisplayList item={item} />;
            })}
        </div>
      </div>
    </>
  );
};

export default memo(Rockets);
