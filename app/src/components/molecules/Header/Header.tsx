import { Button, Logo } from '@/components'
import { StyledContainer } from '@/components/molecules/Header/Header.styled'

function Header() {
  return (
    <StyledContainer>
      <Logo />
      <Button>Submit your streamer</Button>
    </StyledContainer>
  )
}

export default Header
