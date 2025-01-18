import { DescriptionItem } from "./description-item"

type Props = {
    duration: string,
    studio: string,
    genre: string,
    sinopse: string
}

export const DescriptionRight = ({ duration, studio, genre, sinopse }: Props) => {
    return(
        <div className="flex-1 flex flex-col gap-10 md:flex-row md:gap-8 lg:flex-col">
            <div className="flex flex-col gap-[9px] md:flex-1">
                <DescriptionItem 
                    title="Duração:"
                    description={duration}                
                />
                <DescriptionItem 
                    title="Estúdio:"
                    description={studio}                
                />
                <DescriptionItem 
                    title="Gênero:"
                    description={genre}                
                />
            </div>

            <div className="md:w-[300px] lg:w-full">
                <DescriptionItem 
                    title="Sinopse:"
                    description={sinopse}
                    breakLine                
                />
            </div>
        </div>
    )
}