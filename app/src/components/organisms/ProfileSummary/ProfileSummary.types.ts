import type { StreamerType } from 'types'

export interface ProfileSummaryProps extends StreamerType {
  description: string
  upVotes: number
  downVotes: number
  avatarSrc: string
}
