import { StyledContainer } from '@/components/atoms/BaseContainer/BaseContainer.styled'
import { forwardRef, type PropsWithChildren } from 'react'

const BaseContainer = forwardRef<HTMLDivElement, PropsWithChildren>(
  (props, ref) => {
    const { children, ...restProps } = props
    return (
      <StyledContainer
        {...restProps}
        ref={ref}
      >
        {children}
      </StyledContainer>
    )
  },
)

export default BaseContainer
