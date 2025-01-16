"use client"

type Props = {
    label: string,
    selected: string,
    setSelected: (newSelected: string) => void
}

export const FilterItem = ({ label, selected, setSelected }: Props) => {
    const handleClickButton = () => {
        setSelected(label);
    }

    return(
        <div 
        className=
        {`
            flex justify-center items-center px-[40px] h-[48px] text-[18px] border-2 border-[#151B26] rounded-3xl transition-all cursor-pointer poppins
            ${selected === label ? 'bg-[#151B26] text-white' : 'bg-transparent text-[#BFBFBF]'}
            hover:bg-[#151B26] hover:text-white
        `}
        onClick={handleClickButton}
        >
            {label}
        </div>
    )
}