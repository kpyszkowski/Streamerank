import { Avatar } from '@/components'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Avatar> = {
  component: Avatar,
  args: {
    src: 'https://static-cdn.jtvnw.net/jtv_user_pictures/asmongold-profile_image-f7ddcbd0332f5d28-300x300.png',
    badgeIcon: 'twitch',
  },
}

export default meta
type Story = StoryObj<typeof Avatar>

export const Small: Story = {}

export const Large: Story = {
  args: {
    size: 'large',
  },
}

export const WithoutBadge: Story = {
  args: {
    badgeIcon: undefined,
  },
}
