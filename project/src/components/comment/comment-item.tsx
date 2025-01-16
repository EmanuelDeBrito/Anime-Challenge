import Image from "next/image"

type Props = {
    avatar: string,
    name: string,
    opinion: string,
    noBar?: boolean
}

export const CommentItem = ({ avatar, name, opinion, noBar }: Props) => {
    return(
        <>
            <div className="flex items-center overflow-hidden transition-all cursor-pointer hover:scale-105">
                <Image 
                    src={avatar}
                    width={70}
                    height={70}
                    alt={name}
                    className="rounded-full mr-8"
                />

                <div className="flex flex-col gap-[14px]">
                    <div className="text-[18px] text-white font-semibold rubik">{name}</div>
                    <div className="text-[16px] text-[#BFBFBF] truncate inter">{opinion}</div>
                </div>
            </div>     

            {!noBar &&
                <div className="w-full h-[2px] my-6 bg-[#151B26]"></div>            
            }   
        </>
    )
}