import { BaseContainer, HeroSection, Layout, StreamerTile } from '@/components'
import 'twin.macro'

function DashboardPage() {
  return (
    <Layout>
      <HeroSection />
      <BaseContainer tw="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-x-12 gap-y-8">
        {Array(7)
          .fill(undefined)
          .map((_, index) => (
            <StreamerTile
              key={index}
              avatarSrc="https://static-cdn.jtvnw.net/jtv_user_pictures/asmongold-profile_image-f7ddcbd0332f5d28-300x300.png"
              fullName="Average Streamer"
              nickName="xXxStreamLordxXx"
              streamerId="qwerty"
              streamingUrl="#"
              badgeIcon="twitch"
            />
          ))}
      </BaseContainer>
    </Layout>
  )
}

export default DashboardPage
