import type { InputHTMLAttributes } from 'react'

export type ButtonVariantType = 'primary' | 'secondary'

export interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  isLabelHidden?: boolean
  errorMessage?: string
  as?: 'input' | 'textarea'
}
