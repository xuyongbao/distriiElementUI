import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'

import hBaseView from '../src/index';

console.log(hBaseView)


Vue.use(hBaseView);

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
