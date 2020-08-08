import express from 'express'
import videoRouter from './videoRouter'
import wsRouter from './wsRouter'
import { serverConfig } from '../config'

function urlWithContextPath(url: string): string {
  return serverConfig.contextPath + url
}

function bindWithContextPath(
  app: express.Application,
  url: string,
  router: express.Router
): void {
  app.use(urlWithContextPath(url), router)
}

export default function (app: express.Application): void {
  bindWithContextPath(app, '/video', videoRouter)
  bindWithContextPath(app, '/ws', wsRouter)
}
