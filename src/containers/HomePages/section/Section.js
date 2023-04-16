import React, { useEffect } from "react";
import "./Section.css";
import { useSelector, useDispatch } from "react-redux";
import { getAboutInfo } from "../../../store/slice/AboutSlice";

const Section = () => {
  const aboutInfo = useSelector(state => state.AboutInfo);
  const dispatch = useDispatch();
  const aboutInfoPayload = aboutInfo?.AboutInfo?.payload;

  useEffect(() => {
    dispatch(getAboutInfo("/company"));
  }, []);

  return (
    <div className="hero-container">
      <h3>SpaceX</h3>
      <h2>OVERVIEW</h2>
      <table>
        <tr>
          <th>Founded</th>
          <th>{aboutInfoPayload?.founded}</th>
        </tr>
        <tr>
          <th>CEO</th>
          <th>{aboutInfoPayload?.ceo}</th>
        </tr>
        <tr>
          <th>Employees</th>
          <th>{aboutInfoPayload?.employees}</th>
        </tr>
      </table>
    </div>
  );
};

export default Section;
