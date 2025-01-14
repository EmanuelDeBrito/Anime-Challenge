import Link from "next/link"

type Props = {
    label: string,
    href: string
}

export const NavItem = ({ label, href }: Props) => {
    return(
        <Link className="hover:opacity-90" href={href}>
            <li className="text-[18px] text-white font-500 inter">{label}</li>        
        </Link>
    )
}