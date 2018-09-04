<template>
  <div class="app fullheight">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: #957bbe;
}
body {
  background: #957bbe;
}
.fullheight {
  height: 100vh;
}
</style>
