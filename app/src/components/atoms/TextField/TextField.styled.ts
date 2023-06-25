import tw, { styled } from 'twin.macro'

export const StyledContainer = tw.label`flex flex-col gap-1.5`
export const StyledInput = styled.input(
  ({ $hasError, $isHigher }: { $hasError: boolean; $isHigher: boolean }) => [
    tw`w-full p-3 rounded-xl border-2 bg-transparent text-white border-neutral-300 outline-0 hover:border-neutral-300 placeholder:text-neutral-400 placeholder-shown:border-neutral-400`,
    $hasError &&
      tw`border-red-600 hover:border-red-500 focus-visible:border-red-600`,
    $isHigher && tw`min-h-[320px] resize-none`,
  ],
)
export const StyledLabel = styled.span(
  ({ $isHidden }: { $isHidden: boolean }) => [$isHidden && tw`sr-only`],
)
export const StyledErrorMessageWrapper = tw.p`inline-flex items-center gap-1 text-red-600 mt-0.5`
export const StyledErrorMessage = tw.span`text-sm`
