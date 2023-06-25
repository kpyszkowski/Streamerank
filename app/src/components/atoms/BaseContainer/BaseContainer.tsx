import { StyledContainer } from '@/components/atoms/BaseContainer/BaseContainer.styled'
import type { PropsWithChildren } from 'react'

function BaseContainer(props: PropsWithChildren) {
  const { children, ...restProps } = props
  return <StyledContainer {...restProps}>{children}</StyledContainer>
}

export default BaseContainer
