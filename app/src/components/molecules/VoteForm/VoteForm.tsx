import { Message } from '@/components'
import {
  StyledContainer,
  StyledHeadingWrapper,
  StyledWrapper,
  StyledButton,
  StyledProgressBar,
  StyledVotesNumber,
  StyledProgressBarContainer,
} from '@/components/molecules/VoteForm/VoteForm.styled'
import type { VoteFormProps } from '@/components/molecules/VoteForm/VoteForm.types'
import { useState } from 'react'
import { HiChevronDown, HiChevronUp } from 'react-icons/hi'
import type { StreamerVoteType } from 'types'

function VoteForm(props: VoteFormProps) {
  const { upVotesCount, downVotesCount, onUpVote, onDownVote, ...restProps } =
    props

  const [requestedVoteType, setRequestedVoteType] =
    useState<StreamerVoteType | null>(null)

  const handleVote =
    (voteTrigger: () => void, voteType: StreamerVoteType) => () => {
      if (!requestedVoteType) {
        setRequestedVoteType(voteType)
        return
      }
      if (requestedVoteType === voteType) {
        voteTrigger()
        setRequestedVoteType(null)
        return
      }
      if (requestedVoteType !== voteType) {
        setRequestedVoteType(null)
      }
    }

  return (
    <StyledContainer {...restProps}>
      <StyledHeadingWrapper>
        Cast your vote
        {requestedVoteType && (
          <Message variant="info">Press again to confirm</Message>
        )}
      </StyledHeadingWrapper>
      <StyledWrapper>
        <StyledButton
          variant="secondary"
          hiddenLabel="Upvote streamer"
          onClick={handleVote(onUpVote, 'up')}
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
          onClick={handleVote(onDownVote, 'down')}
        >
          <HiChevronDown size={24} />
        </StyledButton>
      </StyledWrapper>
    </StyledContainer>
  )
}

export default VoteForm
