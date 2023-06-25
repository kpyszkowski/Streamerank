import { BaseContainer, Layout, ProfileSummary } from '@/components'
import { HiArrowLeft } from 'react-icons/hi'
import { useNavigate } from 'react-router-dom'
import 'twin.macro'

function StreamersPage() {
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
        <ProfileSummary
          fullName={'Average Streamer'}
          nickName={'xXxStreamLordxXx'}
          avatarSrc={
            'https://static-cdn.jtvnw.net/jtv_user_pictures/asmongold-profile_image-f7ddcbd0332f5d28-300x300.png'
          }
          streamingUrl={'#'}
          facebookUrl={'#'}
          instagramUrl={'#'}
        />
      </BaseContainer>
    </Layout>
  )
}

export default StreamersPage
