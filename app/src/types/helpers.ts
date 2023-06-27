import type { HeadersDefaults } from 'axios'

export type HeadersType = HeadersDefaults & {
  'Content-Type': string
  Accept: string
}
