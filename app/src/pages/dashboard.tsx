import {
  BaseContainer,
  ErrorMessage,
  HeroSection,
  Layout,
  StreamerTile,
} from '@/components'
import { getStreamers } from '@/helpers'
import { useQuery } from '@tanstack/react-query'
import 'twin.macro'
import { motion } from 'framer-motion'
import type { Variants } from 'framer-motion'

const MotionBaseContainer = motion(BaseContainer)
const MotionStreamerTile = motion(StreamerTile)

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const streamerTileVariants: Variants = {
  hidden: { x: -35, y: -15, opacity: 0 },
  visible: { x: 0, y: 0, opacity: 1 },
}

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
        <BaseContainer>
          <ErrorMessage isColoured>
            <ErrorMessage.Heading>{isError && 'Oh no...'}</ErrorMessage.Heading>
            <ErrorMessage.Text>
              {isError ? 'Please try again later' : 'Loading...'}
            </ErrorMessage.Text>
          </ErrorMessage>
        </BaseContainer>
      )}
      {isSuccess && (
        <MotionBaseContainer
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          layout
          tw="grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-x-12 gap-y-8"
        >
          {data.map(
            ({ _id, platform, upVotes, downVotes, ...streamerData }) => (
              <MotionStreamerTile
                variants={streamerTileVariants}
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
        </MotionBaseContainer>
      )}
    </Layout>
  )
}

export default DashboardPage
