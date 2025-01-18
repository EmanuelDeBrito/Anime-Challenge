import { Button } from "@/components/ui/button"
import { CardArea } from "@/components/ui/card-area"
import { CardItem } from "@/components/ui/card-item"
import { FilterArea } from "@/components/ui/filter-area"
import { Hero } from "@/components/ui/hero"
import { LatestData } from "@/data/LatestData"
import { RecentData } from "@/data/RecentData"

const Page = () => {
    return(
        <div className="px-8 lg:px-0">
            <FilterArea />
            <Hero 
                title="Últimas novidades"
                description="O que você vai assistir hoje?"
                background="/one-punch-man.png"
                backgroundTitle="ONE PUNCH MAN TERÁ 3 TEMPORADA"
                backgroundDescription="Como relatado anteriormente, a franquia baseada no mangá escrito por ONE e ilustrado por Yusuke Murata, One Punch Man, divulgou um comunicado confirmando a produção de uma terceira temporada da adaptação para o anime […]"            
            />
            <main className="mt-[50px] mb-[64px] lg:mt-[128px]">
                <h2 className="mb-10 text-[18px] text-white font-semibold rubik md:text-[24px] lg:text-[30px]">Últimas atualizações</h2>
                <CardArea>
                    {RecentData.map((item, key) => (
                        <CardItem 
                            data={item}
                            key={key}
                        />
                    ))}
                </CardArea>
                <div className="flex justify-center mb-[64px]">
                    <Button
                        label="Ver mais"
                    />
                </div>
            </main>
            <section className="pt-[64px] border-t border-t-[#151B26] lg:py-[64px]">
                <h1 className="mb-10 text-[18px] text-white font-semibold rubik md:text-[24px] lg:text-[30px]">Animes recentes</h1>
                <CardArea>
                    {LatestData.map((item, key) => (
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