import type { ButtonVariantType } from '@/components/atoms/Button/Button.types'
import tw, { styled } from 'twin.macro'

export const StyledContainer = styled.button<{ $variant: ButtonVariantType }>(
  ({ $variant }) => [
    tw`border-2 border-current`,
    $variant === 'primary' && tw`font-medium text-accent rounded-xl px-12 py-4`,
    $variant === 'secondary' && tw`border-current rounded-lg px-9 py-2`,
    $variant === 'tertiary' && tw`text-2xl`,
  ],
)

export const StyledHiddenLabel = tw.span`sr-only`
