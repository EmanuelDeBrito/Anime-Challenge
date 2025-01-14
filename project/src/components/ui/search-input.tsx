import { ChangeEvent } from "react"

type Props = {
    value: string,
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

export const SearchInput = ({ value, onChange }: Props) => {
    return(
        <div className="flex items-center w-[292px] ml-[72px] bg-[#151B26] rounded-3xl">
            <input 
                className="px-6 py-2 bg-transparent text-[18px] text-white font-500 outline-none border-none inter"   
                placeholder="Buscar"
                value={value}
                onChange={onChange}         
            />
        </div>
    )
}