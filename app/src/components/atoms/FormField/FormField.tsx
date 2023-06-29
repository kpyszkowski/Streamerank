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
import { AnimatePresence, motion } from 'framer-motion'
import type { Variants } from 'framer-motion'

const MotionStyledErrorMessageWrapper = motion(StyledErrorMessageWrapper)

const errorMessageVariants: Variants = {
  hidden: { opacity: 0, height: 0 },
  visible: { opacity: 1, height: 'auto' },
}

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
      <AnimatePresence mode="wait">
        {errorMessage.length > 0 && (
          <MotionStyledErrorMessageWrapper
            variants={errorMessageVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <HiOutlineExclamationCircle tw="stroke-current stroke-2" />
            <StyledErrorMessage>{errorMessage}</StyledErrorMessage>
          </MotionStyledErrorMessageWrapper>
        )}
      </AnimatePresence>
    </StyledContainer>
  )
})

export default FormField
