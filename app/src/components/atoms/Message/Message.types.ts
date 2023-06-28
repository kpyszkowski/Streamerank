import type { PropsWithChildren } from 'react'

export type MessageVariantType = 'error' | 'info'
export interface MessageProps extends PropsWithChildren {
  variant: MessageVariantType
}
