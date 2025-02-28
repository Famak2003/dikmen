import { Link } from "@/i18n/routing";
import Image from "next/image";
import DIKMENLOGO from '../../../assets/Dikmen-logo1.png'
import SEARCH from '../../../assets/search.png'
import HEADPHONE from '../../../assets/headphones.png'
import MAIL from '../../../assets/mail.png'
import LINKEDIN from '../../../assets/linkedin.png'
import FACEBOOK from '../../../assets/facebook.png'
import INSTA from '../../../assets/insta.png'
import HERO from '../../../assets/heroSlide.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faB, faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FacebookFilled, FacebookOutlined, InstagramOutlined, LinkedinFilled, LinkedinOutlined, TwitterOutlined, XOutlined } from "@ant-design/icons";
import I18N from "@/i18n";
import {Carousel} from 'flowbite-react'
import { useTranslations } from "next-intl";
import NavBar from "./component/NavBar";

export default function Public() {
    const t = useTranslations()
    const heroData = [
        {image: "/assets/dikmen.png", text: "Geçmişten Geleceğe"},
        {image: "/assets/dikmen.png", text: "Geçmişten Geleceğe"},
        {image: "/assets/dikmen.png", text: "Geçmişten Geleceğe"},
    ]
    return (
        <section className=" flex flex-col justify-center items-center gap-2 " >
            <NavBar/>
            <div className=" relative w-full ring-2 h-[536px] ">
                <Carousel
                    id="carousel"
                    className=" !rounded-none "
                    leftControl={ <div className=" flex justify-center items-center h-[40px] w-[40px] bg-base_yellow "><FontAwesomeIcon className=" text-dark_yellow " icon={faChevronLeft} /></div> } 
                    rightControl={ <div className=" flex justify-center items-center h-[40px] w-[40px] bg-base_yellow "><FontAwesomeIcon className=" text-dark_yellow " icon={faChevronRight} /></div> }
                >
                    {
                        heroData.map((item, idx) => {
                            return(
                                <div className=" h-full w-full bg-red-400 bg-cover bg-center bg-no-repeat " 
                                    style={{
                                        background: `url(${item.image})`,
                                        backgroundRepeat: "no-repeat",
                                        backgroundPosition: "center",
                                        backgroundSize: "cover"
                                    }}
                                >

                                </div>
                            )
                        })
                    }

                </Carousel>
                <div className=" flex  absolute bottom-[-60px] left-[50%] translate-x-[-50%] bg-red-500 h-[120px] w-screen max-w-[1170px]  ">
                    <button className=" flex-1 flex justify-center items-center bg-base_yellow ring-2 ">
                        <FontAwesomeIcon className=" text-dark_yellow " icon={faChevronLeft} />
                    </button>
                    <div className=" max-w-[1060px] w-full ring-2 " >
                        Whats up
                    </div>
                    <button className=" flex-1 flex justify-center items-center bg-base_yellow ring-2 ">
                        <FontAwesomeIcon className=" text-dark_yellow " icon={faChevronRight} />
                    </button>
                    
                </div>
            </div>
        </section>
    )
}