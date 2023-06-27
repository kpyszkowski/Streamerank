import { Button, Logo, StreamerForm } from '@/components'
import { StyledContainer } from '@/components/molecules/Header/Header.styled'
import type { HeaderProps } from '@/components/molecules/Header/Header.types'
import { useState } from 'react'

function Header(props: HeaderProps) {
  const { isSubmitButtonHidden = false } = props
  const [isFormModalVisible, setFormModalVisible] = useState(false)

  return (
    <>
      <StyledContainer>
        <Logo />
        {!isSubmitButtonHidden && (
          <Button onClick={() => setFormModalVisible(true)}>
            Submit your streamer
          </Button>
        )}
      </StyledContainer>
      {isFormModalVisible && (
        <StreamerForm modalStateSetter={setFormModalVisible}>
          Submit your favourite streamers and let other know about them.
          <br />
          Watch them going up the ranking ang gaining popularity!
        </StreamerForm>
      )}
    </>
  )
}

export default Header
