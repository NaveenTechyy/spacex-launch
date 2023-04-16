import React from "react";
import { useNavigate } from "react-router-dom";
import "./Carousel.css";

const Carousel = ({ dataList }) => {
  const slideLeft = () => {
    const ele = document.getElementById("container");
    ele.scrollLeft = ele.scrollLeft - 1500;
  };
  const slideRight = () => {
    const ele = document.getElementById("container");
    ele.scrollLeft = ele.scrollLeft + 1500;
  };
  const navigate = useNavigate();
  const navigation = item => {
    navigate(`/launches/${item.name}`, { state: { item } });
  };

  return (
    <div className="launch-wrapper">
      <div className="buttons prev" onClick={slideLeft}>
        &#8249;
      </div>
      <div className="center-grid">
        <div className="launch-container" id="container">
          {dataList?.map((item, i) => {
            return (
              <div key={i} className="content-wrap">
                <div
                  key={i}
                  className="img-card"
                  onClick={() => navigation(item)}
                >
                  <div className="logo-card">
                    <img src={item?.links?.patch?.small} alt="pic" />
                  </div>
                  <h4>{`Name : ${item?.name}`}</h4>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="buttons next" onClick={slideRight}>
        &#8250;
      </div>
    </div>
  );
};

export default Carousel;
