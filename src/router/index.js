import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import index from '@/components/index'
import more from '@/components/more'
import next from '@/components/next'
import create from '@/components/create'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path:'/index',
      name:'index',
      component: index
    },
    {
      path:'/more',
      name:'more',
      component:more
    },
    {
      path:'/next',
      name:'next',
      component:next

    },
    {
      path:'/create',
      name:'create',
      component:create
    }
  ]
})
