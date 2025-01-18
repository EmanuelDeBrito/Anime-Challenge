import { CommentItem } from "@/components/comment/comment-item"
import { DescriptionImage } from "@/components/description/description-image"
import { DescriptionRight } from "@/components/description/description-right"
import { Button } from "@/components/ui/button"
import { CardArea } from "@/components/ui/card-area"
import { CardItem } from "@/components/ui/card-item"
import { MoreWatchArea } from "@/components/video/more-watch-area"
import { VideoPlayer } from "@/components/video/video-player"
import { RelatedData } from "@/data/ReletadData"

const Page = () => {
    return(
        <div className="px-8 lg:px-0">
            <main className="flex items-end gap-6 mt-[104px]">
                <VideoPlayer
                    name="Darling in the Franxx"
                    episode={1}
                    thumb="/video/img.png"
                />
                <MoreWatchArea />
            </main>
            <section className="flex items-center gap-10 mt-6 md:mt-[112px]">
                <DescriptionImage 
                    image="/img-darling-in-franxx.png"                
                />
                <DescriptionRight 
                    duration="24 min"
                    studio="Trigger"
                    genre="Drama, Ficção científica, Romance"
                    sinopse='Darling in the Franxx se passa em um futuro distópico e pós-apocalíptico onde os remanescentes da civilização humana abandonaram a superfície do planeta. Adultos e crianças existem em ambientes contrastantes entre si. Os adultos vivem em cidades tecnológicas (latifúndios) chamados de "plantações" (plantations). As crianças são chamadas de "parasitas", sendo elas destituídos de individualidade, e educadas apenas para pilotarem Franxxs em pares (um menino e uma menina) para defender a humanidade.'               
                />
            </section>
            <section className="flex flex-col mt-14 md:flex-row lg:flex-col">
                <h1 className="mb-[40px] text-[18px] text-white font-semibold rubik md:text-[20px] md:flex-1 lg:text-[30px]">Comentários</h1>
                <div>
                    <CommentItem 
                        avatar="/profile/profile-pic.png" 
                        name="Bruno San"
                        opinion="Primeira vez assistindo e já estou adorando :)"             
                    />
                    <CommentItem 
                        avatar="/profile/profile-pic(1).png" 
                        name="Ana Júlia"
                        opinion="Episodio muito top, já voltou muito bom!"   
                        noBar          
                    />

                    <div className="hidden mt-10 md:block lg:hidden">
                        <Button 
                            label="Ver mais"
                        />
                    </div>
                </div>

                <div className="mt-10 md:hidden">
                    <Button 
                        label="Ver mais"  
                        full                  
                    />
                </div>
            </section>
            <section className="mt-[56px]">
                <div className="w-full h-[2px] mb-[56px] bg-[#151B26]"></div> 
                <h1 className="mb-[40px] text-[18px] text-white font-semibold rubik md:text-[20px] lg:text-[30px]">Relacionados</h1>
                <CardArea>
                    {RelatedData.map((item, key) => (
                        <CardItem 
                            data={item}
                            key={key}                        
                        />
                    ))}
                </CardArea>
            </section>
        </div>
    )
}

export default Page