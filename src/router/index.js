import Vue from 'vue'
import Router from 'vue-router'
import Answer from '@/components/answer'
import Homepage from '@/components/homepage'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Homepage',
      component: Homepage
    },
    {
      path:'/answer',
      name:'Answer',
      component: Answer
    }
  ]
})
