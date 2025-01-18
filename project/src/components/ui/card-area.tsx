import { ReactNode } from "react"

type Props = {
    children: ReactNode
}

export const CardArea = ({ children }: Props) => {
    return(
        <div className="grid grid-cols-2 gap-y-12 gap-x-[17px] mb-10 md:grid-cols-4 lg:grid-cols-6">
            {children}
        </div>
    )
}