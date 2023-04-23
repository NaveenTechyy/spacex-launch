import React from "react";
import "./Footer.css";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  const aboutInfo = useSelector(state => state.aboutInfo);
  const links = aboutInfo?.AboutInfo?.payload?.links;

  return (
    <div className="footer-container">
      <div className="addr-container">
        <p>{t("spacex2022")}</p>
      </div>
      <div className="links-container">
        <a href={links?.twitter} rel="noreferrer" target="_blank">
          {t("twitter")}
        </a>
        <a href={links?.website} rel="noreferrer" target="_blank">
          {t("website")}
        </a>
        <a href={links?.flickr} rel="noreferrer" target="_blank">
          {t("flickr")}
        </a>
      </div>
      <div className="copyright">@Copyright Naveen</div>
    </div>
  );
};

export default Footer;
