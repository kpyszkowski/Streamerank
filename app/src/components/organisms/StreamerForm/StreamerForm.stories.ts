import { StreamerForm } from '@/components'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof StreamerForm> = {
  component: StreamerForm,
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'dark',
    },
  },
}

export default meta
type Story = StoryObj<typeof StreamerForm>

export const Default: Story = {}
