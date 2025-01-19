"use client"

import { useState } from "react"
import { NavItem } from "../nav/nav-item"
import { Logo } from "./logo"
import { SearchInput } from "./search-input"
import Image from "next/image"
import { MenuMobile } from "../mobile/menu-mobile"

export const Header = () => {
    const [search, setSearch] = useState('');
    const [openModal, setOpenModal] = useState<boolean>(false);

    const handleOpenMobileMenu = () => {
        setOpenModal(true);
    }

    return(
        <header className="flex items-center pt-10 px-8 lg:px-0">
            <div className="flex-1">
                <Logo />
            </div>

            <nav className="hidden lg:flex lg:items-center">
                <ul className="flex items-center gap-[50px]">
                    <NavItem label="Inicio" href="" />
                    <NavItem label="Lista" href="" />
                    <NavItem label="Gêneros" href="" />
                    <NavItem label="Novos Episódios" href="" />
                </ul>
            </nav>

            <div className="hidden lg:block">
                <SearchInput 
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                />
            </div>

            <div className="flex items-center gap-10 lg:hidden">
                <div className="cursor-pointer">
                    <Image 
                        src={"/nav/fi_search.svg"}
                        width={40}
                        height={40}
                        alt="Search"
                        quality={100}                    
                    />
                </div>

                <div className="cursor-pointer" onClick={handleOpenMobileMenu}>
                    <Image 
                        src={"/nav/menu-align-justify.svg"}
                        width={40}
                        height={40}
                        alt="Search"
                        quality={100}                    
                    />
                </div>
            </div>

            <MenuMobile 
                open={openModal}
                closeModal={() => setOpenModal(false)}
            />
        </header>
    )
}