import { Message } from '@/components'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Message> = {
  component: Message,
  args: {
    children: 'Message',
  },
}

export default meta
type Story = StoryObj<typeof Message>

export const Error: Story = {
  args: {
    variant: 'error',
  },
}

export const Info: Story = {
  args: {
    variant: 'info',
  },
}
