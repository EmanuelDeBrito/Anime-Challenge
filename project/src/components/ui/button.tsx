"use client"

type Props = {
    label: string,
    full?: boolean,
    onClick?: () => void
}

export const Button = ({ label, full, onClick }: Props) => {
    return(
        <div 
            className={`flex justify-center items-center h-[48px] bg-[#151B26] text-[18px] text-white rounded transition-all cursor-pointer hover:opacity-80 rubik ${full ? 'w-full' : 'w-[208px]'}`}
            onClick={onClick}
        >
            {label}
        </div>
    )
}