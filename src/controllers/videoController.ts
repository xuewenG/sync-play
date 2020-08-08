import express from 'express'
import * as VideoUtil from '../util/video'

export function getVideoById(
  request: express.Request,
  response: express.Response
): void {
  const videoCode = request.params.videoCode
  VideoUtil.getByVideoCode(videoCode)
    .then(video => {
      return response.json({
        code: 2000,
        data: video
      })
    })
    .catch(() => {
      return response.json({ code: 4000 })
    })
}
