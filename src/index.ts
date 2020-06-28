import express from 'express'
import expressWs from 'express-ws'

import Client from './client'

const wsInstance = expressWs(express())
const { app } = wsInstance

const clients: Client[] = []

app.ws('/blog/sync-play/socket/:roomId/:clientId', (ws, req) => {
  const roomId = req.params.roomId
  const clientId = req.params.clientId
  console.log(`client connected: ${roomId}, ${clientId}`)
  clients.push({
    roomId,
    clientId,
    socket: ws,
  })
  sendCurrentCount()
  ws.on('message', (msg) => {
    clients.forEach((client) => {
      const socket = client.socket
      if (client.roomId === roomId && client.clientId !== clientId) {
        socket.send(msg)
      }
    })
  })
  ws.on('close', () => {
    console.log(`client disconnected: ${roomId}, ${clientId}`)
    for (let i = 0; i < clients.length; i++) {
      if (clients[i].clientId === clientId) {
        clients.splice(i, 1)
        break
      }
    }
    sendCurrentCount()
  })

  function sendCurrentCount() {
    const clientMarked = clients.filter((client) => {
      return client.roomId === roomId
    })
    clientMarked.forEach((client) => {
      const socket = client.socket
      socket.send(
        JSON.stringify({
          event: 'count',
          count: clientMarked.length,
        })
      )
    })
  }
})

const port = 80

app.listen(port)
console.log(`Server running at: http://127.0.0.1:${port}`)
