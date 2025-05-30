import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translation from './translation';

i18n.use(initReactI18next).init({
  resources: translation,
  lng: 'en', // Default language
  fallbackLng: 'en',
  interpolation: { escapeValue: false },
});

export default i18n;