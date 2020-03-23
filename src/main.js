import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import 'bootstrap/dist/css/bootstrap.min.css'
import axios from "axios";
axios.defaults.baseURL = 'http://localhost:3000/'
Vue.prototype.$http = axios;


// 导入路由
import router from './router/index'

new Vue({
  render: h => h(App),
  // 挂载路由
  router
}).$mount('#app')
