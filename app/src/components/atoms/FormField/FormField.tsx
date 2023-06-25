import type { FormFieldProps } from './FormField.types'
import {
  StyledContainer,
  StyledLabel,
  StyledInput,
  StyledErrorMessageWrapper,
  StyledErrorMessage,
} from './FormField.styled'
import { HiOutlineExclamationCircle } from 'react-icons/hi2'
import 'twin.macro'

function FormField(props: FormFieldProps) {
  const {
    label,
    className,
    errorMessage = '',
    isLabelHidden = false,
    as = 'input',
    options = [],
    placeholder,
    ...restProps
  } = props

  const optionsWithPlaceholder = [
    {
      label: placeholder ?? 'Choose option...',
      value: '',
      disabled: true,
      selected: true,
      hidden: true,
    },
    ...options,
  ]

  return (
    <StyledContainer className={className}>
      <StyledLabel $isHidden={isLabelHidden}>{label}</StyledLabel>
      <StyledInput
        as={as}
        $isHigher={as === 'textarea'}
        $hasError={errorMessage.length > 0}
        placeholder={placeholder}
        {...restProps}
      >
        {as === 'select' && options.length > 0
          ? optionsWithPlaceholder.map(({ label, ...restOption }, index) => (
              <option
                key={index}
                {...restOption}
              >
                {label}
              </option>
            ))
          : null}
      </StyledInput>
      {errorMessage.length > 0 && (
        <StyledErrorMessageWrapper>
          <HiOutlineExclamationCircle tw="stroke-current stroke-2" />
          <StyledErrorMessage>{errorMessage}</StyledErrorMessage>
        </StyledErrorMessageWrapper>
      )}
    </StyledContainer>
  )
}

export default FormField
