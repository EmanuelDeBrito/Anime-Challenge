"use client"

type Props = {
    label: string,
    onClick?: () => void
}

export const Button = ({ label, onClick }: Props) => {
    return(
        <div 
            className="flex justify-center items-center w-[208px] h-[48px] bg-[#151B26] text-[18px] text-white rounded transition-all cursor-pointer hover:opacity-80 rubik"
            onClick={onClick}
        >
            {label}
        </div>
    )
}