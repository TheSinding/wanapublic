import feathers from '@feathersjs/feathers'
import socketio from '@feathersjs/socketio-client'
import auth from '@feathersjs/authentication-client'
import io from 'socket.io-client'
const socket = io('localhost:3030', { transports: ['websocket'] })

const client = feathers()
  .configure(socketio(socket))
  .configure(
    auth({
      storage: window.localStorage,
      cookie: 'wana-jwt',
      storageKey: 'wana-jwt'
    })
  )

const authWithEmail = (email, password) => {
  return client.authenticate({
    strategy: 'local',
    email,
    password
  })
}
export { authWithEmail }
export default client
