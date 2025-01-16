import { MoreWatch } from "@/data/MoreWatch"
import { MoreWatchItem } from "./more-watch-item"

export const MoreWatchArea = () => {
    return(
        <div className="h-full">
            <div className="mb-[34px] text-[20px] text-white rubik">Mais assistidos</div>
            <div className="flex flex-col gap-[15px]">
                {MoreWatch.map((item, key) => (
                    <MoreWatchItem 
                        image={item.image}
                        name={item.name}
                        year={item.year}
                        key={key}                    
                    />
                ))}
            </div>
        </div>
    )
}