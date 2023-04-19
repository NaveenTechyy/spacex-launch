import React, { useState } from "react";
import "./NavList.css";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

const NavList = () => {
  const { t } = useTranslation();
  const [className, setClassName] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo" title="SpaceX logo">
        <NavLink to="/" className="logo">
          {t("spaceX")}
        </NavLink>
      </div>
      <ul className={className ? "navlinks active" : "navlinks"}>
        <li className="links">
          <NavLink
            onClick={() => {
              setClassName(!className);
            }}
            to="/"
            className="nav-links"
          >
            {t("home")}
          </NavLink>
        </li>
        <li className="links">
          <NavLink
            onClick={() => {
              setClassName(!className);
            }}
            to="/history"
            className="nav-links"
          >
            {t("history")}
          </NavLink>
        </li>
        <li className="links">
          <NavLink
            onClick={() => {
              setClassName(!className);
            }}
            to="/launches"
            className="nav-links"
          >
            {t("launches")}
          </NavLink>
        </li>
        <li className="links">
          <NavLink
            onClick={() => {
              setClassName(!className);
            }}
            to="/rockets"
            className="nav-links"
          >
            {t("rockets")}
          </NavLink>
        </li>
      </ul>
      <div
        onClick={() => {
          setClassName(!className);
        }}
        className="hamburger-toggle"
      >
        <i className="bx bx-menu"></i>
      </div>
    </nav>
  );
};

export default NavList;
