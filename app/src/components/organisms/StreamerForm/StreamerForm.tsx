import { TextField } from '@/components'
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
      <TextField
        label="Full name"
        placeholder="eg. John Doe"
      />
      <TextField
        label="Nick name"
        placeholder="eg. StreamerGuy12"
      />
      <TextField
        label="Facebook profile URL"
        placeholder="https://..."
      />
      <TextField
        label="Instagram profile URL"
        placeholder="https://..."
      />
      <TextField
        label="Streaming channel URL"
        placeholder="https://..."
      />
      <TextField
        as="textarea"
        label="Short description"
        placeholder="eg. He has truely wonderful live streams..."
      />
    </StyledContainer>
  )
}

export default StreamerForm
