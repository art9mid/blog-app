import { initReactI18next } from 'react-i18next';
import dayjs from 'dayjs';
import { getLocales } from 'expo-localization';
import i18n from 'i18next';

import { QUERY_KEY } from '../store/keys';
import { clientStorage } from '../store/services';
import translationEn from './locales/en/translation.json';
import translationUk from './locales/uk/translation.json';

export type LanguageType = 'en' | 'uk';

const resources = {
  en: translationEn,
  uk: translationUk,
};

const initI18n = async () => {
  let savedLanguage = clientStorage.getItem(QUERY_KEY.storage.appLanguage);

  dayjs.locale(savedLanguage || 'en');

  if (!savedLanguage) {
    savedLanguage = getLocales()[0].languageCode;
  }

  i18n.use(initReactI18next).init({
    resources,
    lng: savedLanguage || 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });
};

initI18n();

export default i18n;
