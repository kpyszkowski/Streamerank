import { Avatar, Button } from '@/components'
import {
  StyledContainer,
  StyledBioWrapper,
  StyledFullname,
  StyledLinksWrapper,
  StyledNameWrapper,
  StyledNickname,
  StyledVoteForm,
} from '@/components/organisms/StreamerTile/StreamerTile.styled'
import type { StreamerTileProps } from '@/components/organisms/StreamerTile/StreamerTile.types'
import 'twin.macro'
import { CiStreamOn } from 'react-icons/ci'
import { FaInstagram, FaFacebookF, FaUser } from 'react-icons/fa'

function StreamerTile(props: StreamerTileProps) {
  const {
    fullName,
    nickName,
    facebookUrl,
    instagramUrl,
    streamerId,
    streamingUrl,
    avatarSrc,
    badgeIcon,
    upVotesCount = 0,
    downVotesCount = 0,
    ...restProps
  } = props

  return (
    <StyledContainer {...restProps}>
      <StyledBioWrapper>
        <Avatar
          src={avatarSrc}
          badgeIcon={badgeIcon}
        />
        <StyledNameWrapper>
          <StyledFullname>{fullName}</StyledFullname>
          <StyledNickname>{nickName}</StyledNickname>
        </StyledNameWrapper>
      </StyledBioWrapper>
      <StyledLinksWrapper>
        <Button
          variant="tertiary"
          hiddenLabel="Visit streaming profile"
          href={streamingUrl}
        >
          <CiStreamOn strokeWidth="1" />
        </Button>
        {facebookUrl && (
          <Button
            variant="tertiary"
            hiddenLabel="Visit Facebook profile"
            href={facebookUrl}
          >
            <FaFacebookF />
          </Button>
        )}
        {instagramUrl && (
          <Button
            variant="tertiary"
            hiddenLabel="Visit Instagram profile"
            href={instagramUrl}
          >
            <FaInstagram />
          </Button>
        )}
        <Button
          variant="tertiary"
          href={`/streamers/${streamerId}`}
          tw="ml-auto"
        >
          <FaUser />
          View profile
        </Button>
      </StyledLinksWrapper>
      <StyledVoteForm
        upVotesCount={upVotesCount}
        downVotesCount={downVotesCount}
        onUpVote={() => {}}
        onDownVote={() => {}}
      />
    </StyledContainer>
  )
}

export default StreamerTile
