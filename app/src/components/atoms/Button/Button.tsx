import {
  StyledContainer,
  StyledHiddenLabel,
} from '@/components/atoms/Button/Button.styled'
import type { ButtonProps } from '@/components/atoms/Button/Button.types'

function Button(props: ButtonProps) {
  const { children, variant, hiddenLabel = '', ...restProps } = props
  return (
    <StyledContainer
      $variant={variant}
      {...restProps}
    >
      {hiddenLabel && <StyledHiddenLabel>{hiddenLabel}</StyledHiddenLabel>}
      {children}
    </StyledContainer>
  )
}

export default Button
