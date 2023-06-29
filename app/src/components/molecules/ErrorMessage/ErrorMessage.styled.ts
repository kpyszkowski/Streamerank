import tw, { styled } from 'twin.macro'

export const StyledContainer = styled.div<{ $isColoured: boolean }>(
  ({ $isColoured }) => [tw`text-center`, $isColoured && tw`text-secondary`],
)
export const StyledHeading = tw.h1`text-9xl font-heading  tracking-tighter`
export const StyledText = tw.p`text-5xl leading-loose`
export const TypographyWrapper = tw.div`flex flex-col justify-center gap-y-12`
