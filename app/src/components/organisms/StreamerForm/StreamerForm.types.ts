import type { Dispatch, PropsWithChildren, SetStateAction } from 'react'

export interface StreamerFormProps extends PropsWithChildren {
  modalStateSetter: Dispatch<SetStateAction<boolean>>
}
