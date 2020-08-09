import { clients } from '../../context'
import SocketMessage from '../../models/socketMessage'
import Client from '../../models/client'

function syncHandler(client: Client, socketMessage: SocketMessage): void {
  const roomId = client.roomId
  const userId = client.userId
  clients.forEach(client => {
    const socket = client.socket
    if (client.roomId === roomId && client.userId !== userId) {
      socket.send(JSON.stringify(socketMessage))
    }
  })
}

export default syncHandler
