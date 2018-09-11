import feathers from '@feathersjs/feathers'
import socketio from '@feathersjs/socketio-client'
import auth from '@feathersjs/authentication-client'
import io from 'socket.io-client'

const socket = io(process.env.API_URL, { transports: ['websocket'] })

const client = feathers()
  .configure(socketio(socket))
  .configure(
    auth({
      storage: window.localStorage,
      cookie: 'wana-jwt',
      storageKey: 'wana-jwt'
    })
  )
const keyService = client.service('apikeys')
const usersService = client.service('apikeys')
const service = client.service

const authWithEmail = (email, password) => {
  return client.authenticate({
    strategy: 'local',
    email,
    password
  })
}

export { authWithEmail, keyService, usersService, service }
export default client
