// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import BaiduMap from 'vue-baidu-map'
// 视频
import Video from 'video.js'
import 'video.js/dist/video-js.css'
Vue.prototype.$video = Video
Vue.use(BootstrapVue)
Vue.use(ElementUI)
Vue.config.productionTip = false
Vue.use(BaiduMap, {
  // ak 是在百度地图开发者平台申请的密钥 详见 http://lbsyun.baidu.com/apiconsole/key */
  ak: '29tFd5qsCdwbM69lYROiA57T7SB2k3A6'
})
/* eslint-disable no-new */
router.beforeEach((to, from, next) => {    
    // chrome
    document.body.scrollTop = 0
    // firefox
    document.documentElement.scrollTop = 0
    // safari
    window.pageYOffset = 0
    next()
})
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
	
})
