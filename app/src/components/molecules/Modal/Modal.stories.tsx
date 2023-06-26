import { Button, Modal } from '@/components'
import type { Meta } from '@storybook/react'
import { useState } from 'react'

const meta: Meta<typeof Modal> = {
  component: Modal,
  parameters: {
    layout: 'fullscreen',
  },
}

const Template = (props: any) => {
  const [isVisible, setIsVisible] = useState(false)
  return (
    <>
      <button onClick={() => setIsVisible(true)}>Open modal</button>
      {isVisible && (
        <Modal
          setVisible={setIsVisible}
          {...props}
        >
          <Modal.Header>Example modal here</Modal.Header>
          <Modal.Content>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque
            maiores delectus consequuntur eaque commodi id molestiae omnis harum
            eum autem! Veniam eos fugit, eum vitae ipsa laudantium sapiente sit
            animi.
          </Modal.Content>
          <Modal.Footer>
            {({ handleClose }) => (
              <Button
                variant="secondary"
                onClick={() => {
                  alert("I'm about to close 😢")
                  handleClose()
                }}
              >
                Close modal
              </Button>
            )}
          </Modal.Footer>
        </Modal>
      )}
    </>
  )
}

export default meta

export const Default = Template.bind({})
