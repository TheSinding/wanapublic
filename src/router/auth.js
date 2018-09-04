import store from '../store/'

export default (to, from, next) => {
  const { auth } = store.state
  const { user, authenticated } = auth

  if (to.meta.requiresAuth && !authenticated) return next('/login')

  if (to.meta.requiresAdmin && !to.meta.rank.includes(user.rank)) {
    return next('/404')
  }

  next()
}
