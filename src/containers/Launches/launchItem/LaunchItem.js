import React from "react";
import "./LaunchItem.css";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

const LaunchItem = () => {
  const { t } = useTranslation();
  const data = useLocation();
  const item = data?.state?.item;

  return (
    <div className="bg-container">
      <div className="launchitem-div">
        <aside>
          <iframe
            frameBorder="0"
            title="Video Player"
            src={`https://www.youtube.com/embed/${item?.links?.youtube_id}`}
          />
        </aside>
        <article>
          <h1>{item?.name}</h1>
          <p>{item?.details}</p>
          <div className="link-button">
            <a href={item?.links?.wikipedia} rel="noreferrer" target="_blank">
              {t("wikipedia")}
            </a>
          </div>
        </article>
      </div>
    </div>
  );
};

export default LaunchItem;
