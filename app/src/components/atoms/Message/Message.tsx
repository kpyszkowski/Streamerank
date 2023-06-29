import { StyledContainer } from '@/components/atoms/Message/Message.styled'
import type { MessageProps } from '@/components/atoms/Message/Message.types'
import { forwardRef } from 'react'
import {
  HiOutlineExclamationCircle,
  HiOutlineInformationCircle,
} from 'react-icons/hi'

const Message = forwardRef<HTMLSpanElement, MessageProps>((props, ref) => {
  const { children, variant, ...restProps } = props
  return (
    <StyledContainer
      ref={ref}
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
})

export default Message
