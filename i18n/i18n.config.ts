import en from './locales/en.js'
import zh from './locales/zh.js'

export default defineI18nConfig(() => ({
  legacy: false,
  fallbackLocale: 'en',
  messages: {
    en,
    zh
  }
}))
