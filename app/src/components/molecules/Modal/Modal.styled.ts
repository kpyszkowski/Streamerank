import { BaseContainer } from '@/components'
import tw from 'twin.macro'

export const StyledHeaderContainer = tw(
  BaseContainer,
)`flex justify-between items-center`
export const StyledHeaderWrapper = tw.h2`text-2xl font-medium`
export const StyledFooterContainer = tw(
  BaseContainer,
)`flex justify-end items-center`

export const StyledModalContainer = tw.div`fixed w-screen h-screen top-0 right-0 z-20`
export const StyledModalContentWrapper = tw.div`flex flex-col bg-primary w-full h-full max-w-screen-md ml-auto`
export const StyledModalBackdrop = tw.div`absolute w-screen h-screen inset-0 bg-black/25 -z-10 backdrop-blur-sm`
export const StyledModalContentContainer = tw(
  BaseContainer,
)`flex-1 overflow-y-scroll bg-tertiary`
