import * as ws from 'ws'

interface Client {
  roomId: number
  userId: number
  socket: ws
}

export default Client
