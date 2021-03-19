import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import Antd from 'ant-design-vue/es'
import 'ant-design-vue/dist/antd.css'

Vue.use(Antd)
Vue.config.productionTip = false
// axios.defaults.baseURL="/"
Vue.prototype.$http = axios

new Vue({
  render: h => h(App),
  router
}).$mount("#app");
