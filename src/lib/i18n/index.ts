import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          appName: 'Event Manager',
          darkMode: 'Dark Mode',
          lightMode: 'Light Mode',
          common: {
            cancel: 'Cancel',
            saveChanges: 'Save Changes'
          },
          settings: {
            title: 'Settings',
            profile: 'Profile Settings',
            notifications: 'Notifications',
            language: 'Language',
            security: 'Security & Privacy'
          }
        },
      },
    },
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;