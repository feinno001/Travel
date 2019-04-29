// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper'
// 初始化页面样式
import './assets/styles/reset.css'
// 解决移动端1px问题
import 'styles/border.css'
import 'styles/iconfont.css'
//使用轮播图插件
import 'swiper/dist/css/swiper.css'
//解决部分机型点击300ms延迟
import fastClick from 'fastclick'
Vue.use(VueAwesomeSwiper)
Vue.config.productionTip = false
fastClick.attach(document.body);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})
/* 路由就是根据网址的不同,返回不同的内容给用户 */
