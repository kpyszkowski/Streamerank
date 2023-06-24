import type { AvatarSizeType } from '@/components/molecules/Avatar/Avatar.types'
import tw, { styled } from 'twin.macro'

export const StyledContainer = styled.picture<{ $size: AvatarSizeType }>(
  ({ $size }) => [
    tw`block relative p-1`,
    $size === 'small' && tw`w-28 h-28`,
    $size === 'large' && tw`w-48 h-48`,
  ],
)

export const StyledImage = tw.img`rounded-full ring-4 ring-white w-full h-full object-cover`

export const StyledBadge = tw.svg`w-2/5 h-2/5 fill-accent absolute bottom-0 left-0`
