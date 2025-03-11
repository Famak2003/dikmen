"use client"

import { usePathname } from "next/navigation"
import Sidebar from "../component/pagesComponent/Sidebar"
import { useRef, useState } from "react"
import { useOutsideClick } from "@/hooks/useOutsideClick"
import SidebarBTN from "../component/SidebarBTN"
import I18N from "@/i18n"

const MinisterLayout = ({children}: {children: React.ReactNode}) => {
    const pathname = usePathname()
    const [ isPagesSidebarOpen, setIsPagesSidebarOpen] = useState(false)
    const sidebarRef = useRef<HTMLDivElement | null>(null);
    const btnRef = useRef<HTMLDivElement | null >(null);
    const parentRouteName = pathname.split("/").filter(Boolean)[1].toLocaleUpperCase()
    const getPageName = pathname.split("/").filter(Boolean)
    const pageName = getPageName[getPageName.length - 1].toUpperCase()

    const ministerSubpages = [
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

    const InstitutionalSubpages = [
        {
            title: "CITY_COUNCIL_MEMBERS",
            link: "/institutional/city_council_members"
        },
        {
            title: "VISION_AND_MISSION",
            link: "/institutional/vision_and_mission"
        },
        {
            title: "UNITS",
            link: "/institutional/units"
        },
        {
            title: "OUR_HISTORY",
            link: "/institutional/our_history"
        },
        {
            title: "QUALITY_AND_SERVICE",
            link: "/institutional/quality_and_service"
        },
        {
            title: "PROJECTS",
            link: "/institutional/projects"
        },
    ]

    const Subpages = (page: string) => {
        switch (page.toLowerCase()) {
            case "minister":
                return ministerSubpages
            case "institutional":
                return InstitutionalSubpages
            default:
                return [
                    {
                        title: "NO_CONTENT",
                        link: "#"
                    }
                ]
        }
    }

    const subpageData = Subpages(parentRouteName)

    const handleHideSidebar = () => {
        return setIsPagesSidebarOpen(false)
    }

    useOutsideClick({ref: sidebarRef, btnRef, callback: handleHideSidebar})


    return(
        <div className=" relative flex justify-center h-full min-h-[100dvh] w-screen bg-white pt-14">
            <SidebarBTN ref={btnRef} isPagesSidebarOpen={isPagesSidebarOpen} setIsPagesSidebarOpen={setIsPagesSidebarOpen} />
            <div className=" relative section flex gap-4 sm:gap-6 tab:gap-10 h-full w-full mb-10 ">
                <Sidebar subpages={subpageData} isPagesSidebarOpen={isPagesSidebarOpen} ref={sidebarRef} />
                <section className=" flex flex-col flex-1  ">
                    <div className=" relative h-[40px] md:h-[60px] border-b-[1px] ">
                        <h1 className=" text-[18px] font-bold capitalize text-dark_yellow"><I18N>{pageName}</I18N></h1>
                        <hr className=" absolute bottom-0 translate-y-[70%] border-0 bg-base_yellow h-[3px] w-[20%] " />
                    </div>
                    {children}
                </section>
            </div>  
        </div>
    )
}

export default MinisterLayout