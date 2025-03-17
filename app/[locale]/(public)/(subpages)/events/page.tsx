"use client"

import { useState } from "react"
import Category from "../../component/reusables/Category"
import Image from "next/image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCalendarDays, faClock } from "@fortawesome/free-solid-svg-icons"
import { useRouter } from "@/i18n/routing"
import Button from "../../component/reusables/Button"

const eventsData = {
    all: [
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
    ],
    nearby: [
        {
            image: "/assets/concert1.png",
            date: "25 ŞUBAT 2025",
            time: "20:00",
            writeup: "Gecede ilk olarak Dikmen Gençlik Merkezi Halk Dansları gruplarının halk dansları gösterileri yer alarak büyük ilgi gördü. Gecede kapanış konseri ile Grup SOS sahnede yer alarak birbirinden güzel seslendirdiği parçalar ile katılımcılara muhteşem bir gece yaşattı.",
            slug: "summer_concerts"
        },
    ],
    finished: [
        {
            image: "/assets/concert2.png",
            date: "203 Mart 2025",
            time: "20:00",
            writeup: "Gecede ilk olarak Dikmen Gençlik Merkezi Halk Dansları gruplarının halk dansları gösterileri yer alarak büyük ilgi gördü. Gecede kapanış konseri ile Grup SOS sahnede yer alarak birbirinden güzel seslendirdiği parçalar ile katılımcılara muhteşem bir gece yaşattı.",
            slug: "practice_concerts"
        },
    ],
}
const Events = () => {
    const [currentDisplay, setCurrentDisplay] = useState("all")
    const router = useRouter()
    const handleClick = (value: string) => {
        setCurrentDisplay(value)
    }

    const handleSlug = (slug : string) => (
        router.push(`/events/${slug}`)
    )
    return(
        <div className=" flex flex-col gap-12 w-full h-full bg-white subPageSection" >
            <div className=" flex items-center  ">
                <Category handleClick={handleClick} state={currentDisplay} tag="all" title="ALL" />
                <Category handleClick={handleClick} state={currentDisplay} tag="nearby" title="NEARBY_EVENTS" />
                <Category handleClick={handleClick} state={currentDisplay} tag="finished" title="FINISHED_EVENTS" />
            </div>
            <div className=" flex flex-col gap-12 ">
                {
                    eventsData[currentDisplay as keyof typeof eventsData].map((obj, idx) => {
                        return(
                            <div key={idx} className=" flex flex-col gap-3 " >
                                <h1 className=" text18 text-dark_yellow font-bold " >{obj.date}</h1>
                                <hr className=" w-full mb-2 tab:mb-4 " />
                                <div className=" relative flex flex-col mobile:flex-row sm:flex-col md:flex-row gap-3 md:gap-8 w-full ">
                                    <figure className=" h-full min-h-[180px] lmobile:min-h-[226px] max-h-[290px] min-w-[160px] lmobile:min-w-[202px] w-full max-w-[260px] " >
                                        <Image 
                                            className=" w-full h-full "
                                            height={290}
                                            width={260}
                                            src={obj.image} 
                                            alt="events around you" 
                                        />
                                    </figure>
                                    <div className=" flex flex-col justify-between gap-3 ">
                                        <div className="flex flex-col justify-start gap-3">
                                            <h1 className=" text18 text-dark_yellow font-bold ">
                                                Etkinlik Başlığı
                                            </h1>
                                            <h2 className=" text-dark_yellow text font-bold " >
                                                KONSER
                                            </h2>
                                            <span className=" text-dark_yellow text "> <FontAwesomeIcon icon={faCalendarDays} /> {obj.date} </span>
                                            <span className=" text-dark_yellow text "> <FontAwesomeIcon icon={faClock} /> { obj.time }</span>
                                            <p className=" text16 font-semibold text-secondary_gray line-clamp-4 "> {obj.writeup} </p>
                                        </div>
                                        <Button handleClick={ () => handleSlug(obj.slug)} text="REVIEW" className=" px-5 py-1 " />
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Events