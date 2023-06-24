export type StreamerTileBadgeIconType =
  | 'twitch'
  | 'youtube'
  | 'tiktok'
  | 'kick'
  | 'rumble'

export type StreamerTileSizeType = 'large' | 'small'

export interface StreamerTileProps {
  streamerId: string
  fullName: string
  nickName: string
  avatarSrc: string
  streamingUrl: string
  facebookUrl?: string
  instagramUrl?: string
  badgeIcon?: StreamerTileBadgeIconType
  upVotesCount?: number
  downVotesCount?: number
}
