import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/Index'
// import TODOList from '@/pages/TODOList'
import Academic from '@/pages/Academic'
import Treeverse from '@/pages/Treeverse'
import Memo from '@/pages/Memo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    /*
    {
      path: '/todo/',
      name: 'TODO',
      component: TODOList
    },
    */
    {
      path: '/academic/',
      name: 'academic',
      component: Academic
    },
    {
      path: '/treeverse/',
      name: 'treeverse',
      component: Treeverse
    },
    {
      path: '/memo/',
      name: 'Memo',
      component: Memo
    }
  ]
})
