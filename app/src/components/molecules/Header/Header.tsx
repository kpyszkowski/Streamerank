import { Button, Logo, Modal, StreamerForm } from '@/components'
import { StyledContainer } from '@/components/molecules/Header/Header.styled'
import type { HeaderProps } from '@/components/molecules/Header/Header.types'
import { useState } from 'react'

function Header(props: HeaderProps) {
  const { isSubmitButtonHidden = false } = props
  const [isFormVisible, setFormVisible] = useState(false)

  const handleSubmit = (closeModal: VoidFunction) => {
    closeModal()
  }

  return (
    <>
      <StyledContainer>
        <Logo />
        {!isSubmitButtonHidden && (
          <Button onClick={() => setFormVisible(true)}>
            Submit your streamer
          </Button>
        )}
      </StyledContainer>
      {isFormVisible && (
        <Modal setVisible={setFormVisible}>
          <Modal.Header>Submit your streamer</Modal.Header>
          <Modal.Content>
            <StreamerForm>
              Submit your favourite streamers and let other know about them.
              <br />
              Watch them going up the ranking ang gaining popularity!
            </StreamerForm>
          </Modal.Content>
          <Modal.Footer
            renderChildren={({ handleClose }) => (
              <Button onClick={() => handleSubmit(handleClose)}>Submit</Button>
            )}
          />
        </Modal>
      )}
    </>
  )
}

export default Header
