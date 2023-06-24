import { VoteForm } from '@/components'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof VoteForm> = {
  component: VoteForm,
  args: {
    upVotesCount: 1,
    downVotesCount: 2,
    onUpVote: () => console.log('Up vote'),
    onDownVote: () => console.log('Down vote'),
  },
}

export default meta
type Story = StoryObj<typeof VoteForm>

export const Default: Story = {}
