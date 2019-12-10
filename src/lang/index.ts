import Vue from 'vue'
import VueI18n from 'vue-i18n'
import Cookies from 'js-cookie'
import vuetifyEnLocale from 'vuetify/src/locale/en' // element-ui lang
import vuetifyZhHantLocale from 'vuetify/src/locale/zh-Hant' // element-ui lang
import enLocale from './en'
import zhHantLocale from './zh'

Vue.use(VueI18n)

const messages = {
  en: {
    ...enLocale,
    ...vuetifyEnLocale
  },
  zh: {
    ...zhHantLocale,
    ...vuetifyZhHantLocale
  }
}
export function getLanguage() {
  const chooseLanguage = Cookies.get('language')
  if (chooseLanguage) return chooseLanguage

  // if has not choose language
  // const language = (
  //   navigator.language || navigator.browserLanguage
  // ).toLowerCase()
  // const locales = Object.keys(messages)
  // for (const locale of locales) {
  //   if (language.indexOf(locale) > -1) {
  //     return locale
  //   }
  // }
  return 'zh'
}
const i18n = new VueI18n({
  // set locale
  // options: en | zh | es
  locale: getLanguage(),
  // set locale messages
  messages
})

export default i18n
