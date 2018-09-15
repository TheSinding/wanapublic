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
const service = client.service

export { service }
export default client
