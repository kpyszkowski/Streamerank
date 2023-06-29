import {
  StyledContainer,
  StyledHeading,
  StyledParagraph,
  StyledTypographyWrapper,
} from '@/components/molecules/HeroSection/HeroSection.styled'
import 'twin.macro'
import { motion } from 'framer-motion'
import type { Variants } from 'framer-motion'

const MotionStyledHeading = motion(StyledHeading)
const MotionStyledParagraph = motion(StyledParagraph)
const MotionStyledTypographyWrapper = motion(StyledTypographyWrapper)

const wrapperVariants: Variants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.25,
    },
  },
}
const typographyVariants: Variants = {
  initial: { opacity: 0, y: -65 },
  animate: {
    opacity: 1,
    y: 0,
  },
}

function HeroSection() {
  return (
    <StyledContainer>
      <MotionStyledTypographyWrapper
        variants={wrapperVariants}
        initial="initial"
        animate="animate"
      >
        <MotionStyledHeading variants={typographyVariants}>
          Where Streamers Rise and Legends Shine!
        </MotionStyledHeading>
        <MotionStyledParagraph variants={typographyVariants}>
          Join a vibrant community of streaming enthusiasts as you vote, rate,
          and propel your favourite streamers to the top of the rankings. From
          rising stars to established icons, Streamerank empowers you to shape
          the streaming landscape and showcase the true champions of the virtual
          realm.
        </MotionStyledParagraph>
      </MotionStyledTypographyWrapper>
    </StyledContainer>
  )
}

export default HeroSection
