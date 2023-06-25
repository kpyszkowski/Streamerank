import { BaseContainer } from '@/components'
import tw, { css, styled, theme } from 'twin.macro'
import patternSvg from '~/assets/pattern.svg'

export const StyledContainer = styled(BaseContainer)(() => [
  tw`
    flex items-center justify-center relative
    min-h-screen md:min-h-[75vh] 
    bg-repeat bg-[size:.275rem] bg-blend-overlay
  `,
  css`
    background-image: linear-gradient(
        to bottom,
        ${theme`colors.secondary`},
        ${theme`colors.primary`}
      ),
      url(${patternSvg});

    &::after {
      content: '';
      display: block;
      margin: 0 auto;
      position: absolute;
      bottom: -1px;
      background-image: linear-gradient(
        to left,
        transparent,
        ${theme`colors.white`},
        transparent
      );
      opacity: 0.5;
      width: 100%;
      height: 1px;
      max-width: ${theme`maxWidth.screen-sm`};
    }
  `,
])
export const StyledTypographyWrapper = tw.section`w-full max-w-screen-md text-center`
export const StyledHeading = tw.h1`font-heading text-5xl tracking-tight leading-normal text-white mb-12`
export const StyledParagraph = tw.p`leading-loose text-neutral-300`
