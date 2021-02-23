import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'

i18next.use(initReactI18next).init({
  fallbackLng: 'en',
  resources: {
    'pt-BR': {
      translations: require('./locales/pt-br/translations.json'),
    },
    en: {
      translations: require('./locales/en/translations.json'),
    },
    es: {
      translations: require('./locales/es/translations.json'),
    },
  },
  ns: ['translations'],
  defaultNS: 'translations',
  returnObjects: true,
  debug: process.env.NODE_ENV === 'development',
  interpolation: {
    escapeValue: false,
  },
  react: {
    wait: true,
  },
})

i18next.languages = ['pt-BR', 'en', 'es']

export default i18next
