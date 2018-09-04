import client from '../vendors/feathers'

export default {
  state: {
    app: {
      initialized: false
    },
    auth: {
      authenticated: false,
      user: null
    }
  },
  setUser (_user) {
    this.state.auth.user = _user
  },
  setAuthenticated (authenticated) {
    this.state.auth.authenticated = authenticated
  },
  async authenticateWithEmail (email, password) {
    try {
      const token = await client.authenticate({
        strategy: 'local',
        email,
        password
      })
      this.setAuthenticated(true)
      const payload = await client.passport.verifyJWT(token.accessToken)
      const user = await client.service('users').get(payload.userId)
      this.setUser(user)
      return Promise.resolve()
    } catch (error) {
      throw error
    }
  },
  async initStore () {
    try {
      const token = await client.authenticate()
      this.setAuthenticated(true)
      const payload = await client.passport.verifyJWT(token.accessToken)
      const user = await client.service('users').get(payload.userId)
      this.setUser(user)
      return Promise.resolve()
    } catch (error) {
      this.setAuthenticated(false)
      return Promise.resolve()
    }
  }
}
