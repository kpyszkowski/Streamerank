import type { Dispatch, PropsWithChildren, SetStateAction } from "react";

export interface StreamerFormProps extends PropsWithChildren {
    modalSetter: Dispatch<SetStateAction<boolean>>
}