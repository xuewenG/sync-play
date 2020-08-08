import SocketEvent from './socketEvent'

interface SocketMessage {
  event: SocketEvent
  data: string
}

export default SocketMessage
