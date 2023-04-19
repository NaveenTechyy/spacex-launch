import React, { memo } from "react";
import "./Cards.css";
import "../../../assets/history.jpeg";
import "../../../assets/rockets.jpg";
import "../../../assets/launches.jpg";

import CardItem from "./CardItem";

function Cards() {
  return (
    <div className="cards">
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src={require("../../../assets/history.jpeg")}
              text="History of spaceX"
              label="History"
              path="/history"
            />
            <CardItem
              src={require("../../../assets/rockets.jpg")}
              text="Rockets owned by spaceX"
              label="Rockets"
              path="/rockets"
            />
            <CardItem
              src={require("../../../assets/launches.jpg")}
              text="Launches by spaceX"
              label="Launches"
              path="/launches"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default memo(Cards);
