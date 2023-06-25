import { Button, Logo } from '@/components'
import { StyledContainer } from '@/components/molecules/Header/Header.styled'
import type { HeaderProps } from '@/components/molecules/Header/Header.types'

function Header(props: HeaderProps) {
  const { isSubmitButtonHidden = false } = props
  return (
    <StyledContainer>
      <Logo />
      {!isSubmitButtonHidden && <Button>Submit your streamer</Button>}
    </StyledContainer>
  )
}

export default Header
