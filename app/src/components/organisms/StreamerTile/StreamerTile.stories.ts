import { StreamerTile } from '@/components'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof StreamerTile> = {
  component: StreamerTile,
  args: {
    avatarSrc:
      'https://static-cdn.jtvnw.net/jtv_user_pictures/asmongold-profile_image-f7ddcbd0332f5d28-300x300.png',
    fullName: 'Average Streamer',
    nickName: 'xXxStreamLordxXx',
    streamerId: 'qwerty',
    streamingUrl: '#',
    badgeIcon: 'twitch',
  },
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
}

export default meta
type Story = StoryObj<typeof StreamerTile>

export const Default: Story = {
  args: {
    facebookUrl: '#',
    instagramUrl: '#',
  },
}
export const WithoutSocialMedia: Story = {}
