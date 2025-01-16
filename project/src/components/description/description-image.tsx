import Image from "next/image"

type Props = {
    image: string
}

export const DescriptionImage = ({ image }: Props) => {
    return(
        <Image 
            src={image}
            width={280}
            height={320}
            alt=""
            quality={100}
            className="rounded-[12px]"
        />
    )
}