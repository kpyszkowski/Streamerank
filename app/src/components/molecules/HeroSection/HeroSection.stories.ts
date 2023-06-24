import { HeroSection } from '@/components'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof HeroSection> = {
  component: HeroSection,
  parameters: {
    layout: 'fullscreen',
  },
}

export default meta
type Story = StoryObj<typeof HeroSection>

export const Default: Story = {}
