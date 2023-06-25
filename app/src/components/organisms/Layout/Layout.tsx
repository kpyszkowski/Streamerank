import { Header } from '@/components'
import { StyledWrapper } from '@/components/organisms/Layout/Layout.styled'
import type { PropsWithChildren } from 'react'

function Layout({ children }: PropsWithChildren) {
  return (
    <>
      <Header />
      <StyledWrapper>{children}</StyledWrapper>
    </>
  )
}

export default Layout
