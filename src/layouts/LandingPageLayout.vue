<template>
  <b-container style="height:100%">
    <nav-bar :authenticated="auth.authenticated" :user="auth.user"
    />
    <router-view :user="auth.authenticated ? auth.user : null"
    />
  </b-container>
</template>
<script>
import NavBar from '../components/NavBar'

export default {
  props: ['auth'],
  components: {
    NavBar
  },
  data () {
    return {

    }
  }
}
</script>

<style scoped>
.container-fluid {
  padding: 0;
}
</style>
