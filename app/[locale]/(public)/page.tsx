"use client"

import { Link } from "@/i18n/routing";
import Image from "next/image";
import HERO from '../../../assets/heroSlide.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleLeft, faAngleRight, faB, faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FacebookFilled, FacebookOutlined, InstagramOutlined, LinkedinFilled, LinkedinOutlined, TwitterOutlined, XOutlined } from "@ant-design/icons";
import I18N from "@/i18n";
import {Carousel} from 'flowbite-react'
import { useTranslations } from "next-intl";
import NavBar from "./component/NavBar";
import Hero from "./component/Hero";
import { useMemo, useState } from "react";
import Preview from "./component/Preview";
import { Tooltip } from "antd";
import WhatsApp from "./component/Whatsapp";
import FooterStrip from "./component/FooterStrip";
import { title } from "process";
import Footer from "./component/Footer";
import Socials from "./component/reusables/Socials";
import MayorStripe from "./component/MayorStripe";
import OurFeatures from "./component/OurFeatures";
import Facilities from "./component/Facilities";
const DIKMENLOGO2 =  '/static/svg/floatingLogo.svg'
const LINKEDIN =  '/assets/linkedin.png'
const FACEBOOK =  '/assets/facebook.png'
const MAYOR =  '/static/svg/mayor.svg'
const MAIL = '/static/svg/mail.svg' 
const HEADPHONES = '/static/svg/headphones.svg'
const WHATSAPP = '/static/svg/whatsapp.svg'
const WEATHER = '/static/svg/weather.svg'
const linkedinSVG = '/static/svg/linkedin.svg'
const facebookSVG = '/static/svg/facebook.svg'
const xSVG = '/static/svg/x.svg'
const instaSVG = '/static/svg/insta.svg'


export default function Public() {

    const discoverData = [
        {
            title1: "TASHKENT",
            title2: "MARTYRDOM",
            image: "/assets/martyrdom.png"
        },
        {
            title1: "TASHKENT",
            title2: "PARK",
            image: "/assets/martyrdom.png"
        },
        {
            title1: "Panagia",
            title2: "Absinthiotissa",
            image: "/assets/martyrdom.png"
        },
        {
            title1: "...",
            title2: "MUSEUM",
            image: "/assets/martyrdom.png"
        },
    ]

    return (
        <section className=" relative flex flex-col justify-center items-center bg-primary_light_grey " >
            <NavBar/>
            <Hero/>
            <Preview/>
            <WhatsApp/>
            <MayorStripe/>
            <OurFeatures/>
            <Facilities/>
            <section 
                className=" flex justify-center items-center w-screen h-fit py-28 "
                style={{
                    background: "url(/assets/discoverBackground.png)",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat"
                }}
            >
                <div className=" section flex flex-col gap-3 justify-center items-center ">
                    <div className=" relative flex flex-col justify-center items-center">
                        <h1 className=" text-[80px] mobile:text-[100px] zooja-font text-white ">Dikmen’i</h1>
                        <p className=" absolute bottom-[20%] left-[50%] translate-x-[-50%] text-dark_yellow "> <I18N>DISCOVER</I18N></p>
                    </div>
                    <ul className=" flex justify-center gap-3 flex-wrap ltab:flex-nowrap ">
                        {
                            discoverData.map((obj, idx) => {
                                return(
                                    <li key={idx} className="relative bg-gray-300 min-w-[250px] 3xl:min-w-[306px] w-[100%] mobile:w-[70%] lmobile:w-1/4 h-fit rounded-[20px] overflow-hidden ">
                                         <figure className="  w-full h-[400px] rounded-[20px] overflow-hidden ">
                                            <Image
                                                className=" object-cover w-full h-full "
                                                width={306}
                                                height={400} 
                                                src={obj.image} 
                                                alt="discover us"
                                            />
                                        </figure>
                                        <div className=" absolute top-4 left-4 flex flex-col gap-1 font-semibold text-[24px] lg:text-[30px] text-dark_yellow ">
                                            <p className=" w-fit min-w-[80px] bg-base_yellow px-1 "><I18N>{obj.title1}</I18N></p>
                                            <p className=" w-fit min-w-[80px] bg-base_yellow px-1 "><I18N>{obj.title2}</I18N></p>
                                        </div>
                                        <div className=" flex justify-center items-center h-[50px] text16 font-semibold text-dark_yellow text-center w-full " >
                                            <I18N>ALL</I18N>
                                        </div>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </section>
            <Footer/>
        </section>
    )
}