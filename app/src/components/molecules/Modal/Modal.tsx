import {
  ModalContent,
  ModalFooter,
  ModalHeader,
} from '@/components/molecules/Modal/Modal.children'
import {
  StyledModalBackdrop,
  StyledModalContainer,
  StyledModalContentWrapper,
} from '@/components/molecules/Modal/Modal.styled'
import type {
  ModalContextType,
  ModalProps,
} from '@/components/molecules/Modal/Modal.types'
import { createContext, useCallback } from 'react'
import { createPortal } from 'react-dom'
import 'twin.macro'
import { motion } from 'framer-motion'
import type { Variants, Transition } from 'framer-motion'

const MotionStyledModalContentWrapper = motion(StyledModalContentWrapper)
const MotionStyledModalBackdrop = motion(StyledModalBackdrop)

const backdropVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
}

const modalTransition: Transition = {
  type: 'tween',
  ease: 'easeInOut',
  duration: 0.25,
}

const modalVariants: Variants = {
  hidden: {
    x: '100%',
  },
  visible: {
    x: 0,
  },
}

export const ModalContext = createContext<ModalContextType>({})

function Modal(props: ModalProps) {
  const {
    children,
    setVisible,
    hideCloseButton = false,
    onClose,
    ...restProps
  } = props

  const handleClose = useCallback(() => {
    setVisible(false)
    onClose && onClose()
  }, [setVisible, onClose])

  return createPortal(
    <ModalContext.Provider value={{ handleClose, hideCloseButton }}>
      <StyledModalContainer {...restProps}>
        <MotionStyledModalContentWrapper
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={modalVariants}
          transition={modalTransition}
          layout
        >
          {children}
        </MotionStyledModalContentWrapper>
        <MotionStyledModalBackdrop
          onClick={handleClose}
          variants={backdropVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
        />
      </StyledModalContainer>
    </ModalContext.Provider>,
    document.getElementById('portal')!,
  )
}

const ModalNamespace = Object.assign(Modal, {
  Header: ModalHeader,
  Footer: ModalFooter,
  Content: ModalContent,
})

export default ModalNamespace
