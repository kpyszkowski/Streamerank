import { StreamersController } from '@/controllers'
import { handleErrors } from '@/helpers'
import { validate } from '@/middlewares'
import { Router } from 'express'
import type { Router as RouterType } from 'express'
import { streamerSchema } from 'schemas'

const streamersRouter: RouterType = Router()

streamersRouter.get(
  '/streamers',
  handleErrors(StreamersController.getStreamers),
)
streamersRouter.post(
  '/streamers',
  validate(streamerSchema),
  handleErrors(StreamersController.postStreamer),
)
streamersRouter.get(
  '/streamer/:streamerId',
  handleErrors(StreamersController.getStreamer),
)
streamersRouter.put(
  '/streamers/:streamerId/vote/:voteType',
  handleErrors(StreamersController.voteStreamer),
)

export default streamersRouter
