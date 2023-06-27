import type {
  Dispatch,
  PropsWithChildren,
  ReactNode,
  SetStateAction,
} from 'react'

export interface ModalProps extends PropsWithChildren {
  setVisible: Dispatch<SetStateAction<boolean>>
  hideCloseButton?: boolean
  onClose?: () => void
}

type ModalCloseHandlerType = () => void

export interface ModalFooterProps {
  children:
    | ((renderProps: { handleClose: ModalCloseHandlerType }) => ReactNode)
    | ReactNode
}

export type ModalContextType = {
  handleClose?: ModalCloseHandlerType
  hideCloseButton?: boolean
}
