<script>
export default {
  functional: true,
  props: {
    routes: {
      type: Array,
      required: true
    }
  },
  render (h, { props, $style = {} }) {
    const getRouterTitle = route => typeof route.title === 'function' ? route.title() : route.title
    return props.routes.map(route => (
      <b-nav-item key={route.name}
        to={route}
        class="text-white">
        {getRouterTitle(route)}
      </b-nav-item>
    ))
  }
}
</script>
<style lang="stylus">
a {
  color: white;
}
</style>
