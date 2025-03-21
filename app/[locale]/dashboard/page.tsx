"use client"

import I18N from "@/i18n";
import { useGetInfoQuery } from "@/lib/api/dashboardApiSlice";
import { faBullhorn, faCake, faNewspaper, faProjectDiagram, faUserAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { JSX, useEffect } from "react";
import OverView from "./components/reuseable/Overview";


interface statType {
    title: string,
    amount: number,
    icon: JSX.Element
}

type statsType = statType[]

export default function Dashboard() {
    const {data, error, isLoading, refetch} = useGetInfoQuery()

    useEffect(() => {
        refetch()
    }, [])

    const projectsData = [
        {
            image: "/assets/projects.png",
            title: "Dikmen Belediyesi’nin kendi imkanlarıyla Ağırdağ köy meydanı",
            name: "Ağırdağ Muhtarlığı Ve Sağlık Ocağı Projesi",
        },
        {
            image: "/assets/projects.png",
            title: "Dikmen Belediyesi’nin kendi imkanlarıyla Ağırdağ köy meydanı",
            name: "Ağırdağ Muhtarlığı Ve Sağlık Ocağı Projesi",
        },
        {
            image: "/assets/projects.png",
            title: "Dikmen Belediyesi’nin kendi imkanlarıyla Ağırdağ köy meydanı",
            name: "Ağırdağ Muhtarlığı Ve Sağlık Ocağı Projesi",
        },
        {
            image: "/assets/projects.png",
            title: "Dikmen Belediyesi’nin kendi imkanlarıyla Ağırdağ köy meydanı",
            name: "Ağırdağ Muhtarlığı Ve Sağlık Ocağı Projesi",
        },
        {
            image: "/assets/projects.png",
            title: "Dikmen Belediyesi’nin kendi imkanlarıyla Ağırdağ köy meydanı",
            name: "Ağırdağ Muhtarlığı Ve Sağlık Ocağı Projesi",
        },
    ]

    const eventsData = [
        {
            image: "/assets/concert1.png",
            date: "25 ŞUBAT 2025",
            time: "20:00",
            writeup: "Gecede ilk olarak Dikmen Gençlik Merkezi Halk Dansları gruplarının halk dansları gösterileri yer alarak büyük ilgi gördü. Gecede kapanış konseri ile Grup SOS sahnede yer alarak birbirinden güzel seslendirdiği parçalar ile katılımcılara muhteşem bir gece yaşattı.",
            slug: "summer_concerts"
        },
        {
            image: "/assets/concert2.png",
            date: "203 Mart 2025",
            time: "20:00",
            writeup: "Gecede ilk olarak Dikmen Gençlik Merkezi Halk Dansları gruplarının halk dansları gösterileri yer alarak büyük ilgi gördü. Gecede kapanış konseri ile Grup SOS sahnede yer alarak birbirinden güzel seslendirdiği parçalar ile katılımcılara muhteşem bir gece yaşattı.",
            slug: "practice_concerts"
        },
        {
            image: "/assets/concert2.png",
            date: "203 Mart 2025",
            time: "20:00",
            writeup: "Gecede ilk olarak Dikmen Gençlik Merkezi Halk Dansları gruplarının halk dansları gösterileri yer alarak büyük ilgi gördü. Gecede kapanış konseri ile Grup SOS sahnede yer alarak birbirinden güzel seslendirdiği parçalar ile katılımcılara muhteşem bir gece yaşattı.",
            slug: "practice_concerts"
        },
        {
            image: "/assets/concert1.png",
            date: "25 ŞUBAT 2025",
            time: "20:00",
            writeup: "Gecede ilk olarak Dikmen Gençlik Merkezi Halk Dansları gruplarının halk dansları gösterileri yer alarak büyük ilgi gördü. Gecede kapanış konseri ile Grup SOS sahnede yer alarak birbirinden güzel seslendirdiği parçalar ile katılımcılara muhteşem bir gece yaşattı.",
            slug: "summer_concerts"
        },
        {
            image: "/assets/concert2.png",
            date: "203 Mart 2025",
            time: "20:00",
            writeup: "Gecede ilk olarak Dikmen Gençlik Merkezi Halk Dansları gruplarının halk dansları gösterileri yer alarak büyük ilgi gördü. Gecede kapanış konseri ile Grup SOS sahnede yer alarak birbirinden güzel seslendirdiği parçalar ile katılımcılara muhteşem bir gece yaşattı.",
            slug: "practice_concerts"
        },
    ]
   
    const numberStats: statsType = [
        {
            title: "USERS",
            amount: data ? data.userCount : 0,
            icon: <FontAwesomeIcon icon={faUserAlt} />
        },
        {
            title: "PROJECTS",
            amount: data ? data.projectCount : 0,
            icon: <FontAwesomeIcon icon={faProjectDiagram} />
        },
        {
            title: "NEWS",
            amount: data ? data.newsCount : 0,
            icon: <FontAwesomeIcon icon={faNewspaper} />
        },
        {
            title: "EVENTS",
            amount: data ? data.eventCount : 0,
            icon: <FontAwesomeIcon icon={faCake} />
        },
        {
            title: "ANNOUNCEMENT",
            amount: data ? data.announcementCount : 0,
            icon: <FontAwesomeIcon icon={faBullhorn} />
        },
    ]
    return (
        <div className=" flex flex-col gap-10 pb-10 ">
            <h1 className="  " >
                <I18N>DASHBOARD</I18N>
            </h1>
            <ul className=" grid grid-cols-2 lmobile:grid-cols-3 md:grid-cols-4 3xl:grid-cols-5 justify-between gap-2 ">
                {
                    numberStats.map((obj, idx) => {
                        const bg = idx === 1 ? "bg-red-700" : idx === 3 ? "bg-purple-700" : idx === 4 ? "bg-[#2a7dbd]" : "bg-navDark"
                        return(
                            <li key={idx} className=" relative flex flex-col xl:flex-row justify-between gap-2 w-full py-2 px-2 mobile:px-5 rounded-md shadow-custom_shad5 dark:shadow-custom_shad6 z-[1]  " >
                                <div className={` xl:translate-y-[-40%] flex justify-center items-center ${ bg } text-white text-[24px] h-[56px] w-full xl:w-[56px] rounded-md shadow-custom_shad5 dark:shadow-custom_shad6 `}>
                                    {obj.icon}
                                </div>
                                <div className=" flex flex-col justify-center items-end flex-1 ">
                                    <h2 className=" font-semibold text-[15px] w-full truncate " >
                                        <I18N>{obj.title}</I18N>
                                    </h2>
                                    <p className=" font-bold text-[25px] " >
                                        {obj.amount}
                                    </p>
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
            <div className=" grid grid-cols-1 md:grid-cols-2 gap-5 ">
                <OverView data={projectsData} title={"PROJECTS"} />
                <OverView data={eventsData} title={"EVENTS"} />
                <OverView data={projectsData} title={"NEWS"} />
                <OverView data={eventsData} title={"ANNOUNCEMENT"} />
            </div>
        </div>
    );
}
