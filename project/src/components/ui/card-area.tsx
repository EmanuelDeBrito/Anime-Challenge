import { ReactNode } from "react"

type Props = {
    children: ReactNode
}

export const CardArea = ({ children }: Props) => {
    return(
        <div className="grid grid-cols-6 gap-y-12 gap-x-[17px] mb-10">
            {children}
        </div>
    )
}