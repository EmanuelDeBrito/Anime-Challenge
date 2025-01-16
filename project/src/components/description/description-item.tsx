type Props = {
    title: string,
    description: string,
    breakLine?: boolean
}

export const DescriptionItem = ({ title, description, breakLine }: Props) => {
    return(
        <div className={`${breakLine ? 'flex flex-col gap-4': 'flex items-center gap-4'}`}>
            <div className="text-[16px] text-white font-semibold rubik">{title}</div>
            <span className="text-[16px] text-[#BFBFBF] inter">{description}</span>
        </div>  
    )
}