import { FilterArea } from "@/components/ui/filter-area"
import { Header } from "@/components/ui/header"
import { Hero } from "@/components/ui/hero"

const Page = () => {
    return(
        <div className="pb-7">
            <Header />
            <FilterArea />
            <Hero 
                title="Últimas novidades"
                description="O que você vai assistir hoje?"
                background="/one-punch-man.png"
                backgroundTitle="ONE PUNCH MAN TERÁ 3 TEMPORADA"
                backgroundDescription="Como relatado anteriormente, a franquia baseada no mangá escrito por ONE e ilustrado por Yusuke Murata, One Punch Man, divulgou um comunicado confirmando a produção de uma terceira temporada da adaptação para o anime […]"            
            />
        </div>
    )
}

export default Page