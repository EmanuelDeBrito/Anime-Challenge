import Image from "next/image"

type Props = {
    image: string,
    name: string,
    year: number
}

export const MoreWatchItem = ({ image, name, year }: Props) => {
    return(
        <div className="flex items-center transition-all cursor-pointer hover:scale-105">
            <Image
                src={image} 
                width={100}
                height={107}
                alt={name}  
                quality={100}     
            />
            <div className="w-[190px] h-[107px] p-4 bg-[#151B26] overflow-hidden">
                <div className="mb-3 text-[18px] text-white font-semibold truncate rubik">{name}</div>
                <div className="text-[16px] text-[#BFBFBF] inter">{year}</div>
            </div>
        </div>
    )
}