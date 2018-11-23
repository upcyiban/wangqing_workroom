import Vue from 'vue'
import Router from 'vue-router'
import Answer from '@/components/answer'
import Homepage from '@/components/homepage'
import Auth from'@/components/yibanauth'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Auth',
      component: Auth
    },
    {
      path:'/answer',
      name:'Answer',
      component: Answer
    },
    {
      path:'/homepage',
      name:'HomePage',
      component:Homepage
    }
  ]
})
