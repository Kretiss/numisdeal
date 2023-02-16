import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

export const defaultNS = 'sections'
export const resources = {
  // cs, sk
} as const

i18next.use(LanguageDetector).use(initReactI18next)

// Initialize translations, resources will be loaded from api probably
if (!i18next.isInitialized) {
  i18next.init({
    ns: ['sections'],
    fallbackLng: 'cs',
    // lng: userLanguage,
    load: 'languageOnly',
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: false,
    },
    defaultNS,
    resources,
    debug: true,
  })
}

export default i18next
