import { clients } from '../context'
import Client from '../models/client'
import SocketEvent from '../models/socketEvent'
import { sendMessage } from './message'
import CountData from '../bean/countData'
import SocketMessage from '../models/socketMessage'

export function getClientsByRoomId(roomId: number): Client[] {
  return clients.filter(client => {
    return client.roomId === roomId
  })
}

export function sendCurrentCount(roomId: number): void {
  const clientMarked = getClientsByRoomId(roomId)
  clientMarked.forEach(client => {
    const socket = client.socket
    const result: SocketMessage<CountData> = {
      event: SocketEvent.COUNT,
      data: {
        count: clientMarked.length
      }
    }
    sendMessage(socket, result)
  })
}
