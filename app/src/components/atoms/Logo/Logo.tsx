import {
  StyledContainer,
  StyledSignWrapper,
  StyledTypography,
} from '@/components/atoms/Logo/Logo.styled'
import { motion } from 'framer-motion'
import 'twin.macro'

import { GiLaurelsTrophy } from 'react-icons/gi'

const MotionStyledContainer = motion(StyledContainer)
const MotionStyledTypography = motion(StyledTypography)
const MotionStyledSignWrapper = motion(StyledSignWrapper)

const signVariants = {
  hidden: { x: 20, rotate: 48, opacity: 0 },
  visible: {
    x: 0,
    rotate: -12,
    opacity: 1,
    transition: { type: 'spring', bounce: 0.75 },
  },
}

const typographyVariants = {
  hidden: { x: -40, opacity: 0 },
  visible: { x: 0, opacity: 1 },
}

function Logo() {
  return (
    <MotionStyledContainer>
      <MotionStyledSignWrapper
        variants={signVariants}
        initial="hidden"
        animate="visible"
      >
        <GiLaurelsTrophy
          size={32}
          tw="fill-accent"
        />
      </MotionStyledSignWrapper>
      <MotionStyledTypography
        variants={typographyVariants}
        initial="hidden"
        animate="visible"
      >
        Streamerank
      </MotionStyledTypography>
    </MotionStyledContainer>
  )
}

export default Logo
