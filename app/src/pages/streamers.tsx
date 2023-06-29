import {
  BaseContainer,
  ErrorMessage,
  Layout,
  ProfileSummary,
} from '@/components'
import { getStreamer } from '@/helpers'
import { useQuery } from '@tanstack/react-query'
import { HiArrowLeft } from 'react-icons/hi'
import { useNavigate, useParams } from 'react-router-dom'
import 'twin.macro'

function StreamersPage() {
  const { streamerId } = useParams()
  const { data, isSuccess, isError, isLoading } = useQuery([streamerId], () =>
    getStreamer(streamerId!),
  )
  const navigate = useNavigate()

  return (
    <Layout>
      <BaseContainer tw="pb-24">
        <button
          tw="flex items-center gap-6 font-medium text-2xl py-4"
          onClick={() => navigate(-1)}
        >
          <HiArrowLeft />
          Go back to dashboard
        </button>
        {(isError || isLoading) && (
          <BaseContainer tw="px-0">
            <ErrorMessage
              isColoured
              tw="text-left"
            >
              <ErrorMessage.Heading>
                {isError && "We couldn't make it..."}
              </ErrorMessage.Heading>
              <ErrorMessage.Text>
                {isError ? 'Please try again later' : 'Loading...'}
              </ErrorMessage.Text>
            </ErrorMessage>
          </BaseContainer>
        )}
        {isSuccess && (
          <ProfileSummary
            {...data}
            avatarSrc={
              'https://static-cdn.jtvnw.net/jtv_user_pictures/asmongold-profile_image-f7ddcbd0332f5d28-300x300.png'
            }
            tw="mt-16"
          />
        )}
      </BaseContainer>
    </Layout>
  )
}

export default StreamersPage
