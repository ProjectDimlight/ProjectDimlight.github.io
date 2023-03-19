import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/Index'
import TODOList from '@/pages/TODOList'
import Memo from '@/pages/Memo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/todo/',
      name: 'TODO',
      component: TODOList
    },
    {
      path: '/memo/',
      name: 'Memo',
      component: Memo
    }
  ]
})
