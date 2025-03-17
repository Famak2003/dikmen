"use client"

import I18N from "@/i18n"
import Image from "next/image"
import { notFound, useParams } from "next/navigation"
import Button from "../../../component/reusables/Button"
import { useRouter } from "@/i18n/routing"

const EventDetails = () => {
    const router = useRouter()
    const DIKMENLOGO =  '/static/svg/floatingLogo.svg'
    const { event } = useParams();

    console.log(event)

    const eventDetailsData = {
        summer_concerts: {
            date: "Şubat 25, 2025",
            time: "20:00",
            writeup: "Gecede ilk olarak Dikmen Gençlik Merkezi Halk Dansları gruplarının halk dansları gösterileri yer alarak büyük ilgi gördü. Gecede kapanış konseri ile Grup SOS sahnede yer alarak birbirinden güzel seslendirdiği parçalar ile katılımcılara muhteşem bir gece yaşattı.",
            image: '/assets/summer.png'
        },
        practice_concerts: {
            date: "Şubat 25, 2025",
            time: "20:00",
            writeup: "Gecede ilk olarak Dikmen Gençlik Merkezi Halk Dansları gruplarının halk dansları gösterileri yer alarak büyük ilgi gördü. Gecede kapanış konseri ile Grup SOS sahnede yer alarak birbirinden güzel seslendirdiği parçalar ile katılımcılara muhteşem bir gece yaşattı.",
            image: '/assets/practice.jpg'
        },
    }

    const eventInfo = eventDetailsData[event as keyof typeof eventDetailsData ]

    if (!eventInfo){
        return notFound()
    }
    return(
        <div className=" subPageSection richTextSection " >
            <h1 className=" text-dark_yellow text16 " > {eventInfo.date} | {eventInfo.time} </h1>
            <p className=" text-secondary_gray leading-6 " > {eventInfo.writeup} </p>
            <div className=" relative h-fit w-full ">
                <figure className=" w-full max-w-[840px] h-full max-h-[830px] " >
                    <Image
                        className=" w-full h-full object-fill "
                        src={eventInfo.image} 
                        height={830}
                        width={840}
                        alt="Detailed event image"
                    />
                </figure>
                {/* <div className=" absolute flex flex-col justify-center items-center top-[10px] smobile:top-[30px] left-[10px] mobile:left-[30px] md:left-[50px] uppercase font-medium mobile:leading-[50px] md:leading-[90px] text-[25px] mobile:text-[40px] md:text-[65px] tab:text-[80px] California-font text-white rotate-[-6deg] "> */}
                <div className=" absolute flex flex-col justify-center items-center top-[5%] left-[5%] uppercase font-medium mobile:leading-[50px] md:leading-[90px] text-[25px] mobile:text-[40px] md:text-[65px] tab:text-[80px] California-font text-white rotate-[-6deg] ">
                    <span>
                        <I18N>SUMMER_CONCERTS</I18N>
                    </span>
                    <span>
                        <I18N>STARTING</I18N>
                    </span>
                </div>
                <div className=" absolute bottom-0 md:bottom-5 left-[10px] mobile:left-[30px] tab:left-[50px] max-w-[50px] tab:max-w-[100px] w-screen h-[100px]" >
                    <Image className=" object-contain " src={DIKMENLOGO} priority fill alt="logo" />
                </div>
            </div>
            <Button handleClick={() => router.push("/events")} text="ALL_EVENTS" className=" !px-3 !py-2 " />
        </div>
    )
}

export default EventDetails