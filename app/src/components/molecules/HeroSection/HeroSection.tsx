import {
  StyledContainer,
  StyledHeading,
  StyledParagraph,
  StyledTypographyWrapper,
} from '@/components/molecules/HeroSection/HeroSection.styled'
import 'twin.macro'

function HeroSection() {
  return (
    <StyledContainer>
      <StyledTypographyWrapper>
        <StyledHeading>Where Streamers Rise and Legends Shine!</StyledHeading>
        <StyledParagraph>
          Join a vibrant community of streaming enthusiasts as you vote, rate,
          and propel your favourite streamers to the top of the rankings. From
          rising stars to established icons, Streamerank empowers you to shape
          the streaming landscape and showcase the true champions of the virtual
          realm.
        </StyledParagraph>
      </StyledTypographyWrapper>
    </StyledContainer>
  )
}

export default HeroSection
