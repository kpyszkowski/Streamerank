import type { StreamerType, StreamingPlatformType } from 'types'

export type StreamerFormStoreSliceType = Omit<StreamerType, 'platform'> & {
  platform?: StreamingPlatformType | undefined
  setData: (data: Partial<StreamerType>) => void
  clearData: () => void
}
