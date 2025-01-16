import { CommentItem } from "@/components/comment/comment-item"
import { DescriptionImage } from "@/components/description/description-image"
import { DescriptionRight } from "@/components/description/description-right"
import { CardItem } from "@/components/ui/card-item"
import { MoreWatchArea } from "@/components/video/more-watch-area"
import { VideoPlayer } from "@/components/video/video-player"
import { RelatedData } from "@/data/ReletadData"
import Comment_ from "postcss/lib/comment"

const Page = () => {
    return(
        <div>
            <main className="flex items-end gap-6 mt-[104px]">
                <VideoPlayer
                    name="Darling in the Franxx"
                    episode={1}
                    thumb="/video/img.png"
                />
                <MoreWatchArea />
            </main>
            <section className="flex items-center gap-10 mt-[112px]">
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
            <section className="mt-14">
                <h1 className="mb-[40px] text-[30px] text-white font-semibold rubik">Comentários</h1>
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
            </section>
            <section className="mt-[56px]">
                <div className="w-full h-[2px] mb-[56px] bg-[#151B26]"></div> 
                <h1 className="mb-[40px] text-[30px] text-white font-semibold rubik">Relacionados</h1>
                <div className="grid grid-cols-6 gap-[18px] mb-[56px]">
                    {RelatedData.map((item, key) => (
                        <CardItem 
                            data={item}
                            key={key}                        
                        />
                    ))}
                </div>
            </section>
        </div>
    )
}

export default Page