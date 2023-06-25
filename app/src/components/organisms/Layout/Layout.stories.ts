import { Layout } from '@/components'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Layout> = {
  component: Layout,
  parameters: {
    layout: 'fullscreen',
  },
}

export default meta
type Story = StoryObj<typeof Layout>

export const Default: Story = {}
