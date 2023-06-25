import { BaseContainer } from '@/components'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof BaseContainer> = {
  component: BaseContainer,
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    children: 'Base Container',
  },
}

export default meta
type Story = StoryObj<typeof BaseContainer>

export const Default: Story = {}
