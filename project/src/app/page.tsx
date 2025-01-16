import { Button } from "@/components/ui/button"
import { CardArea } from "@/components/ui/card-area"
import { CardItem } from "@/components/ui/card-item"
import { FilterArea } from "@/components/ui/filter-area"
import { Hero } from "@/components/ui/hero"
import { LatestData } from "@/data/LatestData"
import { RecentData } from "@/data/RecentData"

const Page = () => {
    return(
        <div>
            <FilterArea />
            <Hero 
                title="Últimas novidades"
                description="O que você vai assistir hoje?"
                background="/one-punch-man.png"
                backgroundTitle="ONE PUNCH MAN TERÁ 3 TEMPORADA"
                backgroundDescription="Como relatado anteriormente, a franquia baseada no mangá escrito por ONE e ilustrado por Yusuke Murata, One Punch Man, divulgou um comunicado confirmando a produção de uma terceira temporada da adaptação para o anime […]"            
            />
            <main className="mt-[128px] mb-[64px]">
                <h2 className="mb-10 text-[30px] text-white font-semibold rubik">Últimas atualizações</h2>
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
            <section className="py-[64px] border-t border-t-[#151B26]">
                <h1 className="mb-10 text-[30px] text-white font-semibold rubik">Animes recentes</h1>
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