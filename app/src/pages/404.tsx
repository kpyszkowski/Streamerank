import { ErrorMessage } from '@/components'
import 'twin.macro'

function NotFoundPage() {
  return (
    <ErrorMessage
      isLogoVisible
      isButtonVisible
      tw="h-screen"
    >
      <ErrorMessage.Heading>Ooops!</ErrorMessage.Heading>
      <ErrorMessage.Text>Something went wrong 😢</ErrorMessage.Text>
    </ErrorMessage>
  )
}

export default NotFoundPage
