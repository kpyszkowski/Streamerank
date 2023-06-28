import type { MessageVariantType } from '@/components/atoms/Message/Message.types'
import tw, { styled } from 'twin.macro'

export const StyledContainer = styled.span<{ $variant: MessageVariantType }>(
  ({ $variant }) => [
    tw`
      inline-flex gap-2 items-center text-sm font-medium text-white/75 rounded px-4 py-0.5
    `,
    $variant === 'error' && tw` bg-red-700/75`,
    $variant === 'info' && tw` bg-secondary/75`,
  ],
)
