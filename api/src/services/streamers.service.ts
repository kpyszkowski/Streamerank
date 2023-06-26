import { NotFoundError, ServerError } from '@/helpers'
import { StreamerModel } from '@/models'
import type {
  PostStreamersServiceParametersType,
  GetStreamerServiceParametersType,
  VoteStreamerServiceParametersType,
} from '@/types'

class StreamersService {
  async getStreamers() {
    const streamerRecords = await StreamerModel.find()

    if (!streamerRecords) {
      throw NotFoundError('Cound not find any streamer records in database')
    }

    return { data: streamerRecords }
  }

  async postStreamers(parameters: PostStreamersServiceParametersType) {
    const { streamerData } = parameters
    const streamerRecord = await StreamerModel.create(streamerData)

    if (!streamerRecord) {
      throw ServerError('Unable to save streamer record into database')
    }

    return { data: streamerRecord }
  }

  async getStreamer(parameters: GetStreamerServiceParametersType) {
    const { streamerId } = parameters

    const streamerRecord = await StreamerModel.findById(streamerId)

    if (!streamerRecord) {
      throw NotFoundError('Could not find the streamer record in database')
    }

    return { data: streamerRecord }
  }

  async voteStreamer(parameters: VoteStreamerServiceParametersType) {
    const { streamerId, voteType } = parameters

    const voteRecordKey = voteType === 'up' ? 'upVotes' : 'downVotes'
    const streamerRecord = await StreamerModel.findByIdAndUpdate(
      streamerId,
      {
        $inc: { [voteRecordKey]: 1 },
      },
      { new: true },
    )

    if (!streamerRecord) {
      throw ServerError('Unable to update streamer record in database')
    }

    const { upVotes, downVotes } = streamerRecord

    return {
      data: {
        streamerId,
        upVotes,
        downVotes,
      },
    }
  }
}

export default new StreamersService()
