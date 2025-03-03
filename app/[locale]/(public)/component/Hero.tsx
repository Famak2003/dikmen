import I18N from "@/i18n"
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Carousel } from "flowbite-react"
import Image from "next/image"

const Hero = () => {
    const heroData = [
        {image: "/assets/dikmen.png", text: "Geçmişten Geleceğe"},
        {image: "/assets/dikmen.png", text: "Geçmişten Geleceğe"},
        {image: "/assets/dikmen.png", text: "Geçmişten Geleceğe"},
    ]
    const carouselBarData = [
        {
            image: "/assets/tenders.png", 
            title: "TENDERS", 
            writeup: "TENDERS_ANNOUNCEMENTS"
        },
        {
            image: "/assets/council.png", 
            title: "COUNCIL", 
            writeup: "DECISIONS"
        },
        {
            image: "/assets/events.png", 
            title: "EVENTS", 
            writeup: "DIKMEN_EVENTS"
        },
        {
            image: "/assets/phone.png", 
            title: "IMPORTANT_PHONES", 
            writeup: "EMERGENCY_NUMBERS"
        },
        {
            image: "/assets/news.png", 
            title: "NEWS", 
            writeup: "MUNICIPALITY_NEWS"
        },
        {
            image: "/assets/forms.png", 
            title: "FORMS", 
            writeup: "APPLICATION_FORMS"
        },
        {
            image: "/assets/municipality.png", 
            title: "E-MUNICIPALITY", 
            writeup: "MUNICIPALITY_SERVICES"
        },
    ]
    return (
        <div className=" relative w-full">
            <Carousel
                id="carousel"
                className=" !rounded-none "
                leftControl={ <div className=" flex justify-center items-center h-[40px] w-[40px] bg-base_yellow "><FontAwesomeIcon className=" text-dark_yellow " icon={faChevronLeft} /></div> } 
                rightControl={ <div className=" flex justify-center items-center h-[40px] w-[40px] bg-base_yellow "><FontAwesomeIcon className=" text-dark_yellow " icon={faChevronRight} /></div> }
            >
                {
                    heroData.map((item, idx) => {
                        return(
                            <div key={idx} className=" relative aspect-video md:aspect-[16/7] lg:aspect-[16/5] w-full " >
                                <Image className=" object-fill " src={item.image} fill alt="dikmen view" />
                            </div>
                        )
                    })
                }

            </Carousel>
            <div className=" flex absolute bottom-[-60px] left-[50%] translate-x-[-50%] bg-white h-[120px] w-screen max-w-[1170px] ring-1 ring-dark_yellow ">
                <button className=" flex-1 flex justify-center items-center bg-base_yellow  ">
                    <FontAwesomeIcon className=" text-dark_yellow " icon={faChevronLeft} />
                </button>
                <ul className=" flex justify-between items-center max-w-[1060px] w-[90%] px-4 " >
                    {
                        carouselBarData.map((obj, idx) => {
                            const writeupText = <I18N>{obj.writeup}</I18N>
                            const isLast = (carouselBarData.length - 1) === idx
                            return(
                                <>
                                    <li key={idx} className=" cursor-pointer flex flex-col justify-center items-center gap-1 px-2 xl:px-4 ">
                                        <figure className=" relative  h-[28px] w-[40px] ">
                                            <Image className="object-contain" src={obj.image} alt="icon" fill />
                                        </figure>
                                        <h2 title="hhhhhfhf" className=" text-center text-[13px] font-semibold text-light_dark_yellow ">
                                            <I18N>
                                                {obj.title}
                                            </I18N>
                                        </h2>
                                        <p className=" text-center truncate w-[70px] lg:w-[100px]  text-base_gray text-[12px] ">
                                            <I18N>
                                                {obj.writeup}
                                            </I18N>
                                        </p>
                                        
                                    </li>
                                    <hr className={` h-[25%] border ${isLast ? " hidden " : ""} `} />
                                </>
                            )
                        })
                    }
                </ul>
                <button className=" flex-1 flex justify-center items-center bg-base_yellow  ">
                    <FontAwesomeIcon className=" text-dark_yellow " icon={faChevronRight} />
                </button>
            </div>
        </div>
    )
}

export default Hero