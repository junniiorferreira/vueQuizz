// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import VueResource from 'vue-resource'
import { store } from './store/store'
import Delay from 'vue-delay'
 
Vue.use(Delay)

Vue.use(Vuetify)

Vue.use(VueResource)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  Delay,
  components: { App },
  template: '<App/>',
  store:store,
  render: h => h(App)
})