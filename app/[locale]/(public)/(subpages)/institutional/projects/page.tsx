"use client"

import I18N from "@/i18n"
import { useState } from "react"
import ProjectsCard from "../../../component/pagesComponent/ProjectCard"

const Projects = () => {
    const [currentDisplay, setCurrentDisplay] = useState('all')

    const handleClick = (value: string) => {
        setCurrentDisplay(value)
    }
    const data = {
        all: 
            [
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
            ],
        ongoing: 
            [
                {
                    image: "/assets/img3.jpg",
                    title: "Dikmen Belediyesi’nin kendi imkanlarıyla Ağırdağ köy meydanı",
                    name: "Ağırdağ Muhtarlığı Ve Sağlık Ocağı Projesi",
                },
                {
                    image: "/assets/img3.jpg",
                    title: "Dikmen Belediyesi’nin kendi imkanlarıyla Ağırdağ köy meydanı",
                    name: "Ağırdağ Muhtarlığı Ve Sağlık Ocağı Projesi",
                },
                {
                    image: "/assets/img3.jpg",
                    title: "Dikmen Belediyesi’nin kendi imkanlarıyla Ağırdağ köy meydanı",
                    name: "Ağırdağ Muhtarlığı Ve Sağlık Ocağı Projesi",
                },
                {
                    image: "/assets/img3.jpg",
                    title: "Dikmen Belediyesi’nin kendi imkanlarıyla Ağırdağ köy meydanı",
                    name: "Ağırdağ Muhtarlığı Ve Sağlık Ocağı Projesi",
                },
                {
                    image: "/assets/img3.jpg",
                    title: "Dikmen Belediyesi’nin kendi imkanlarıyla Ağırdağ köy meydanı",
                    name: "Ağırdağ Muhtarlığı Ve Sağlık Ocağı Projesi",
                },
                {
                    image: "/assets/img3.jpg",
                    title: "Dikmen Belediyesi’nin kendi imkanlarıyla Ağırdağ köy meydanı",
                    name: "Ağırdağ Muhtarlığı Ve Sağlık Ocağı Projesi",
                },
                {
                    image: "/assets/img3.jpg",
                    title: "Dikmen Belediyesi’nin kendi imkanlarıyla Ağırdağ köy meydanı",
                    name: "Ağırdağ Muhtarlığı Ve Sağlık Ocağı Projesi",
                },
                {
                    image: "/assets/img3.jpg",
                    title: "Dikmen Belediyesi’nin kendi imkanlarıyla Ağırdağ köy meydanı",
                    name: "Ağırdağ Muhtarlığı Ve Sağlık Ocağı Projesi",
                },
                {
                    image: "/assets/img3.jpg",
                    title: "Dikmen Belediyesi’nin kendi imkanlarıyla Ağırdağ köy meydanı",
                    name: "Ağırdağ Muhtarlığı Ve Sağlık Ocağı Projesi",
                },
                {
                    image: "/assets/img3.jpg",
                    title: "Dikmen Belediyesi’nin kendi imkanlarıyla Ağırdağ köy meydanı",
                    name: "Ağırdağ Muhtarlığı Ve Sağlık Ocağı Projesi",
                },
            ],
        completed: 
            [
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
    }
    return(
        <div className="flex flex-col gap-8 w-full h-full bg-white py-5 subPageSection " >
            <div className=" flex items-center ">
                <div onClick={() => handleClick("all") } className={` cursor-pointer flex items-center justify-center text16 font-bold border-r h-[19px] w-fit px-5 ${currentDisplay === "all" ? "text-dark_yellow" : "text-gray-300 hover:text-faint_gray"} transition-all duration-300 `}><I18N>ALL</I18N></div>
                <div onClick={() => handleClick("ongoing") } className={` cursor-pointer flex items-center justify-center text16 font-bold border-r h-[19px] w-fit px-5 ${currentDisplay === "ongoing" ? "text-dark_yellow" : "text-gray-300 hover:text-faint_gray"} transition-all duration-300 `}><I18N>ONGOING_PROJECTS</I18N></div>
                <div onClick={() => handleClick("completed") } className={` cursor-pointer flex items-center justify-center text16 font-bold border-r h-[19px] w-fit px-5 ${currentDisplay === "completed" ? "text-dark_yellow" : "text-gray-300 hover:text-faint_gray"} transition-all duration-300 `}><I18N>COMPLETED_PROJECTS</I18N></div>
            </div>
            <ul className=" grid grid-cols-1 smobile:grid-cols-2 lmd:grid-cols-3 place-items-center gap-x-2 gap-y-5 flex-1 ">
                {
                    data[currentDisplay as keyof typeof data].map((obj, idx) => {
                        return (
                            <ProjectsCard key={idx} image={obj.image} title={obj.title} name={obj.name} />
                        )
                    })
                }
            </ul>
        </div>
    )
}


export default Projects