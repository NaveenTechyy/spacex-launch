import React from "react";
import "./HistoryItem.css";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { format } from "date-fns";

const HistoryItem = () => {
  const { t } = useTranslation();
  const data = useLocation();
  const items = data?.state?.item;
  const formattedDate = format(
    new Date(items?.event_date_utc),
    "MMMM dd, yyyy hh:mm a"
  );

  return (
    <div className="history-wrapper">
      <div className="container">
        <h2>{`Title : ${items?.title}`}</h2>
        <h3>{`Date : ${formattedDate}`}</h3>
        <p>{`Title : ${items?.details}`}</p>
        <button className="read-more-btn">
          <a href={items?.links?.article} target="blank">
            {t("readMore")}
          </a>
        </button>
      </div>
    </div>
  );
};

export default HistoryItem;
