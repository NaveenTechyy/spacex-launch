import React, { useState } from "react";
import "./AppCrash.css";
import PropTypes from "prop-types";

const AppCrash = ({ error, errorInfo, t }) => {
  const [errorDisplay, setErrorDisplay] = useState(false);

  const handleErrorDisplay = () => {
    setErrorDisplay(!errorDisplay);
  };

  return (
    <div className="container">
      <p>Hmm.... There occured an error. Please contact your administrator</p>

      <button className="error-btn" onClick={handleErrorDisplay}>
        {errorDisplay ? "Hide error" : "See more details"}
      </button>

      <div
        className="error-info-btn"
        style={{
          display: errorDisplay ? "block" : "none",
        }}
      >
        <div>
          <b>Error: </b>
          {error}
        </div>

        <div>
          <b>ErrorInfo: </b>
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
