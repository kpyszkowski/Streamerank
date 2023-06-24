import {
  StyledContainer,
  StyledHiddenLabel,
} from '@/components/atoms/Button/Button.styled'
import type { ButtonProps } from '@/components/atoms/Button/Button.types'

function Button(props: ButtonProps) {
  const {
    children,
    variant = 'primary',
    href = '',
    hiddenLabel = '',
    ...restProps
  } = props
  return (
    <StyledContainer
      $variant={variant}
      {...restProps}
      as={href ? 'a' : 'button'}
      href={href && href}
    >
      {hiddenLabel && <StyledHiddenLabel>{hiddenLabel}</StyledHiddenLabel>}
      {children}
    </StyledContainer>
  )
}

export default Button
