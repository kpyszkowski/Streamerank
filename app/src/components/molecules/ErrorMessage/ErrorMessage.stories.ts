import { ErrorMessage } from '@/components'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof ErrorMessage> = {
  component: ErrorMessage,
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'dark',
    },
  },
}

export default meta
type Story = StoryObj<typeof ErrorMessage>

export const Default: Story = {}
export const WithLogo: Story = {
  args: {
    isLogoVisible: true,
  },
}
export const WithButton: Story = {
  args: {
    isButtonVisible: true,
  },
}
export const Coloured: Story = {
  args: {
    isColoured: true,
  },
}
