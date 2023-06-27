import {
  StyledContainer,
  StyledHeadingWrapper,
  StyledWrapper,
  StyledButton,
  StyledProgressBar,
  StyledVotesNumber,
  StyledProgressBarContainer,
  StyledSubmissionNotice,
} from '@/components/molecules/VoteForm/VoteForm.styled'
import type { VoteFormProps } from '@/components/molecules/VoteForm/VoteForm.types'
import { useState } from 'react'
import {
  HiChevronDown,
  HiChevronUp,
  HiOutlineInformationCircle,
} from 'react-icons/hi'

function VoteForm(props: VoteFormProps) {
  const { upVotesCount, downVotesCount, onUpVote, onDownVote, ...restProps } =
    props

  const [isVoteRequested, setIsVoteRequested] = useState(false)

  const handleVote = (fn: any) => () => {
    if (isVoteRequested) {
      fn()
      setIsVoteRequested(false)
      return
    }
    setIsVoteRequested(true)
  }

  return (
    <StyledContainer {...restProps}>
      <StyledHeadingWrapper>
        Cast your vote
        {isVoteRequested && (
          <StyledSubmissionNotice>
            <HiOutlineInformationCircle size={16} />
            Press again to confirm
          </StyledSubmissionNotice>
        )}
      </StyledHeadingWrapper>
      <StyledWrapper>
        <StyledButton
          variant="secondary"
          hiddenLabel="Upvote streamer"
          onClick={handleVote(onUpVote)}
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
          onClick={handleVote(onDownVote)}
        >
          <HiChevronDown size={24} />
        </StyledButton>
      </StyledWrapper>
    </StyledContainer>
  )
}

export default VoteForm
