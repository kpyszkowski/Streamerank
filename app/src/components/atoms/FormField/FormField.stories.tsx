import { FormField } from '@/components'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof FormField> = {
  component: FormField,
  args: {
    label: 'Label',
    placeholder: 'Placeholder...',
  },
}

export default meta
type Story = StoryObj<typeof FormField>

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

export const AsSelect: Story = {
  args: {
    as: 'select',
    options: [
      { label: 'Tomato', value: '🍅' },
      { label: 'Potato', value: '🥔' },
      { label: 'Onion', value: '🧅' },
      { label: 'Cabbage', value: '🥬' },
    ],
  },
}
