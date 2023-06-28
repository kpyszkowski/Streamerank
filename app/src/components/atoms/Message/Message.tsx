import { StyledContainer } from '@/components/atoms/Message/Message.styled'
import type { MessageProps } from '@/components/atoms/Message/Message.types'
import {
  HiOutlineExclamationCircle,
  HiOutlineInformationCircle,
} from 'react-icons/hi'

function Message(props: MessageProps) {
  const { children, variant, ...restProps } = props
  return (
    <StyledContainer
      $variant={variant}
      {...restProps}
    >
      {variant === 'error' ? (
        <HiOutlineExclamationCircle size={16} />
      ) : (
        <HiOutlineInformationCircle size={16} />
      )}
      {children}
    </StyledContainer>
  )
}

export default Message
