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

export type StreamerVoteType = 'up' | 'down'
