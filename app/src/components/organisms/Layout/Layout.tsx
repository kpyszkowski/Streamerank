import { Header } from '@/components'
import type { PropsWithChildren } from 'react'

function Layout({ children }: PropsWithChildren) {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  )
}

export default Layout
