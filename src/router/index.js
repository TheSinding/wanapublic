import Vue from 'vue'
import Router from 'vue-router'
import LandingPage from '@/pages/LandingPage'
import LandingPageLayout from '@/layouts/LandingPageLayout'
import NotFound from '@/pages/NotFound'

Vue.use(Router)
const router = new Router({
  routes: [
    {
      path: '/',
      component: LandingPageLayout,
      children: [
        {
          path: '',
          name: 'home',
          component: LandingPage
        }
      ]
    },
    {
      path: '*',
      name: '404',
      component: NotFound
    }
  ]
})

export default router
