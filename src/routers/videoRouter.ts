import express from 'express'
import * as videoController from '../controllers/videoController'

// prefix: /video
const router = express.Router()

router.get('/:videoCode', videoController.getVideoById)

export default router
