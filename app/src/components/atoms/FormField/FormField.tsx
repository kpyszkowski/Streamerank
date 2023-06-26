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
import { forwardRef } from 'react'

const FormField = forwardRef<any, FormFieldProps>((props, ref) => {
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
      hidden: true,
    },
    ...options,
  ]

  return (
    <StyledContainer className={className}>
      <StyledLabel $isHidden={isLabelHidden}>{label}</StyledLabel>
      <StyledInput
        ref={ref}
        as={as}
        $isHigher={as === 'textarea'}
        $hasError={errorMessage.length > 0}
        placeholder={placeholder}
        defaultValue=""
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
})

export default FormField
