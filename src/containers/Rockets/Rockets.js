import React, { useEffect, useState, memo } from "react";
import "./Rockets.css";
import { useSelector, useDispatch } from "react-redux";
import { getRocketsDataAsync } from "../../store/slice/RocketsSlice";
import { useNavigate } from "react-router-dom";

import FilterItem from "../../components/filterItem/FilterItem";
import DisplayRocketList from "./DisplayRocketList";

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
  }, [dispatch]);

  const filterValueSelected = filteredValue => {
    let filteredRocketList = rocketsData?.rocketsData.filter(item => {
      if (item.name.includes(filteredValue)) {
        return item;
      }
    });
    setFilteredRockets(filteredRocketList);
    setFilterText(filteredValue);
  };

  return (
    <>
      <div className="rocket-container">
        <div className="filter-div">
          <FilterItem filterValueSelected={filterValueSelected} />
        </div>
        <div className="rockets-division">
          {filterText === "All" &&
            rocketsData?.rocketsData?.map(item => {
              return <DisplayRocketList item={item} navigation={navigation} />;
            })}
          {filterText !== "All" &&
            filteredRockets?.map(item => {
              return (
                <DisplayRocketList
                  style={{ marginBottom: "50px" }}
                  item={item}
                  navigation={navigation}
                />
              );
            })}
        </div>
      </div>
    </>
  );
};

export default memo(Rockets);
