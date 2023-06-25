import { TextField } from '@/components'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof TextField> = {
  component: TextField,
  args: {
    label: 'Label',
    placeholder: 'Placeholder...',
  },
}

export default meta
type Story = StoryObj<typeof TextField>

export const Default: Story = {}

export const WithValue: Story = {
  args: {
    defaultValue: 'Field value',
  },
}

export const WithErrorMessage: Story = {
  args: {
    defaultValue: 'Invalid field value',
    errorMessage: 'Error message',
  },
}

export const AsTextarea: Story = {
  args: {
    as: 'textarea',
  },
}
