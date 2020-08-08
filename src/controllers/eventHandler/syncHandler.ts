import { clients } from '../../context'
import SocketMessage from '../../models/socketMessage'

function syncHandler(
  roomId: number,
  userId: number,
  socketMessage: SocketMessage
): void {
  clients.forEach(client => {
    const socket = client.socket
    if (client.roomId === roomId && client.userId !== userId) {
      socket.send(JSON.stringify(socketMessage))
    }
  })
}

export default syncHandler
