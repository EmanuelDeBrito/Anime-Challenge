"use client"

import { NavItem } from "../nav/nav-item"
import { Logo } from "../ui/logo"

type Props = {
    open: boolean,
    closeModal: () => void
}

export const MenuMobile = ({ open, closeModal }: Props) => {
    return(
        <div 
            className={`
                flex-1 absolute top-0 right-0 left-0 bottom-0 w-full h-full p-6 ml-[1000px] bg-[#06090F] transition-all 
                ${open ? 'ml-0' : ''}
            `}
        >
            <div className="flex justify-between items-center mb-6">
                <Logo />

                <div className="text-2xl text-white font-bold cursor-pointer inter hover:opacity-90" onClick={closeModal}>
                    X
                </div>
            </div>
            <nav>
                <ul className="flex flex-col gap-2">
                    <NavItem 
                        label="Início"
                        href=""  
                        line                  
                    />
                    <NavItem 
                        label="Lista"
                        href=""  
                        line                  
                    />
                    <NavItem 
                        label="Gêneros"
                        href=""      
                        line              
                    />
                    <NavItem 
                        label="Novos Episódios"
                        href=""    
                        line                
                    />
                </ul>
            </nav>
        </div>
    )
}