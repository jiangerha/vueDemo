// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueMaterial from 'vue-material'
import axios from 'axios'
import 'vue-material/dist/vue-material.min.css'
import './assets/css/reset.css'

import headerBar from './components/headerBar.vue'
import scroll from './components/scroll.vue'
import listHeader from './components/listHeader'

Vue.use(VueMaterial)
Vue.component('headerBar', headerBar)
Vue.component('scroll', scroll)
Vue.component('listHeader', listHeader)
Vue.config.productionTip = false
Vue.prototype.$ajax= axios

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
