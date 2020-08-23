import express from 'express'
import expressWs from 'express-ws'
import bindRouter from './routers'
import { serverConfig, mysqlConfig } from './config'
import { cors } from '@ixuewen/express-util'
import { initPool } from '@ixuewen/mysql-util'

const instance = expressWs(express())
const app = instance.app

cors(app, serverConfig.corsOrigin)
bindRouter(app)
initPool(mysqlConfig)

const port = serverConfig.port

app.listen(port)
console.log(`Server running at: http://127.0.0.1:${port}`)
