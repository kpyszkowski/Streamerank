import type { StreamerFormStoreSliceType } from '@/types'
import { create, type StateCreator } from 'zustand'

const createStreamerFormSlice: StateCreator<
  StreamerFormStoreSliceType,
  [],
  [],
  StreamerFormStoreSliceType
> = (set) => ({
  fullName: '',
  nickName: '',
  streamingUrl: '',
  description: '',
  setData: (data) => set((state) => ({ ...state, ...data })),
  clearData: () => set(() => ({})),
})

export const useStreamerFormState = create<StreamerFormStoreSliceType>()(
  (...args) => ({
    ...createStreamerFormSlice(...args),
  }),
)
