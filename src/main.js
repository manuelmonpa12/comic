import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import VueSuperagent from 'vue-superagent'
import i18n from './i18n'

Vue.config.productionTip = false
Vue.use(VueSuperagent)

new Vue({
  router,
  store,
  vuetify,
  VueSuperagent,
  i18n,
  render: h => h(App)
}).$mount('#app')
