<template>
  <b-nav class="my-lg navbar-expand-lg navbar-light text-center mb-lg">
    <b-nav-text class="mx-auto text-white font-logo navbar-brand bigger-logo text-center">What a nice API</b-nav-text>
  </b-nav>
</template>

<script>
import NavBarRoutes from './NavBarRoutes'
export default {
  name: 'navbar',
  components: {
    NavBarRoutes
  }
}
</script>
<style lang="stylus">
.bigger-logo {
  text-align: center;
  font-size: 5em;
}
</style>
