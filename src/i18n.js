import Vue from 'vue'
import VueI18n from 'vue-i18n'

import en from 'vuetify/lib/locale/en'
import es from 'vuetify/lib/locale/es'

Vue.use(VueI18n)


const messages = {
    en: {
      ...require('./locales/en.json'),
      $vuetify: en,
    },
    es: {
      ...require('./locales/es.json'),
      $vuetify: es
    }
  }
  
// Validación para saber que idioma mostrar
let currentLang = localStorage.getItem('usr-lang'),
browserLang = navigator.language.substr(0, 2).toLowerCase()
if (!currentLang) localStorage.setItem('usr-lang', browserLang != 'en' ? 'es' : 'en')

export default new VueI18n({
locale: currentLang,
fallbackLocale: currentLang,
messages,
})