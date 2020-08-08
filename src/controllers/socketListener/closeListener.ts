import { clients } from '../../context'
import * as ClientUtil from '../../util/client'
import Client from '../../models/client'

function closeHandler(client: Client): void {
  const roomId = client.roomId
  const userId = client.userId
  console.log(`client disconnected: ${roomId}, ${userId}`)
  for (let i = 0; i < clients.length; i++) {
    if (clients[i].userId === userId) {
      clients.splice(i, 1)
      break
    }
  }
  ClientUtil.sendCurrentCount(roomId)
}

export default closeHandler
