import { ProfileSummary } from '@/components'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof ProfileSummary> = {
  component: ProfileSummary,
  args: {
    avatarSrc:
      'https://static-cdn.jtvnw.net/jtv_user_pictures/asmongold-profile_image-f7ddcbd0332f5d28-300x300.png',
    fullName: 'Average Streamer',
    nickName: 'xXxStreamLordxXx',
    streamingUrl: '#',
  },
}

export default meta
type Story = StoryObj<typeof ProfileSummary>

export const Default: Story = {
  args: {
    facebookUrl: '#',
    instagramUrl: '#',
  },
}
export const WithoutSocialMedia: Story = {}
