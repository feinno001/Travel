import Vue from 'vue'
import Router from 'vue-router'
import List from '@/pages/list/List'
import Home from '@/pages/home/HomePage'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/list',
      name: 'List',
      component: List
    }
  ]
})
