import SocketEvent from '../../models/socketEvent'
import syncHandler from '../eventHandler/syncHandler'
import pingHandler from '../eventHandler/pingHandler'
import Client from '../../models/client'

function messageHandler(client: Client, msg: string): void {
  // 解析 SocketMessage
  const msgObj = JSON.parse(msg)
  const socketMessage = {
    event: msgObj.event,
    data: msgObj.data
  }
  // 分发 SocketEvent
  switch (socketMessage.event as SocketEvent) {
    case SocketEvent.SYNC:
    case SocketEvent.PLAY:
    case SocketEvent.PAUSE:
    case SocketEvent.SYNC_FROM:
      syncHandler(client, socketMessage)
      break
    case SocketEvent.PING:
      pingHandler(client, socketMessage)
  }
}

export default messageHandler
