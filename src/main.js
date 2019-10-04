// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '@/assets/css/reset.css'
import MyHttpServer from '@/plugins/http.js'
// 回顾axios
// import axios from 'axios'
// Vue.prototype.$http = axios

// 使用Vue插件
Vue.use(ElementUI)
Vue.use(MyHttpServer)

Vue.config.productionTip = false
// 上线阶段=生产阶段 vue框架是否输出调试信息

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  // render: (h) => h(App)
  components: { App },
  template: '<App/>'
})
