import type { ButtonVariantType } from '@/components/atoms/Button/Button.types'
import tw, { styled } from 'twin.macro'

export const StyledContainer = styled.button<{ $variant: ButtonVariantType }>(
  ({ $variant }) => [
    ($variant === 'primary' || $variant === 'secondary') &&
      tw`
    flex items-center justify-center text-black bg-accent drop-shadow-lg transition hover:bg-accent-lighter
    `,
    $variant === 'primary' &&
      tw`gap-4 font-medium rounded-t-xl rounded-b-lg shadow-[0_0.5rem_0_0] shadow-accent-darker px-12 py-4 mb-2 active:(shadow-[0_0_0_0] translate-y-2)`,
    $variant === 'secondary' &&
      tw`gap-3 rounded-t-xl rounded-b-lg shadow-[0_0.25rem_0_0] shadow-accent-darker px-9 py-2 mb-1 active:(shadow-[0_0_0_0] translate-y-1)`,
    $variant === 'tertiary' &&
      tw`flex items-center gap-2 text-sm font-medium leading-none border-2 border-current px-4 py-2 rounded-lg text-current`,
  ],
)

export const StyledHiddenLabel = tw.span`sr-only`
