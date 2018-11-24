import Vue from 'vue'
import Router from 'vue-router'
import Question from '@/components/Question'
import QuestionList from '@/components/QuestionList'
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
    },
    {
      path: '/question',
      name: 'Question',
      component: Question
    },
    {
      path: '/questionlist',
      name: 'QuestionList',
      component: QuestionList
    }
  ]
})
