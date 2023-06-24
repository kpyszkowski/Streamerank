import { VoteForm } from '@/components'
import tw from 'twin.macro'

export const StyledContainer = tw.div`flex flex-col backdrop-blur-lg`
export const StyledBioWrapper = tw.div`flex gap-8 items-center px-8 py-6 bg-primary/25 rounded-t-xl`
export const StyledNameWrapper = tw.div`flex flex-col gap-2`
export const StyledFullname = tw.div`text-xl font-medium`
export const StyledNickname = tw.div`text-neutral-200`
export const StyledLinksWrapper = tw.div`flex justify-start gap-6 px-8 py-4 bg-primary/25`
export const StyledVoteForm = tw(
  VoteForm,
)`px-8 py-4 bg-secondary/25 rounded-b-xl`
