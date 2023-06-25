import { Header } from '@/components'
import { StyledWrapper } from '@/components/organisms/Layout/Layout.styled'
import type { PropsWithChildren } from 'react'
import { useLocation } from 'react-router-dom'

function Layout({ children }: PropsWithChildren) {
  const location = useLocation()
  console.log(location)

  return (
    <>
      <Header isSubmitButtonHidden={location.pathname !== '/'} />
      <StyledWrapper>{children}</StyledWrapper>
    </>
  )
}

export default Layout
