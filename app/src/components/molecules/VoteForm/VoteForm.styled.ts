import { Button } from '@/components'
import tw from 'twin.macro'

export const StyledContainer = tw.div`flex flex-col gap-3`
export const StyledWrapper = tw.div`flex gap-4 items-center`
export const StyledButton = tw(Button)`px-4`
export const StyledProgressBarContainer = tw.div`w-full flex-1 h-3 rounded-lg bg-red-800 overflow-hidden`
export const StyledProgressBar = tw.span`block h-3 bg-emerald-600 transition-[width]`
