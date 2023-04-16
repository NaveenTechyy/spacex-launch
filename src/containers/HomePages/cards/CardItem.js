import React from "react";
import { NavLink } from "react-router-dom";

function CardItem(props) {
  const { src, text, label, path } = props;
  return (
    <>
      <li className="cards__item">
        <NavLink className="cards__item__link" to={path}>
          <figure className="cards__item__pic-wrap" data-category={label}>
            <input
              type="image"
              className="cards-item-img"
              img
              src={src}
              alt="Travel Image"
            />
          </figure>
          <div className="cards__item__info">
            <h5 className="cards__item__text">{text}</h5>
          </div>
        </NavLink>
      </li>
    </>
  );
}

export default CardItem;
