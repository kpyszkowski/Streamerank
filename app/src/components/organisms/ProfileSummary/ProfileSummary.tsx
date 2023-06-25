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
            24
          </StyledVote>
          <StyledVote $isRed>
            <HiChevronDown size={24} />3
          </StyledVote>
        </StyledVotesWrapper>
      </StyledTopWrapper>
      <StyledContentWrapper>
        <StyledContent>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque libero
          sint tempora illo, culpa nulla doloremque, cumque vero eum, quae
          suscipit deserunt reiciendis enim. Sunt perspiciatis eius non dicta
          quas. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Quibusdam facere cum illo corrupti magni et quos, fuga, delectus
          ratione nam minus temporibus officiis, porro molestias alias veniam!
          Est, delectus voluptatum? Lorem, ipsum dolor sit amet consectetur
          adipisicing elit. Earum, nam. Atque nihil id culpa veritatis
          distinctio vero esse voluptatibus a obcaecati aliquid, perferendis
          laborum, aspernatur debitis earum, iste alias veniam!Lorem ipsum dolor
          sit amet consectetur adipisicing elit. Itaque libero sint tempora
          illo, culpa nulla doloremque, cumque vero eum, quae suscipit deserunt
          reiciendis enim. Sunt perspiciatis eius non dicta quas. Lorem ipsum
          dolor sit, amet consectetur adipisicing elit. Quibusdam facere cum
          illo corrupti magni et quos, fuga, delectus ratione nam minus
          temporibus officiis, porro molestias alias veniam! Est, delectus
          voluptatum? Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Earum, nam. Atque nihil id culpa veritatis distinctio vero esse
          voluptatibus a obcaecati aliquid, perferendis laborum, aspernatur
          debitis earum, iste alias veniam!Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Itaque libero sint tempora illo, culpa
          nulla doloremque, cumque vero eum, quae suscipit deserunt reiciendis
          enim. Sunt perspiciatis eius non dicta quas. Lorem ipsum dolor sit,
          amet consectetur adipisicing elit. Quibusdam facere cum illo corrupti
          magni et quos, fuga, delectus ratione nam minus temporibus officiis,
          porro molestias alias veniam! Est, delectus voluptatum? Lorem, ipsum
          dolor sit amet consectetur adipisicing elit. Earum, nam. Atque nihil
          id culpa veritatis distinctio vero esse voluptatibus a obcaecati
          aliquid, perferendis laborum, aspernatur debitis earum, iste alias
          veniam!
        </StyledContent>
        <StyledLinksWrapper>
          <Button tw="whitespace-nowrap">
            <CiStreamOn strokeWidth={2} />
            Visit streaming channel
          </Button>
          <StyledSocialsWrapper>
            <Button variant="tertiary">
              <FaFacebookF />
              Facebook
            </Button>
            <Button variant="tertiary">
              <FaInstagram />
              Instagram
            </Button>
          </StyledSocialsWrapper>
        </StyledLinksWrapper>
      </StyledContentWrapper>
    </StyledContainer>
  )
}

export default ProfileSummary
