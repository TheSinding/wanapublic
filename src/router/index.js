import Vue from 'vue'
import Router from 'vue-router'
import LandingPage from '@/pages/LandingPage'
import LandingPageLayout from '@/layouts/LandingPageLayout'
import NotFound from '@/pages/NotFound'
import UsersSuccess from '@/pages/Users/Success.vue'
import LoginForm from '@/pages/LoginForm'
import SignupForm from '@/pages/SignupForm'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: LandingPageLayout,
      children: [
        {
          path: '',
          component: LandingPage
        },
        {
          path: 'Dashboard',
          component: () => require('@/pages/Dashboard')
        },
        {
          path: 'signup',
          component: SignupForm
        },
        {
          path: 'login',
          component: LoginForm
        }
      ]
    },
    {
      path: '/users/success',
      component: UsersSuccess
    },
    {
      path: '*',
      component: NotFound
    }
  ]
})
