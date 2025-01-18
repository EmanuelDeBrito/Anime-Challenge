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
            <div className="flex items-center gap-8 overflow-hidden transition-all cursor-pointer hover:scale-105">
                <div className="hidden lg:block">
                    <Image 
                        src={avatar}
                        width={70}
                        height={70}
                        alt={name}
                        className="rounded-full"
                    />
                </div>

                <div className="block lg:hidden">
                    <Image 
                        src={avatar}
                        width={50}
                        height={50}
                        alt={name}
                        className="rounded-full"
                    />
                </div>

                <div className="flex flex-col gap-[14px] overflow-hidden md:w-[330px] lg:w-full">
                    <div className="text-[14px] text-white font-semibold rubik md:text-[16px] lg:text-[18px]">{name}</div>
                    <div className="text-[14px] text-[#BFBFBF] inter lg:text-[16px]">{opinion}</div>
                </div>
            </div>     

            {!noBar &&
                <div className="w-full h-[2px] my-6 bg-[#151B26]"></div>            
            }   
        </>
    )
}