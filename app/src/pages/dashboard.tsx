import { BaseContainer, HeroSection, Layout, StreamerTile } from '@/components'
import { getStreamers } from '@/helpers'
import { useQuery } from '@tanstack/react-query'
import 'twin.macro'

const { VITE_DASHBOARD_POOLING_INTERVAL = 1000 * 60 * 4 } = import.meta.env

function DashboardPage() {
  const { data, isSuccess, isError, isLoading } = useQuery(
    ['streamers'],
    getStreamers,
    { refetchInterval: VITE_DASHBOARD_POOLING_INTERVAL },
  )
  return (
    <Layout>
      <HeroSection />
      {(isError || isLoading) && (
        <BaseContainer tw="text-center">
          {isLoading && 'Loading...'}
          {isError && (
            <>
              <h1 tw="text-6xl font-heading leading-normal tracking-tighter">
                Oh crap! 😓
              </h1>
              <h2 tw="text-4xl leading-loose">Please try again later</h2>
            </>
          )}
        </BaseContainer>
      )}
      {isSuccess && (
        <BaseContainer tw="grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-x-12 gap-y-8">
          {data.map(
            ({ _id, platform, upVotes, downVotes, ...streamerData }) => (
              <StreamerTile
                key={_id}
                avatarSrc="https://static-cdn.jtvnw.net/jtv_user_pictures/asmongold-profile_image-f7ddcbd0332f5d28-300x300.png"
                streamerId={_id}
                badgeIcon={platform}
                upVotesCount={upVotes}
                downVotesCount={downVotes}
                {...streamerData}
              />
            ),
          )}
        </BaseContainer>
      )}
    </Layout>
  )
}

export default DashboardPage
