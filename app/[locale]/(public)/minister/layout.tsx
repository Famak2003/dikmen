"use client"

import I18N from "@/i18n"
import { Link } from "@/i18n/routing"
import { faAngleLeft, faAngleRight, faBars, faPaperPlane } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Button, Input } from "antd"
import { usePathname } from "next/navigation"
import Socials from "../component/reusables/Socials"
import Sidebar from "../component/pagesComponent/Sidebar"
import { useRef, useState } from "react"
import { useOutsideClick } from "@/hooks/useOutsideClick"

const MinisterLayout = ({children}: {children: React.ReactNode}) => {
    const pathname = usePathname()
    const sidebarRef = useRef<HTMLDivElement | null>(null);
    const btnRef = useRef<HTMLDivElement | null >(null);
    const [ isPagesSidebarOpen, setIsPagesSidebarOpen] = useState(false)
    const parentRouteName = pathname.split("/").filter(Boolean)[1].toLocaleUpperCase()
    const parentSubpages = [
        {
            title: "RESUME",
            link: "/minister/resume"
        },
        {
            title: "PRESIDENT_MESSAGE",
            link: "/minister/president_message"
        },
        {
            title: "MESSAGE_TO_PRESIDENT",
            link: "/minister/message_to_president"
        },
    ]

    const handleHideSidebar = () => {
        return setIsPagesSidebarOpen(false)
    }

    useOutsideClick({ref: sidebarRef, btnRef, callback: handleHideSidebar})


    return(
        <div className=" relative flex justify-center h-full min-h-[100dvh] w-screen bg-white pt-14">
            <div 
                ref={btnRef}
                className={` absolute top-3 left-4 z-[999] sm:hidden flex justify-center items-center text-dark_yellow bg-white hover:bg-section_bg transition-all duration-300 rounded-sm h-[30px] w-[30px] `}
                onClick={() => setIsPagesSidebarOpen(!isPagesSidebarOpen)}
            >
                <FontAwesomeIcon icon={faBars} />
            </div>
            <div className=" relative section flex gap-4 sm:gap-6 tab:gap-10 h-full w-full mb-10 ">
                <Sidebar isPagesSidebarOpen={isPagesSidebarOpen} ref={sidebarRef} />
                {children}
            </div>
        </div>
    )
}

export default MinisterLayout