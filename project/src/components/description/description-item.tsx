type Props = {
    title: string,
    description: string,
    breakLine?: boolean
}

export const DescriptionItem = ({ title, description, breakLine }: Props) => {
    return(
        <div className={`${breakLine ? 'flex flex-col gap-4': 'flex items-center gap-4'}`}>
            <div className="text-[14px] text-white font-semibold rubik lg:text-[16px]">{title}</div>
            <span className="text-[14px] text-[#BFBFBF] inter lg:text-[16px]">{description}</span>
        </div>  
    )
}