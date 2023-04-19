import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import translationsEN from "./en/translation.json"; //english

i18n.use(initReactI18next).init({
  lng: "en",
  fallback: "en",
  resources: {
    en: {
      translation: translationsEN,
    },
    interpolation: {
      escapeValue: false,
    },
  },
});

export default i18n;
