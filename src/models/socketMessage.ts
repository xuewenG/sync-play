import SocketEvent from './socketEvent'

interface SocketMessage<T> {
  event: SocketEvent
  data: T
}

export default SocketMessage
