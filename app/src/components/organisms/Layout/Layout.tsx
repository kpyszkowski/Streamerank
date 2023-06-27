import { Header } from '@/components'
import { StyledWrapper } from '@/components/organisms/Layout/Layout.styled'
import type { PropsWithChildren } from 'react'
import { useLocation } from 'react-router-dom'

function Layout(props: PropsWithChildren) {
  const { children } = props
  const location = useLocation()
  return (
    <>
      <Header isSubmitButtonHidden={location.pathname !== '/'} />
      <StyledWrapper>{children}</StyledWrapper>
    </>
  )
}

export default Layout
