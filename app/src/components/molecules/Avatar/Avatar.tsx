import {
  StyledBadge,
  StyledContainer,
  StyledImage,
} from '@/components/molecules/Avatar/Avatar.styled'
import type {
  AvatarProps,
  AvatarBadgeIconsType,
} from '@/components/molecules/Avatar/Avatar.types'

import { FaTwitch } from 'react-icons/fa'
import { FaYoutube } from 'react-icons/fa'
import { FaTiktok } from 'react-icons/fa'
import { FaPlay } from 'react-icons/fa'
import { RiKickFill } from 'react-icons/ri'

const badgeIcons: AvatarBadgeIconsType = {
  twitch: FaTwitch,
  youtube: FaYoutube,
  tiktok: FaTiktok,
  kick: RiKickFill,
  rumble: FaPlay,
}

function Avatar(props: AvatarProps) {
  const { src, badgeIcon, size = 'small', ...restProps } = props

  return (
    <StyledContainer
      $size={size}
      {...restProps}
    >
      <StyledImage src={src} />
      {badgeIcon && <StyledBadge as={badgeIcons[badgeIcon]} />}
    </StyledContainer>
  )
}

export default Avatar
