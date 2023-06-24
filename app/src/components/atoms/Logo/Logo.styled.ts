import tw from 'twin.macro'
import { GiLaurelsTrophy } from 'react-icons/gi'

export const StyledContainer = tw.span`flex items-center font-heading text-2xl tracking-tight text-white`
export const StyledSign = tw(
  GiLaurelsTrophy,
)`-mr-1.5 fill-accent -rotate-12 -z-10`
