
import Vue from 'vue'
import router from './configs/router.js'
import store from './configs/store.js'

// 引入ajax库
import axios from 'axios'
// 引入jQuery库
import $ from 'jquery'
Vue.prototype.$axios = axios
Vue.prototype.$ = $
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h('router-view'),
}).$mount('#app')
