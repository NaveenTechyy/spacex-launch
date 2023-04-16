import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./NavList.css";

const NavList = () => {
  const [className, setClassName] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo" title="SpaceX logo">
        <NavLink to="/" className="logo">
          SpaceX
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
            Home
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
            History
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
            Launches
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
            Rockets
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
