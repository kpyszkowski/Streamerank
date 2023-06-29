import { Button, Logo } from '@/components'
import {
  StyledContainer,
  StyledHeading,
  StyledText,
  TypographyWrapper,
} from '@/components/molecules/ErrorMessage/ErrorMessage.styled'
import type { ErrorMessageProps } from '@/components/molecules/ErrorMessage/ErrorMessage.types'
import { motion } from 'framer-motion'

const MotionTypographyWrapper = motion(TypographyWrapper)

const typographyVariants = {
  hidden: { y: -75, opacity: 0 },
  visible: { y: 0, opacity: 1 },
}

function ErrorMessage(props: ErrorMessageProps) {
  const {
    isColoured = false,
    isButtonVisible = false,
    isLogoVisible = false,
    children,
    ...restProps
  } = props

  return (
    <StyledContainer
      $isColoured={isColoured}
      {...restProps}
    >
      {isLogoVisible && <Logo />}
      <MotionTypographyWrapper
        variants={typographyVariants}
        initial="hidden"
        animate="visible"
        layout
      >
        {children}
      </MotionTypographyWrapper>
      {isButtonVisible && <Button href="/">Go back to dashboard</Button>}
    </StyledContainer>
  )
}

const ErrorMessageNamespace = Object.assign(ErrorMessage, {
  Heading: StyledHeading,
  Text: StyledText,
})

export default ErrorMessageNamespace
