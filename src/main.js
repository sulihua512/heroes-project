import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import 'bootstrap/dist/css/bootstrap.min.css'

// 导入路由
import router from './router/index'

new Vue({
  render: h => h(App),
  // 挂载路由
  router
}).$mount('#app')
