import * as ws from 'ws'

interface Client {
  roomId: string
  clientId: string
  socket: ws
}

export default Client
