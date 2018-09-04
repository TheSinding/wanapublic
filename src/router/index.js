import Vue from 'vue'
import Router from 'vue-router'
import LandingPage from '@/pages/LandingPage'
import LandingPageLayout from '@/layouts/LandingPageLayout'
import NotFound from '@/pages/NotFound'
import UsersSuccess from '@/pages/Users/Success.vue'
import LoginForm from '@/pages/LoginForm'
import SignupForm from '@/pages/SignupForm'
import Dashboard from '@/pages/Dashboard'
import auth from './auth'

Vue.use(Router)
const router = new Router({
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
          path: 'signup',
          component: SignupForm
        },
        {
          path: 'login',
          component: LoginForm
        },
        {
          path: 'dashboard',
          component: Dashboard,
          meta: {
            requiresAuth: true
          }
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

router.beforeEach(auth)

export default router
