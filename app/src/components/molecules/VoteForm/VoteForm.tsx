import {
  StyledContainer,
  StyledWrapper,
  StyledButton,
  StyledProgressBar,
  StyledVotesNumber,
  StyledProgressBarContainer,
} from '@/components/molecules/VoteForm/VoteForm.styled'
import type { VoteFormProps } from '@/components/molecules/VoteForm/VoteForm.types'
import { HiChevronDown, HiChevronUp } from 'react-icons/hi'

function VoteForm(props: VoteFormProps) {
  const { upVotesCount, downVotesCount, onUpVote, onDownVote, ...restProps } =
    props

  return (
    <StyledContainer {...restProps}>
      Cast your vote
      <StyledWrapper>
        <StyledButton
          variant="secondary"
          hiddenLabel="Upvote streamer"
          onClick={onUpVote}
        >
          <HiChevronUp size={24} />
        </StyledButton>
        <StyledProgressBarContainer>
          <StyledVotesNumber>{upVotesCount}</StyledVotesNumber>
          <StyledVotesNumber>{downVotesCount}</StyledVotesNumber>
          <StyledProgressBar
            style={{
              width: `${
                (upVotesCount / (upVotesCount + downVotesCount)) * 100
              }%`,
            }}
          />
        </StyledProgressBarContainer>
        <StyledButton
          variant="secondary"
          hiddenLabel="Downvote streamer"
          onClick={onDownVote}
        >
          <HiChevronDown size={24} />
        </StyledButton>
      </StyledWrapper>
    </StyledContainer>
  )
}

export default VoteForm
