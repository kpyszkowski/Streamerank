import tw, { styled } from 'twin.macro'

export const StyledContainer = tw.label`flex flex-col`
export const StyledInput = styled.input(
  ({ $hasError, $isHigher }: { $hasError: boolean; $isHigher: boolean }) => [
    tw`
      w-full p-3 rounded-xl border-2 bg-transparent text-white placeholder:text-neutral-500 outline-0
    `,
    $hasError
      ? tw`border-red-600 hover:border-red-500 focus-visible:border-red-600`
      : tw`border-neutral-400 hover:border-neutral-400 placeholder-shown:border-neutral-500`,
    $isHigher && tw`min-h-[320px] resize-none`,
  ],
)
export const StyledLabel = styled.span(
  ({ $isHidden }: { $isHidden: boolean }) => [
    tw`mb-1.5`,
    $isHidden && tw`sr-only`,
  ],
)
export const StyledErrorMessageWrapper = tw.p`inline-flex items-center gap-1 text-red-600 mt-2`
export const StyledErrorMessage = tw.span`text-sm`
