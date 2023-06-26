import type { StreamerType, StreamerVoteType } from 'types'

export type PostStreamersServiceParametersType = {
  streamerData: StreamerType
}

export type GetStreamerServiceParametersType = {
  streamerId: string
}

export type VoteStreamerServiceParametersType = {
  streamerId: string
  voteType: StreamerVoteType
}
