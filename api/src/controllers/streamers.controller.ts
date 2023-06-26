import { StreamersService } from '@/services'
import type { Request, Response } from 'express'
import type {
  PostStreamerRequestType,
  GetStreamerRequestType,
  VoteStreamerRequestType,
} from '@/types'
import { BadRequestError } from '@/helpers'

class ConversationController {
  async getStreamers(req: Request, res: Response) {
    const { data } = await StreamersService.getStreamers()

    return res.status(200).json({ success: true, data })
  }
  async postStreamer(req: PostStreamerRequestType, res: Response) {
    const { ...streamerData } = req.body

    const { data } = await StreamersService.postStreamers({ streamerData })

    return res.status(200).json({ success: true, data })
  }
  async getStreamer(req: GetStreamerRequestType, res: Response) {
    const { streamerId } = req.params

    if (!streamerId) {
      throw BadRequestError("{Parameter 'Streamer identifier' is missing.")
    }

    const { data } = await StreamersService.getStreamer({ streamerId })

    return res.status(200).json({ success: true, data })
  }
  async voteStreamer(req: VoteStreamerRequestType, res: Response) {
    const { streamerId, voteType } = req.params

    if (!streamerId) {
      throw BadRequestError("Parameter 'Streamer identifier' is missing.")
    }
    const isVoteTypeValid = voteType && ['up', 'down'].includes(voteType)
    if (!isVoteTypeValid) {
      throw BadRequestError(
        "Parameter 'Vote type' is missing or malformed, must be either 'up' or 'down'.",
      )
    }

    const { data } = await StreamersService.voteStreamer({
      streamerId,
      voteType,
    })

    return res.status(200).json({ success: true, data })
  }
}

export default new ConversationController()
