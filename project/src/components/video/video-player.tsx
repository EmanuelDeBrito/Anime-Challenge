import Image from "next/image"

type Props = {
    name: string,
    episode: number,
    thumb: string
}

export const VideoPlayer = ({ name, episode, thumb }: Props) => {
    return(
        <div className="flex-1">
            <h1 className="mb-8 text-[30px] text-white font-semibold rubik">{name} - Episódio {episode}</h1>
            <div className="w-full h-[469px] bg-center bg-cover transition-all cursor-pointer hover:scale-105" style={{ backgroundImage: 'url('+ thumb +')' }}>
                <div className="flex justify-center items-center w-full h-full bg-[#151B26]/40">
                    <Image 
                        src={"/player.png"}
                        width={97}
                        height={62}
                        alt="Play"
                        quality={100}                    
                    />                
                </div>
            </div>
        </div>
    )
}