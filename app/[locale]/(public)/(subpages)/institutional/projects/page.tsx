"use client"

import I18N from "@/i18n"
import Image from "next/image"
import { useState } from "react"

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
        <div className=" flex flex-col gap-8 w-full h-full bg-white pt-5 subPageSection " >
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
const ProjectsCard = ({image, title, name}: {image?: string, title?: string, name?: string}) => {
    return (
        <li className=" flex flex-col gap-3 p-[10px] bg-white max-w-[274px] w-full h-[454px] rounded-2xl shadow-custom_shad4 ">
            {
                image ? (
                    <figure className=" w-full max-w-[254px] h-full max-h-[240px] overflow-hidden rounded-2xl " >
                        <Image
                            className=" object-cover h-full w-full"
                            src={image}
                            width={254}
                            height={240}
                            alt="profile image"
                        />
                    </figure>
                )
                : (
                    <div className=" w-full max-w-[153px] h-full max-h-[175px] bg-section_bg ">
                        
                    </div>
                )
            }
            <div className=" flex flex-col gap-2 ">
                <span className=" text-dark_yellow text-xs font-semibold capitalize " ><I18N>COMPLETED_PROJECTS</I18N></span>
                <h1 className="text-gray-500 line-clamp-2 font-bold text-xl tab:text-2xl " >{name}</h1>
                <span className="text-gray-600 line-clamp-2 text font-bold "> {title ?? <I18N>NO_CONTENT</I18N>} </span>
                <span className=" self-center text-dark_yellow border-b border-dark_yellow "><I18N>DETAIL</I18N></span>
            </div>
        </li>
    )
}


export default Projects