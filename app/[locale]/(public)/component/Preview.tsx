"use client"

import I18N from "@/i18n"
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useTranslations } from "next-intl"
import Image from "next/image"
import { useMemo, useState } from "react"

const previewData = [
    {
        title: "Kupa heyecanını başkanla paylaştılar",
        id: "news"
    },
    {
        title: "11 Meşale Festivali Sona Erdi…",
        id: "news"
    },
    {
        title: "Kupa heyecanını başkanla paylaştılar",
        id: "news"
    },
    {
        title: "11 Meşale Festivali Sona Erdi…",
        id: "news"
    },
    {
        title: "Kupa heyecanını başkanla paylaştılar",
        id: "news"
    },
    {
        title: "ehgvejbejr ekrfukeujr",
        id: "announcement"
    },
    {
        title: "11 Meşale Festivali Sona Erdi…",
        id: "announcement"
    },
    {
        title: "Kupa heyecanını başkanla paylaştılar",
        id: "announcement"
    },
    {
        title: "11 Meşale Festivali Sona Erdi…",
        id: "announcement"
    },
    {
        title: "yyyyyyyyy",
        id: "announcement"
    },
    {
        title: "Kupa heyecanını başkanla paylaştılar",
        id: "events"
    },
    {
        title: "11 Meşale Festivali Sona Erdi…",
        id: "events"
    },
    {
        title: "Sudikii",
        id: "events"
    },
    {
        title: "11 Meşale Festivali Sona Erdi…",
        id: "events"
    },
    {
        title: "Kupa heyecanını başkanla paylaştılar",
        id: "events"
    },
    {
        title: "Kupa heyecanını başkanla paylaştılar",
        id: "projects"
    },
    {
        title: "Yoooooo",
        id: "projects"
    },
    {
        title: "Kupa heyecanını başkanla paylaştılar",
        id: "projects"
    },
    {
        title: "11 Meşale Festivali Sona Erdi…",
        id: "projects"
    },
    {
        title: "Kupa heyecanını başkanla paylaştılar",
        id: "projects"
    },
]

const filterPreview = (data: any[], id: string) => {
    const newData = data.filter((item) => item.id === id )
    return newData
}

const SMALLNEWS = '/assets/smallNews.png'

const Preview = () => {
    const t = useTranslations()
    const [currentDisplay, setCurrentDisplay] = useState("news")
    const displayData = useMemo(() => filterPreview(previewData, currentDisplay), [currentDisplay])



    const eventsData = [
        {
            image: "/assets/news.png", 
            title: "NEWS",
            id: "news"
        },
        {
            image: "/assets/notification.png", 
            title: "ANNOUNCEMENT",
            id: "announcement"
        },
        {
            image: "/assets/events.png", 
            title: "EVENTS", 
            id: "events"
        },
        {
            image: "/assets/project.png", 
            title: "PROJECTS",
            id: "projects"
        },
    ]
    
    return(
        <div className=" flex flex-col tab:flex-row gap-4 tab:gap-0 bg-section_bg section min-h-[475px] mt-[140px] tab:mt-[180px] lg:mt-[150px] " >
            <div className=" flex flex-col w-full tab:w-[40%] h-full text-gray-500 ">
                <ul className=" flex justify-start items-center gap-2 mobile:gap-4 h-[73px] w-full bg-white px-3 tab:pr-3 xl:pr-10 " >
                    {
                        eventsData.map((obj, idx) => {
                            return(
                                <li 
                                    className={` flex flex-col justify-center items-center gap-1 h-full w-1/4 px-3 ${currentDisplay === obj.id ? "border-b-2 border-base_yellow" : ""} `}
                                    onClick={() => (setCurrentDisplay(obj.id))}
                                >
                                    <figure className=" relative h-[20px] mobile:h-[24px] aspect-square ">
                                        <Image src={obj.image} fill alt="events" />
                                    </figure>
                                    <p className=" text-[13px] font-semibold ">
                                        <I18N>{obj.title}</I18N>
                                    </p>
                                </li>
                            )
                        })
                    }
                </ul>
                <ul className=" flex flex-col px-4 h-[327px] " >
                    {
                        displayData.map((obj, idx) => {
                            return(
                                <li className=" flex justify-start items-center gap-2 h-1/5 border-b py-3 " >
                                    <div className=" flex justify-center items-center h-[30px] w-fit p-2 border-r  ">
                                        <figure className=" relative h-[15px] w-[20px] ">
                                            <Image src={SMALLNEWS} fill alt="events" />
                                        </figure>
                                    </div>
                                    <p className=" text16 " >
                                        {obj.title}
                                    </p>
                                </li>
                            )
                        })
                    }
                </ul>
                <button className=" rounded-md bg-base_yellow w-[160px] h-[35px] mt-4 self-center tab:self-start tab:ml-[65px] text " >
                    <I18N>SEE_ALL</I18N>
                </button>
            </div>
            <div className=" flex flex-col h-[475px] tab:flex-1" >
                <div className=" relative h-[402px] w-full " >
                    <figure className=" relative h-full w-full ">
                        <Image className=" object-cover " src={"/assets/image9.png"} fill alt="events" />
                    </figure>
                    <p className=" absolute bottom-0 flex justify-start items-center h-[73px] px-4 w-full bg-base_yellow opacity-70 " >
                        11 Meşale Festivali Sona Erdi…
                    </p> 
                </div>
                <div className=" flex items-center justify-between flex-1 h-[73px] border-t border-body_bg ">
                    <div className=" flex justify-center items-center h-[100%] w-[60px] bg-base_yellow "><FontAwesomeIcon className=" text-white " icon={faChevronLeft} /></div>
                    <div className=" flex justify-between gap-2 items-center py-2 w-full " >
                        <ul className=" flex justify-between items-center text-text_light_gray w-[75%] px-8 h-full " >
                            <li className="  " >
                                1
                            </li>
                            <li>
                                2
                            </li>
                            <li>
                                3
                            </li>
                            <li>
                                4
                            </li>
                            <li>
                                5
                            </li>
                            <li>
                                6
                            </li>
                            <li>
                                7
                            </li>
                            <li>
                                8
                            </li>
                            <li>
                                9
                            </li>
                            <li>
                                10
                            </li>
                        </ul>
                        <div className=" flex justify-center items-center h-full w-[25%] px- border-l ">
                            <I18N>
                                ALL_NEWS
                            </I18N>
                        </div>
                    </div>
                    <div className=" flex justify-center items-center h-full w-[60px] bg-base_yellow "><FontAwesomeIcon className=" text-white " icon={faChevronRight} /></div>
                </div>
            </div>
        </div>
    )
}

export default Preview