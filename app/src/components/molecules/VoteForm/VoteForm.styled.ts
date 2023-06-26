import { Button } from '@/components'
import tw from 'twin.macro'

export const StyledContainer = tw.div`flex flex-col gap-3`
export const StyledWrapper = tw.div`flex gap-4 items-center`
export const StyledButton = tw(Button)`px-4`
export const StyledProgressBarContainer = tw.div`flex justify-between relative w-full flex-1 rounded-lg bg-red-700 overflow-hidden`
export const StyledVotesNumber = tw.span`text-lg font-medium px-3 py-0.5 text-black/50 z-10`
export const StyledProgressBar = tw.span`block absolute w-1/2 h-full inset-0 bg-emerald-600 transition-[width]`
