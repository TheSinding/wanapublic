<template>
  <b-container style="height:100%">
    <nav-bar />
    <router-view />
  </b-container>
</template>
<script>
import NavBar from '../components/NavBar'

export default {
  components: {
    NavBar
  },
  data () {
    return { }
  }
}
</script>

<style scoped>
</style>
