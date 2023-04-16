import React from "react";
import "./RocketItem.css";
import { useLocation } from "react-router-dom";

const RocketItem = () => {
  const data = useLocation();
  console.log("data", data);
  const item = data?.state?.item;

  return (
    <div className="total">
      <div className="rocket-wrap">
        <div className="rocketitem-card">
          <img src={item?.flickr_images[1]} alt="rocket" />
        </div>
        <div className="rocket-description">
          <h3>{`Name : ${item?.name}`}</h3>
          <h4>{`Weight : ${item?.mass?.kg}`}</h4>
          <h4>{`Height : ${item?.height?.meters}`}</h4>
          <h4>{`Country : ${item?.country}`}</h4>
          <p>{`Description : ${item?.description}`}</p>{" "}
          <div className="button-div">
            <button className="wiki-link">
              <a href={item?.wikipedia} rel="noreferrer" target="_blank">
                Wikipedia
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RocketItem;
