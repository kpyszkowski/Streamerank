import { BaseContainer, Layout, ProfileSummary } from '@/components'
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
          tw="flex items-center gap-6 font-medium text-2xl py-4 mb-16"
          onClick={() => navigate(-1)}
        >
          <HiArrowLeft />
          Go back to dashboard
        </button>
        {(isError || isLoading) && (
          <>
            {isLoading && 'Loading...'}
            {isError && (
              <>
                <h1 tw="text-6xl font-heading leading-normal tracking-tighter">
                  Aaargh, so sorry! 😢
                </h1>
                <h2 tw="text-4xl leading-loose">
                  We couldn't make it, please try again later
                </h2>
              </>
            )}
          </>
        )}
        {isSuccess && (
          <ProfileSummary
            {...data}
            avatarSrc={
              'https://static-cdn.jtvnw.net/jtv_user_pictures/asmongold-profile_image-f7ddcbd0332f5d28-300x300.png'
            }
          />
        )}
      </BaseContainer>
    </Layout>
  )
}

export default StreamersPage
