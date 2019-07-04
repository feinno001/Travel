import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/HomePage'
import City from '@/pages/city/City'
import Detail from '@/pages/detail/Detail'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'Home',
    component: Home
  }, {
    path: '/city',
    name: 'City',
    component: City
  }, {
    path: '/detail/:id',
    name: 'Detail',
    component: Detail
  }],
  /**
   *如果通过浏览器自带的前进后退按钮切换的路由，那么会自动使用浏览默认的回滚上次页面的浏览位置。
   *如果是通过vue路由进行的页面切换。例如a前往b，首先判断a是不是通过keep-alive缓存的组件，如果是，
   *则在a路由的meta中添加一个savedPosition字段，并且值为a的滚动位置。最后return的是页面需要回滚的位置。
   *如此一来，如果打开一个页面，该页面的组件路由中meta.savedPosition为undefined的话，则页面滚动到（0,0）的位置，
   *如果打开一个页面，它的路由的meta.savedPosition有值的话，则滚动到上次浏览的位置，
   *因为meta.savedPosition保存的就是上次浏览的位置。
   */
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      if (from.meta.keepAlive) {
        from.meta.savedPosition = document.body.scrollTop;
      }
      return {
        x: 0,
        y: to.meta.savedPosition || 0
      }
    }
  }
})
