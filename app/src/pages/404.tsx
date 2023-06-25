import { Button, Logo } from '@/components'
import 'twin.macro'

function NotFoundPage() {
  return (
    <div tw="flex flex-col items-center justify-center h-screen p-3 lg:p-16">
      <Logo />
      <div tw="my-20 text-center">
        <h1 tw="text-9xl font-heading leading-normal tracking-tighter">
          Ooops!
        </h1>
        <h2 tw="text-5xl leading-loose">Something went wrong 😢</h2>
      </div>
      <Button href="/">Go back to dashboard</Button>
    </div>
  )
}

export default NotFoundPage
