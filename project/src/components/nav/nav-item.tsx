import Link from "next/link"

type Props = {
    label: string,
    href: string,
    line?: boolean
}

export const NavItem = ({ label, href, line }: Props) => {
    return(
        <Link className={`block hover:opacity-90 ${line ? 'py-5 border-b-2 border-[#151B26]' : ''}`} href={href}>
            <li className="text-[18px] text-white font-500 inter">{label}</li>        
        </Link>
    )
}