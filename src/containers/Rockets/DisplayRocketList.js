import React from "react";

const DisplayList = ({ item, navigation, style }) => {
  return (
    <div
      className="rocket-wrapper"
      key={item?.id}
      style={{ marginBottom: style?.marginBottom }}
    >
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

export default DisplayList;
