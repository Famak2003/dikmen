"use client"

import { RootState } from '@/lib/store'
import { Tooltip } from 'antd'
import { Url } from 'next/dist/shared/lib/router/router'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useSelector } from 'react-redux'

interface sidebarInfo {
    href?: Url,
    childRoute?: boolean,
    children?: React.ReactNode,
}

const SidebarLink = ({href, childRoute = false, children}: sidebarInfo) => {
    const {isSidebarCollapsed} = useSelector((state: RootState) => state.dashboard)
    const pathname = usePathname()
    const isActive = href === pathname
    
    if(childRoute){
        return(
            <Link href={href ?? '/'} >
                <div className={` ${isActive ? "!bg-deep_red text-white shadow-custom2 " : ""} ${isSidebarCollapsed ? "" : "pl-[65px]"} subMenuPage-text `}>
                    {children}
                </div>
            </Link>
        )
    }
    return (
        <Link
            prefetch={true}
            href={href ?? "/"}
        >
            <div className={` flex gap-3 items-center h-[57px] ${isActive ? "!bg-deep_red text-white shadow-custom2 " : ""} ${isSidebarCollapsed ? "!pr-0 !pl-2" : "!px-4"}`} >
                { children }
            </div>
        </Link>
    )
}

export default SidebarLink