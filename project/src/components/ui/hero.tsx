type Props = {
    title: string,
    description: string,
    background: string,
    backgroundTitle: string,
    backgroundDescription: string
}

export const Hero = ({ title, description, background, backgroundTitle, backgroundDescription }: Props) => {
    return(
        <section className="mt-[64px]">
            <div className="flex flex-col gap-2 mb-[40px]">
                <h1 className="text-[36px] text-white font-400 rubik">{title}</h1>
                <p className="text-[18px] text-[#BFBFBF] font-400 inter">{description}</p>
            </div>

            <div 
                className="w-full h-[400px] rounded overflow-hidden" 
                style={{ backgroundImage: 'url('+ background +')' }}
            >
                <div className="flex flex-col justify-end h-[400px] p-8 bg-black/50">
                    <h2 className="text-[36px] text-white font-semibold uppercase rubik">{backgroundTitle}</h2>
                    <p className="w-[571px] mt-2 text-[18px] text-[#BFBFBF] font-400 inter">Como relatado anteriormente, a franquia baseada no mangá escrito por ONE e ilustrado por Yusuke Murata, One Punch Man, divulgou um comunicado confirmando a produção de uma terceira temporada da adaptação para o anime […]</p>
                </div>
            </div>
        </section> 
    )
}