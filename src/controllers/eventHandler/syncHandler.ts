import { clients } from '../../context'
import SocketMessage from '../../models/socketMessage'
import Client from '../../models/client'
import SyncData from '../../bean/syncData'
import { sendMessage } from '../../util/message'

function syncHandler(
  client: Client,
  socketMessage: SocketMessage<SyncData>
): void {
  const roomId = client.roomId
  const userId = client.userId
  // 返回数据
  clients.forEach(client => {
    const socket = client.socket
    if (client.roomId === roomId && client.userId !== userId) {
      sendMessage(socket, socketMessage)
    }
  })
}

export default syncHandler
