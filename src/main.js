import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
import './assets/fonts/iconfont.css'

import axios from 'axios'
// axios.defaults.baseURL = 'http://localhost:3000'
axios.defaults.baseURL = 'https://netease-cloud-music-api-j54frlvtp-lzj16.vercel.app/'
Vue.prototype.$http = axios

// 导入Swiper
import VueAwesomeSwiper from 'vue-swiper4'
import 'swiper/dist/css/swiper.css'

Vue.use(VueAwesomeSwiper, /* { default options with global component } */)

// 导入过滤器
import filters from './filters'
Vue.use(filters);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
