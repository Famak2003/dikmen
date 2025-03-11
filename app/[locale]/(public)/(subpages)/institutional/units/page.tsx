"use client"

import I18N from "@/i18n"
import Image from "next/image"
import GridLayout from "../../../component/pagesComponent/GridLayout"

const data = [
    {
        image: "/static/svg/press.svg",
        title: "PRESS_PUBLIC_RELATIONS"
    },
    {
        image: "/static/svg/public.svg",
        title: "PUBLIC_WORKS_AND_DEPARTMENT"
    },
    {
        image: "/static/svg/it.svg",
        title: "IT"
    },
    {
        image: "/static/svg/art_culture.svg",
        title: "CULTURE_AND_ART"
    },
    {
        image: "/static/svg/financial.svg",
        title: "FINANCIAL_AFFAIRS_BRANCH"
    },
    {
        image: "/static/svg/meter.svg",
        title: "METER_READING_AND_CONTROL"
    },
    {
        image: "/static/svg/secretariat.tif.svg",
        title: "SECRETARIAT"
    },
    {
        image: "/static/svg/water.svg",
        title: "WATER_AND_SEWAGE"
    },
    {
        image: "/static/svg/elderly.svg",
        title: "SPECIAL_SERVICE_FOR_ELDERLY"
    },
    {
        image: "/static/svg/police.svg",
        title: "POLICE_AND_INSPECTION_UNIT"
    },
    {
        image: "/static/svg/cleaning.svg",
        title: "CLEANING_WORKS"
    },
]

const Units = () => {
    return(
        <div className="flex w-full h-full bg-section_bg pt-5 md:pt-10">
            <GridLayout data={data} Element={UnitsCard}  />
        </div>
    )
}

const UnitsCard = ({image, title, name}: {image?: string, title?: string, name?: string}) => {
    return (
        <li className=" flex flex-col gap-3 p-3 bg-white max-w-[172px] w-full h-[150px] ">
            {
                image ? (
                    <figure className=" flex justify-center items-center ring-1 ring-section_bg w-full max-w-[153px] h-full max-h-[90px] " >
                        <Image
                            className=" object-cover h-fit w-fit"
                            src={image}
                            width={153}
                            height={90}
                            alt="profile image"
                        />
                    </figure>
                )
                : (
                    <div className=" w-full max-w-[153px] h-full max-h-[175px] bg-section_bg ">
                        
                    </div>
                )
            }
            <div className=" flex items-center justify-start ">
                <span className=" text-dark_gray text font-bold "> <I18N>{title ?? "NO_CONTENT"}</I18N> </span>
            </div>
        </li>
    )
}

export default Units