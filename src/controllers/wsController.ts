// eslint-disable-next-line @typescript-eslint/no-unused-vars
import * as ws from 'ws'
import express from 'express'
import { clients } from '../context'
import closeListener from './socketListener/closeListener'
import * as ClientUtil from '../util/client'
import messageListener from './socketListener/messageListener'

export function wsConnection(ws: ws, req: express.Request): void {
  // 解析参数
  const roomId = parseInt(req.params.roomId)
  const userId = parseInt(req.params.userId)
  console.log(`client connected: ${roomId}, ${userId}`)
  // 保存客户端信息
  const client = {
    roomId,
    userId,
    socket: ws
  }
  clients.push(client)
  // 广播当前人数
  ClientUtil.sendCurrentCount(roomId)
  // 监听事件
  ws.on('message', msg => {
    messageListener(client, msg as string)
  })
  ws.on('close', () => {
    closeListener(client)
  })
}
