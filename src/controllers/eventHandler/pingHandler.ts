import SocketMessage from '../../models/socketMessage'
import Client from '../../models/client'
import SocketEvent from '../../models/socketEvent'
import PingData from '../../bean/pingData'
import { sendMessage } from '../../util/message'

function pingHandler(
  client: Client,
  socketMessage: SocketMessage<PingData>
): void {
  const time = socketMessage.data.time
  client.currentTime = time
  client.lastHandsake = new Date().getTime()
  // 返回数据
  const socket = client.socket
  const result: SocketMessage<null> = {
    event: SocketEvent.PONG,
    data: null
  }
  sendMessage(socket, result)
}

export default pingHandler
