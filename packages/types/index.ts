export type StreamingPlatformType =
  | 'twitch'
  | 'youtube'
  | 'tiktok'
  | 'kick'
  | 'rumble'

export type StreamerType = {
  fullName: string
  nickName: string
  platform?: StreamingPlatformType
  streamingUrl: string
  facebookUrl?: string
  instagramUrl?: string
  description: string
}

export type StreamerRecordType = StreamerType & {
  _id: string
  upVotes: number
  downVotes: number
}

export type StreamerVoteType = 'up' | 'down'
