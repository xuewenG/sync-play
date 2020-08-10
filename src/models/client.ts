import * as ws from 'ws'

interface Client {
  roomId: number
  userId: number
  currentTime: number
  lastHandsake: number
  socket: ws
}

export default Client
