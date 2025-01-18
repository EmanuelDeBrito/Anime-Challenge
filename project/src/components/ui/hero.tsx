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
                <h1 className="text-[24px] text-white font-400 rubik lg:text-[36px]">{title}</h1>
                <p className="text-[14px] text-[#BFBFBF] font-400 inter lg:text-[18px]">{description}</p>
            </div>

            <div 
                className="w-full h-[180px] rounded overflow-hidden bg-center bg-cover transition-all cursor-pointer hover:scale-105 md:h-[300px] lg:h-[400px]" 
                style={{ backgroundImage: 'url('+ background +')' }}
            >
                <div className="flex flex-col justify-end h-full p-8 bg-gradient-to-t from-black/100 to-black/30">
                    <h2 className="text-[14px] text-white font-semibold uppercase rubik md:text-[24px] lg:text-[36px]">{backgroundTitle}</h2>
                    <p className="w-[300px] mt-2 text-[12px] text-[#BFBFBF] font-400 inter md:text-[14px] lg:text-[18px] lg:w-[571px]">{backgroundDescription}</p>
                </div>
            </div>
        </section> 
    )
}