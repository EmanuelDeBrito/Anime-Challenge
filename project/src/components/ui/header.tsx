"use client"

import { useState } from "react"
import { NavItem } from "../nav/nav-item"
import { Logo } from "./logo"
import { SearchInput } from "./search-input"

export const Header = () => {
    const [search, setSearch] = useState('');

    return(
        <header className="flex items-center pt-10">
            <div className="flex-1">
                <Logo />
            </div>

            <nav className="flex items-center">
                <ul className="flex items-center gap-[50px]">
                    <NavItem label="Inicio" href="" />
                    <NavItem label="Lista" href="" />
                    <NavItem label="Gêneros" href="" />
                    <NavItem label="Novos Episódios" href="" />
                </ul>
            </nav>

            <SearchInput 
                value={search}
                onChange={e => setSearch(e.target.value)}
            />
        </header>
    )
}