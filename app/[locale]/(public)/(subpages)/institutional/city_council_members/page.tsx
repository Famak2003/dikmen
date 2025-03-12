"use client"

import { useState } from "react"
import GridLayout from "../../../component/pagesComponent/GridLayout"
import City_Council_Member_Card from "../../../component/pagesComponent/City_Council_Member_Card"

const City_Council_Members = () => {
    const [currentDisplay, setCurrentDisplay] = useState('ctp')
    const handleClick = (value: string) => {
        setCurrentDisplay(value)
    }
    const data = {
        ctp: 
            [
                {
                    image: "/assets/img2.jpg",
                    title: "VISE_PRESIDENT",
                    name: "Fatma Ekdal",
                },
                {
                    image: "/assets/img3.jpg",
                    title: "VISE_PRESIDENT",
                    name: "Mehmet Özsezer",
                },
                {
                    image: "/assets/img3.jpg",
                    title: "CITY_COUNCIL_MEMBER",
                    name: "Ogün Dilaver",
                },
                {
                    image: "/assets/img1.jpg",
                    title: "CITY_COUNCIL_MEMBER",
                    name: "Emine Yamantürk",
                },
                {
                    image: "/assets/img3.jpg",
                    title: "CITY_COUNCIL_MEMBER",
                    name: "Salih Beşiktaş",
                },
                {
                    image: "/assets/img1.jpg",
                    title: "CITY_COUNCIL_MEMBER",
                    name: "Aygen Bardakko",
                },
                {
                    image: "/assets/img2.jpg",
                    title: "CITY_COUNCIL_MEMBER",
                    name: "Salih Kanal",
                },
                {
                    image: "/assets/img3.jpg",
                    title: "CITY_COUNCIL_MEMBER",
                    name: "Havva Koç",
                },
                {
                    image: "/assets/img1.jpg",
                    title: "CITY_COUNCIL_MEMBER",
                    name: "Okan Akmandor",
                },
                {
                    image: "",
                    title: "CITY_COUNCIL_MEMBER",
                    name: "Ömür Manga",
                },
            ],
        ubp: 
            [
                {
                    image: "",
                    title: "VISE_PRESIDENT",
                    name: "Fatma Ekdal",
                },
                {
                    image: "",
                    title: "VISE_PRESIDENT",
                    name: "Mehmet Özsezer",
                },
                {
                    image: "",
                    title: "CITY_COUNCIL_MEMBER",
                    name: "Ogün Dilaver",
                },
                {
                    image: "",
                    title: "CITY_COUNCIL_MEMBER",
                    name: "Emine Yamantürk",
                },
                {
                    image: "",
                    title: "CITY_COUNCIL_MEMBER",
                    name: "Salih Beşiktaş",
                },
                {
                    image: "",
                    title: "CITY_COUNCIL_MEMBER",
                    name: "Aygen Bardakko",
                },
                {
                    image: "",
                    title: "CITY_COUNCIL_MEMBER",
                    name: "Salih Kanal",
                },
                {
                    image: "",
                    title: "CITY_COUNCIL_MEMBER",
                    name: "Havva Koç",
                },
                {
                    image: "",
                    title: "CITY_COUNCIL_MEMBER",
                    name: "Okan Akmandor",
                },
                {
                    image: "",
                    title: "CITY_COUNCIL_MEMBER",
                    name: "Ömür Manga",
                },
            ]
    }

    return(
        <div className=" flex flex-col gap-8 w-full h-full bg-section_bg pt-5 subPageSection ">
            <div className=" flex items-center ">
                <div onClick={() => handleClick("ctp") } className={` cursor-pointer flex items-center justify-center text16 font-bold border-r h-[19px] w-[100px] ${currentDisplay === "ctp" ? "text-dark_yellow" : "text-gray-300 hover:text-faint_gray"} transition-all duration-300 `}>CTP</div>
                <div onClick={() => handleClick("ubp") } className={` cursor-pointer flex items-center justify-center text16 font-bold border-r h-[19px] w-[100px] ${currentDisplay === "ubp" ? "text-dark_yellow" : "text-gray-300 hover:text-faint_gray"} transition-all duration-300 `}>UBP</div>
            </div>
            <GridLayout data={data[currentDisplay as keyof typeof data]} Element={City_Council_Member_Card}  />
        </div>
    )
}


export default City_Council_Members