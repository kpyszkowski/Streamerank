import {
  BaseContainer,
  Button,
  Layout,
  Modal,
  ProfileSummary,
} from '@/components'
import { useState } from 'react'
import { HiArrowLeft } from 'react-icons/hi'
import { useLocation, useNavigate } from 'react-router-dom'
import 'twin.macro'

function StreamersPage() {
  const navigate = useNavigate()
  const location = useLocation()
  console.log(location)
  const [isVisible, setIsVisible] = useState(false)
  return (
    <Layout>
      <BaseContainer>
        <button
          tw="flex items-center gap-6 font-medium text-2xl py-4 mb-16"
          onClick={() => navigate(-1)}
        >
          <HiArrowLeft />
          Go back to dashboard
        </button>
        <ProfileSummary
          fullName={'Average Streamer'}
          nickName={'xXxStreamLordxXx'}
          avatarSrc={
            'https://static-cdn.jtvnw.net/jtv_user_pictures/asmongold-profile_image-f7ddcbd0332f5d28-300x300.png'
          }
          streamingUrl={'#'}
          facebookUrl={'#'}
          instagramUrl={'#'}
        />
      </BaseContainer>
      <button onClick={() => setIsVisible(true)}>Open modal</button>
      {isVisible && (
        <Modal setVisible={setIsVisible}>
          <Modal.Header>Example modal here</Modal.Header>
          <Modal.Content>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque
            maiores delectus consequuntur eaque commodi id molestiae omnis harum
            eum autem! Veniam eos fugit, eum vitae ipsa laudantium sapiente sit
            animi.
          </Modal.Content>
          <Modal.Footer
            renderChildren={({ handleClose }) => (
              <Button
                variant="secondary"
                onClick={() => {
                  alert('🥁 Submitting...')
                  handleClose()
                }}
              >
                Submit
              </Button>
            )}
          />
        </Modal>
      )}
    </Layout>
  )
}

export default StreamersPage
