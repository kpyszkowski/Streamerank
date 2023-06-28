import type { HeadersDefaults } from 'axios'
import type { StreamerType } from 'types'

export type HeadersType = HeadersDefaults & {
  'Content-Type': string
  Accept: string
}

export type GetStreamersResponse = (StreamerType & { _id: string })[]
