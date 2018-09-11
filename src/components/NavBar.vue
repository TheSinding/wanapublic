<template>
  <b-nav class="my-lg navbar-expand-lg navbar-light">
    <b-nav-text class="text-white font-logo navbar-brand">What a nice API</b-nav-text>
    <!-- <NavBarRoutes :style="'her'" :routes="persistantRoutes"
        />
        <NavBarRoutes :style="'her'" :routes="authenticated ? loggedInRoutes : loggedOutRoutes"
        /> -->
  </b-nav>
</template>

<script>
import NavBarRoutes from './NavBarRoutes'
export default {
  name: 'navbar',
  props: {
    authenticated: {
      type: Boolean,
      required: true
    },
    user: {
      type: Object,
      default: null
    }
  },
  components: {
    NavBarRoutes
  },
  data () {
    return {
      persistantRoutes: [
        {
          name: 'home',
          title: 'Home'
        },
        {
          name: 'documentation',
          title: 'Documentation'
        }
      ],
      loggedInRoutes: [
        {
          name: 'dashboard',
          title: 'Dashboard'
        },
        {
          name: 'logout',
          title: 'Log out'
        }
      ],
      loggedOutRoutes: [
        {
          name: 'login',
          title: 'Login'
        }
      ]
    }
  }
}
</script>
