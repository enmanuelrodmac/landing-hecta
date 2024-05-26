import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Importa tus archivos de traducción
import translationEN from "./locales/en/translation.json";
import translationES from "./locales/es/translation.json";

const resources = {
  en: {
    translation: translationEN,
  },
  es: {
    translation: translationES,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en", // idioma predeterminado
  fallbackLng: "en", // idioma de reserva si falta una traducción
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
