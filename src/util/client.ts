import { clients } from '../context'
import Client from '../models/client'
import SocketEvent from '../models/socketEvent'

export function getClientsByRoomId(roomId: number): Client[] {
  return clients.filter(client => {
    return client.roomId === roomId
  })
}

export function sendCurrentCount(roomId: number): void {
  const clientMarked = getClientsByRoomId(roomId)
  clientMarked.forEach(client => {
    const socket = client.socket
    socket.send(
      JSON.stringify({
        event: SocketEvent.COUNT,
        data: {
          count: clientMarked.length
        }
      })
    )
  })
}
