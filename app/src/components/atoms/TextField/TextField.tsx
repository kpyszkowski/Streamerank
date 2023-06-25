import type { TextFieldProps } from './TextField.types'
import {
  StyledContainer,
  StyledLabel,
  StyledInput,
  StyledErrorMessageWrapper,
  StyledErrorMessage,
} from './TextField.styled'
import { HiOutlineExclamationCircle } from 'react-icons/hi2'
import 'twin.macro'

function TextField(props: TextFieldProps) {
  const {
    label,
    className,
    errorMessage = '',
    isLabelHidden = false,
    as = 'input',
    ...restProps
  } = props
  return (
    <StyledContainer className={className}>
      <StyledLabel $isHidden={isLabelHidden}>{label}</StyledLabel>
      <StyledInput
        as={as}
        $isHigher={as === 'textarea'}
        $hasError={errorMessage.length > 0}
        {...restProps}
      />
      {errorMessage.length > 0 && (
        <StyledErrorMessageWrapper>
          <HiOutlineExclamationCircle tw="stroke-current stroke-2" />
          <StyledErrorMessage>{errorMessage}</StyledErrorMessage>
        </StyledErrorMessageWrapper>
      )}
    </StyledContainer>
  )
}

export default TextField
