import express from 'express'
import expressWs from 'express-ws'
import * as wsController from '../controllers/wsController'

expressWs(express())

// prefix: /ws
const router = express.Router()

router.ws('/:roomId/:userId', wsController.wsConnection)

export default router
