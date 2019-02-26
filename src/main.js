import Vue from 'vue'
import App from './App'
import router from './router'
import {store} from './store/store'
import VModal from 'vue-js-modal'

Vue.use(VModal)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
