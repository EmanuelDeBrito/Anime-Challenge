import { CardType } from "@/types/CardType"

type Props = {
    data: CardType
}

export const CardItem = ({ data }: Props) => {
    return(
        <div className="transtion-all hover:scale-105">
            <div 
                className="w-full h-[254px] rounded-xl bg-cover bg-center cursor-pointer overflow-hidden" 
                style={{ backgroundImage: 'url('+ data.image +')' }}
            >
                <div className="flex justify-center items-end w-full h-[256px] bg-gradient-to-t from-black/100 to-black/0">
                    {data.episode && 
                        <span className="mb-6 text-[18px] text-[#BFBFBF] inter">{data.episode}</span>
                    }
                </div>
            </div>
            <p className="mt-4 text-[18px] text-white text-center cursor-pointer rubik">{data.title}</p>
        </div>
    )
}