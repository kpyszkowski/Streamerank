export type AvatarBadgeIconType =
  | 'twitch'
  | 'youtube'
  | 'tiktok'
  | 'kick'
  | 'rumble'

export type AvatarSizeType = 'large' | 'small'

export type AvatarBadgeIconsType = {
  [key in AvatarBadgeIconType]: JSX.Element
}

export interface AvatarProps {
  src: string
  badgeIcon?: AvatarBadgeIconType
  size?: AvatarSizeType
}
