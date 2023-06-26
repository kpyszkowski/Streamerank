import type { StreamerType, StreamerVoteType } from 'types'
import type { Request } from 'express'

export type PostStreamerRequestType = Request<unknown, unknown, StreamerType>
export type GetStreamerRequestType = Request<{ streamerId?: string }>
export type VoteStreamerRequestType = Request<{
  streamerId?: string
  voteType?: StreamerVoteType
}>
