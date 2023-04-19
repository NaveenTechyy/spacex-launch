import React from "react";
import { useTranslation } from "react-i18next";

const PageNotFound = () => {
  const { t } = useTranslation();
  return (
    <>
      <div>{t("pageNotFound")}</div>
    </>
  );
};

export default PageNotFound;
