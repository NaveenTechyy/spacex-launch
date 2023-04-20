import React, { useState } from "react";
import "./AppCrash.css";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";

const AppCrash = ({ error, errorInfo }) => {
  const { t } = useTranslation();
  const [errorDisplay, setErrorDisplay] = useState(false);

  const handleErrorDisplay = () => {
    setErrorDisplay(!errorDisplay);
  };

  return (
    <div className="container">
      <p>{t("errorMsg")}</p>

      <button className="error-btn" onClick={handleErrorDisplay}>
        {errorDisplay ? t("hideErr") : t("seeMoreDetails")}
      </button>

      <div
        className="error-description"
        style={{
          display: errorDisplay ? "block" : "none",
        }}
      >
        <div>
          <b>{t("error")}</b>
          {error}
        </div>

        <div>
          <b>{t("errorInfo")}</b>
          {errorInfo}
        </div>
      </div>
    </div>
  );
};

AppCrash.propTypes = {
  error: PropTypes.string,
  errorInfo: PropTypes.string,
};

export default AppCrash;
