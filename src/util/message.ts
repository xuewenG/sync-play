import * as ws from 'ws'
import SocketMessage from '../models/socketMessage'

export function sendMessage<T>(
  socket: ws,
  socketMessage: SocketMessage<T>
): void {
  socket.send(JSON.stringify(socketMessage))
}
