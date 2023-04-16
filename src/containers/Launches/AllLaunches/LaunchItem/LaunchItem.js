import React from "react";
import { useLocation } from "react-router-dom";
import "./LaunchItem.css";
const LaunchItem = () => {
  const data = useLocation();
  const links = data?.state?.item?.links;
  return (
    <div className="bg-container">
      <div className="launchitem-div">
        <aside>
          <iframe
            frameBorder="0"
            title="Video Player"
            src={`https://www.youtube.com/embed/${links?.youtube_id}`}
          />
        </aside>
        <article>
          <h1>{data?.state?.item?.name}</h1>
          <p>{data?.state?.item?.details}</p>
          <div className="link-button">
            <a href={links?.wikipedia} rel="noreferrer" target="_blank">
              Wikipedia
            </a>
          </div>
        </article>
      </div>
    </div>
  );
};

export default LaunchItem;
