import type { ComponentPropsWithoutRef, PropsWithChildren } from 'react'

export type ButtonVariantType = 'primary' | 'secondary' | 'tertiary'

export interface ButtonProps
  extends PropsWithChildren,
    ComponentPropsWithoutRef<'button'> {
  variant: ButtonVariantType
  hiddenLabel?: string
}
