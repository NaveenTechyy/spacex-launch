import React, { useState } from "react";

import PropTypes from "prop-types";

// import { ErrorDiv, ErrorDescription } from "../HeroImage/HeroImage.styles";

// import { t } from 'i18next';

const AppCrash = ({ error, errorInfo, t }) => {
  const [errorDisplay, setErrorDisplay] = useState(false);

  return (
    <>
      {/* <ErrorDiv> */}
      <div style={{ fontFamily: "sans-serif" }}>Error</div>

      <button
        style={{
          cursor: "pointer",
          margin: "15px",
          fontFamily: "sans-serif",
        }}
        onClick={() => {
          setErrorDisplay(!errorDisplay);
        }}
      >
        {errorDisplay ? "Hide error" : "See more details"}
      </button>

      {/* <ErrorDescription
          style={{
            display: errorDisplay ? "block" : "none",

            fontFamily: "sans-serif",
          }}
        > */}
      <div>
        <b>Error: </b>

        {error}
      </div>

      <div>
        <b>ErrorInfo: </b>

        {errorInfo}
      </div>
      {/* </ErrorDescription>
      </ErrorDiv> */}
    </>
  );
};

AppCrash.propTypes = {
  error: PropTypes.string,

  t: PropTypes.func,

  errorInfo: PropTypes.string,
};

export default AppCrash;
