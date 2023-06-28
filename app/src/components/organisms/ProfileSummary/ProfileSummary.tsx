import { Avatar, Button } from '@/components'
import {
  StyledContainer,
  StyledContent,
  StyledContentWrapper,
  StyledFullName,
  StyledLinksWrapper,
  StyledNameWrapper,
  StyledNickName,
  StyledSocialsWrapper,
  StyledTopWrapper,
  StyledVote,
  StyledVotesWrapper,
} from '@/components/organisms/ProfileSummary/ProfileSummary.styled'
import type { ProfileSummaryProps } from '@/components/organisms/ProfileSummary/ProfileSummary.types'
import { HiChevronDown, HiChevronUp } from 'react-icons/hi'
import { CiStreamOn } from 'react-icons/ci'
import { FaFacebookF, FaInstagram } from 'react-icons/fa'
import 'twin.macro'

function ProfileSummary(props: ProfileSummaryProps) {
  const {
    fullName,
    nickName,
    avatarSrc,
    streamingUrl,
    instagramUrl,
    facebookUrl,
    description,
    upVotes,
    downVotes,
    ...restProps
  } = props

  return (
    <StyledContainer {...restProps}>
      <StyledTopWrapper>
        <Avatar
          size="large"
          src={avatarSrc}
        />
        <StyledNameWrapper>
          <StyledFullName>{fullName}</StyledFullName>
          <StyledNickName>{nickName}</StyledNickName>
        </StyledNameWrapper>
        <StyledVotesWrapper>
          <StyledVote>
            <HiChevronUp size={24} />
            {upVotes}
          </StyledVote>
          <StyledVote $isRed>
            <HiChevronDown size={24} />
            {downVotes}
          </StyledVote>
        </StyledVotesWrapper>
      </StyledTopWrapper>
      <StyledContentWrapper>
        <StyledContent>{description}</StyledContent>
        <StyledLinksWrapper>
          <Button
            tw="whitespace-nowrap"
            href={streamingUrl}
          >
            <CiStreamOn strokeWidth={2} />
            Visit streaming channel
          </Button>
          <StyledSocialsWrapper>
            {facebookUrl && (
              <Button
                variant="tertiary"
                href={facebookUrl}
              >
                <FaFacebookF />
                Facebook
              </Button>
            )}
            {instagramUrl && (
              <Button
                variant="tertiary"
                href={instagramUrl}
              >
                <FaInstagram />
                Instagram
              </Button>
            )}
          </StyledSocialsWrapper>
        </StyledLinksWrapper>
      </StyledContentWrapper>
    </StyledContainer>
  )
}

export default ProfileSummary
