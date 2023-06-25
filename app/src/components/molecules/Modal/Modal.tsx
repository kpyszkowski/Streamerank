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

export const ModalContext = createContext<ModalContextType>({})

function Modal(props: ModalProps) {
  const { children, setVisible, hideCloseButton = false } = props

  const handleClose = useCallback(() => setVisible(false), [setVisible])

  return createPortal(
    <ModalContext.Provider value={{ handleClose, hideCloseButton }}>
      <StyledModalContainer>
        <StyledModalContentWrapper>{children}</StyledModalContentWrapper>
        <StyledModalBackdrop onClick={handleClose} />
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
