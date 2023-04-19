import React, { useEffect } from "react";
import "./Section.css";
import { useSelector, useDispatch } from "react-redux";
import { getAboutInfo } from "../../../store/slice/AboutSlice";
import { useTranslation } from "react-i18next";

const Section = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const aboutInfo = useSelector(state => state.aboutInfo);
  const aboutInfoPayload = aboutInfo?.AboutInfo?.payload;

  useEffect(() => {
    dispatch(getAboutInfo("/company"));
  }, [dispatch]);

  return (
    <div className="hero-container">
      <h3>{t("spaceX")}</h3>
      <h2>{t("overview")}</h2>
      <table>
        <tr>
          <th>{t("Founded")}</th>
          <th>{aboutInfoPayload?.founded}</th>
        </tr>
        <tr>
          <th>{t("ceo")}</th>
          <th>{aboutInfoPayload?.ceo}</th>
        </tr>
        <tr>
          <th>{t("Employees")}</th>
          <th>{aboutInfoPayload?.employees}</th>
        </tr>
      </table>
    </div>
  );
};

export default Section;
