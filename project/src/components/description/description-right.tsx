import { DescriptionItem } from "./description-item"

type Props = {
    duration: string,
    studio: string,
    genre: string,
    sinopse: string
}

export const DescriptionRight = ({ duration, studio, genre, sinopse }: Props) => {
    return(
        <div className="flex-1 flex flex-col gap-10">
            <div className="flex flex-col gap-[9px]">
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

            <div>
                <DescriptionItem 
                    title="Sinopse:"
                    description={sinopse}
                    breakLine                
                />
            </div>
        </div>
    )
}