import type { InputHTMLAttributes } from 'react'

export type ButtonVariantType = 'primary' | 'secondary'

export interface FormFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  isLabelHidden?: boolean
  errorMessage?: string
  as?: 'input' | 'textarea' | 'select'
  options?: {
    value: string
    label: string
  }[]
}
