import Image from "next/image"

type Props = {
    name: string,
    episode: number,
    thumb: string
}

export const VideoPlayer = ({ name, episode, thumb }: Props) => {
    return(
        <div className="flex-1">
            <h1 className="mb-8 text-[18px] text-white font-semibold rubik md:text-[24px] lg:text-[30px]">{name} - Episódio {episode}</h1>
            <div className="w-full h-[180px] bg-center bg-cover transition-all cursor-pointer hover:scale-105 sm:h-[220px] md:h-[300px] lg:h-[469px]" style={{ backgroundImage: 'url('+ thumb +')' }}>
                <div className="flex justify-center items-center w-full h-full bg-[#151B26]/40">
                    <div className="hidden lg:block">
                        <Image 
                            src={"/player.png"}
                            width={97}
                            height={62}
                            alt="Play"
                            quality={100}                    
                        />
                    </div>

                    <div className="hidden md:block lg:hidden">
                        <Image 
                            src={"/player.png"}
                            width={74}
                            height={40}
                            alt="Play"
                            quality={100}                    
                        />
                    </div>

                    <div className="block md:hidden">
                        <Image 
                            src={"/player.png"}
                            width={34}
                            height={23}
                            alt="Play"
                            quality={100}                    
                        />
                    </div>                
                </div>
            </div>
        </div>
    )
}