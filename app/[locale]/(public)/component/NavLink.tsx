"use client"

import I18N from '@/i18n'
import { Link } from '@/i18n/routing'
import { Url } from 'next/dist/shared/lib/router/router'
import { usePathname } from 'next/navigation'

interface sidebarInfo {
    href?: Url,
    children?: React.ReactNode,
}

const NavLink = ({href, children}: sidebarInfo) => {
    const pathname = usePathname()
    const isActive = href === pathname

    return (
        <Link
            prefetch={true}
            href={href ?? "/"}
        >
            <li className={` ${isActive ? " border-b border-base_yellow " : ""}`} >
                {<I18N>children</I18N>}
            </li>
        </Link>
    )
}

export default NavLink