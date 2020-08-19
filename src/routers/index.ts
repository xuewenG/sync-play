import express from 'express'
import videoRouter from './videoRouter'
import wsRouter from './wsRouter'
import { serverConfig } from '../config'
import { setContextPath, bindWithContextPath } from '@ixuewen/express-util'

setContextPath(serverConfig.contextPath)

export default function (app: express.Application): void {
  bindWithContextPath(app, '/video', videoRouter)
  bindWithContextPath(app, '/ws', wsRouter)
}
