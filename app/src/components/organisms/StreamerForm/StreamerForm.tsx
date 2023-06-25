import { FormField } from '@/components'
import {
  StyledContainer,
  StyledParagraph,
} from '@/components/organisms/StreamerForm/StreamerForm.styled'
import type { PropsWithChildren } from 'react'

function StreamerForm(props: PropsWithChildren) {
  const { children } = props
  return (
    <StyledContainer {...props}>
      <StyledParagraph>{children}</StyledParagraph>
      <FormField
        label="Full name"
        placeholder="eg. John Doe"
      />
      <FormField
        label="Nick name"
        placeholder="eg. StreamerGuy12"
      />
      <FormField
        as="select"
        label="Streaming platform"
        placeholder="Eg. Twitch, YouTube..."
        options={[
          { label: 'Twitch', value: 'twitch' },
          { label: 'YouTube', value: 'youtube' },
          { label: 'TikTok', value: 'tiktok' },
          { label: 'Kick', value: 'kick' },
          { label: 'Rumble', value: 'rumble' },
        ]}
      />
      <FormField
        label="Streaming channel URL"
        placeholder="https://..."
      />
      <FormField
        label="Facebook profile URL"
        placeholder="https://..."
      />
      <FormField
        label="Instagram profile URL"
        placeholder="https://..."
      />
      <FormField
        as="textarea"
        label="Short description"
        placeholder="eg. He has truely wonderful live streams..."
      />
    </StyledContainer>
  )
}

export default StreamerForm
