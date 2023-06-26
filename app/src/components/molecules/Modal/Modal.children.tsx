import { ModalContext } from '@/components/molecules/Modal/Modal'
import {
  StyledFooterContainer,
  StyledHeaderContainer,
  StyledHeaderWrapper,
  StyledModalContentContainer,
} from '@/components/molecules/Modal/Modal.styled'
import type { ModalFooterProps } from '@/components/molecules/Modal/Modal.types'
import { useContext, type PropsWithChildren } from 'react'
import { HiX } from 'react-icons/hi'

export function ModalHeader(props: PropsWithChildren) {
  const { children, ...restProps } = props
  const { handleClose, hideCloseButton } = useContext(ModalContext)

  return (
    <StyledHeaderContainer {...restProps}>
      <StyledHeaderWrapper>{children}</StyledHeaderWrapper>
      {!hideCloseButton && (
        <button onClick={handleClose}>
          <HiX size={36} />
        </button>
      )}
    </StyledHeaderContainer>
  )
}

export function ModalFooter(props: ModalFooterProps) {
  const { children, ...restProps } = props
  const { handleClose = () => {} } = useContext(ModalContext)

  return (
    <StyledFooterContainer {...restProps}>
      {typeof children === 'function' ? children({ handleClose }) : children}
    </StyledFooterContainer>
  )
}

export function ModalContent(props: PropsWithChildren) {
  const { children, ...restProps } = props

  return (
    <StyledModalContentContainer {...restProps}>
      {children}
    </StyledModalContentContainer>
  )
}
