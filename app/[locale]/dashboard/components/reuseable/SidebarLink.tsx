"use client"

import I18N from '@/i18n'
import { Link } from '@/i18n/routing'
import { useLogoutMutation } from '@/lib/api/authApiSlice'
import { RootState } from '@/lib/store'
import { Url } from 'next/dist/shared/lib/router/router'
import { usePathname } from 'next/navigation'
import { useEffect } from 'react'
import toast from 'react-hot-toast'
import { useSelector } from 'react-redux'

interface sidebarInfo {
    href?: Url,
    childRoute?: boolean,
    children?: React.ReactNode,
    isLogout?: boolean
}

const SidebarLink = ({href, childRoute = false, isLogout = false, children}: sidebarInfo) => {
    const [logout, {isLoading, isError, isSuccess, data, error}] = useLogoutMutation(undefined)
    const {isSidebarCollapsed} = useSelector((state: RootState) => state.dashboard)
    const pathname = usePathname()
    const isActive = href === pathname

    useEffect(() => {
        if(isSuccess){
            toast.success(<I18N>LOGOUT_SUCCESSFUL</I18N>);
        }
        if(isError){
            toast.error(<I18N>SOMETHING_WENT_WRONG</I18N>)
        }
    }, [isSuccess, isError])

    const handleLogout =() => {
        console.log("logout clicked");
        logout(undefined)
    }
    
    if(childRoute){
        return(
            <Link href={href ?? '/'} >
                <div className={` ${isActive ? "!bg-deep_red text-white shadow-custom2 " : ""} ${isSidebarCollapsed ? "" : "pl-[65px]"} subMenuPage-text `}>
                    {children}
                </div>
            </Link>
        )
    }
    if(isLogout){
        return(
            <div onClick={handleLogout} className={` flex gap-3 items-center h-[57px] ${isActive ? "!bg-deep_red text-white shadow-custom2 " : ""} ${isSidebarCollapsed ? "!pr-0 !pl-2" : "!px-4"}`} >
                { children }
            </div>
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