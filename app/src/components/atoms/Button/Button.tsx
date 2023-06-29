import {
  StyledContainer,
  StyledHiddenLabel,
} from '@/components/atoms/Button/Button.styled'
import type { ButtonProps } from '@/components/atoms/Button/Button.types'
import { forwardRef } from 'react'

const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const {
    children,
    variant = 'primary',
    href,
    hiddenLabel = '',
    ...restProps
  } = props
  return (
    <StyledContainer
      $variant={variant}
      as={href ? 'a' : 'button'}
      href={href}
      ref={ref}
      {...restProps}
    >
      {hiddenLabel && <StyledHiddenLabel>{hiddenLabel}</StyledHiddenLabel>}
      {children}
    </StyledContainer>
  )
})

export default Button
