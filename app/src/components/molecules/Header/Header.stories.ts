import { Header } from '@/components'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Header> = {
  component: Header,
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'dark',
    },
  },
}

export default meta
type Story = StoryObj<typeof Header>

export const Default: Story = {}
