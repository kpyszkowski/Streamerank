import type {
  Dispatch,
  PropsWithChildren,
  ReactNode,
  SetStateAction,
} from 'react'

export interface ModalProps extends PropsWithChildren {
  setVisible: Dispatch<SetStateAction<boolean>>
  hideCloseButton?: boolean
}

type ModalCloseHandlerType = () => void

export interface ModalFooterProps {
  renderChildren: (renderProps: {
    handleClose: ModalCloseHandlerType
  }) => ReactNode
}

export type ModalContextType = {
  handleClose?: ModalCloseHandlerType
  hideCloseButton?: boolean
}
