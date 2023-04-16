import React from "react";
import "./HistoryItem.css";
import { useLocation } from "react-router-dom";

const HistoryItem = () => {
  const data = useLocation();

  const items = data?.state?.item;
  return (
    <div className="history-wrapper">
      <div className="container">
        <h2>{`Title : ${items?.title}`}</h2>
        <h3>{`Date : ${items?.event_date_utc}`}</h3>

        <p>{`Title : ${items?.details}`}</p>
        <button>
          <a href={items?.links?.article} target="blank">
            Read More
          </a>
        </button>
      </div>
    </div>
  );
};

export default HistoryItem;
