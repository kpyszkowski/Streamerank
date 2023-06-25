import tw, { styled } from 'twin.macro'

export const StyledContainer = tw.div`flex flex-col gap-24 relative`
export const StyledTopWrapper = tw.div`flex flex-wrap gap-16 lg:(items-center flex-row)`
export const StyledNameWrapper = tw.div`flex flex-col flex-1 gap-4`
export const StyledFullName = tw.div`text-6xl font-heading tracking-tighter`
export const StyledNickName = tw.div`text-2xl text-neutral-400`
export const StyledVotesWrapper = tw.div`flex gap-2 basis-full relative text-center font-medium text-4xl lg:basis-0`
export const StyledVote = styled.span<{ $isRed?: boolean }>(({ $isRed }) => [
  tw`flex items-center justify-center gap-2 px-4 py-6 rounded-xl bg-primary shadow-emerald-1000 shadow-inner`,
  $isRed ? tw`text-red-600` : tw`text-emerald-600`,
])
export const StyledContentWrapper = tw.div`flex flex-col gap-20 justify-between xl:flex-row`
export const StyledContent = tw.article`w-full max-w-screen-md leading-8 mx-auto`
export const StyledLinksWrapper = tw.aside`flex flex-col items-center gap-8 px-16 sticky top-[128px] w-full h-fit md:flex-row xl:(flex-col max-w-lg)`
export const StyledSocialsWrapper = tw.ul`flex justify-center gap-6 flex-1`
