"use client"

import GridLayout from "../../../component/pagesComponent/GridLayout"
import UnitsCard from "../../../component/pagesComponent/UnitsCard"

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

export default Units