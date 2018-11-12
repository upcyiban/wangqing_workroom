import Vue from 'vue'
import Router from 'vue-router'
import Question from '@/components/Question'
import QuestionList from '@/components/QuestionList'

Vue.use(Router)

export default new Router({
  routes: [
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
