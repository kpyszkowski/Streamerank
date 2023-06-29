import { Button, Logo, StreamerForm } from '@/components'
import { StyledContainer } from '@/components/molecules/Header/Header.styled'
import type { HeaderProps } from '@/components/molecules/Header/Header.types'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { removeTranslateProperties } from '@/helpers'
import tw from 'twin.macro'

const MotionButton = motion(Button)

const buttonVariants = {
  hidden: { opacity: 0, x: 40, ...tw`transition-none` },
  visible: { opacity: 1, x: 0, ...tw`transition` },
}

function Header(props: HeaderProps) {
  const { isSubmitButtonHidden = false } = props
  const [isFormModalVisible, setFormModalVisible] = useState(false)

  return (
    <>
      <StyledContainer>
        <Logo />
        {!isSubmitButtonHidden && (
          <MotionButton
            variants={buttonVariants}
            initial="hidden"
            animate="visible"
            transformTemplate={removeTranslateProperties}
            onClick={() => setFormModalVisible(true)}
          >
            Submit your streamer
          </MotionButton>
        )}
      </StyledContainer>
      <AnimatePresence>
        {isFormModalVisible && (
          <StreamerForm modalStateSetter={setFormModalVisible}>
            Submit your favourite streamers and let other know about them.
            <br />
            Watch them going up the ranking ang gaining popularity!
          </StreamerForm>
        )}
      </AnimatePresence>
    </>
  )
}

export default Header
