"use client"

import { Link } from "@/i18n/routing";
import Image from "next/image";
import HERO from '../../../assets/heroSlide.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faB, faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
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


    const MayorStripe = [
        {
            title: "RESUME",
            link: "#"
        },
        {
            title: "MESSAGE_FROM_THE_PRESIDENT",
            link: "#"
        },
        {
            title: "MESSAGE_TO_THE_PRESIDENT",
            link: "#"
        },
        {
            title: "",
            social: true
        }
    ]

    const beInformedData = [
        {
            title: "CALL_US",
            info: "+90 392 237 26 18",
            icon: HEADPHONES
        },
        {
            title: "WHATSAPP_LINE", 
            info: "+90 555 555 55 55",
            icon: WHATSAPP
        },
        {
            title: "OUR_EMAIL_ADDRESS", 
            info: "info@dikmenbelediyesi.com",
            icon: MAIL
        },
    ]


    return (
        <section className=" relative flex flex-col justify-center items-center gap-32 bg-primary_light_grey " >
            <NavBar/>
            <Hero/>
            <Preview/>
            <WhatsApp/>
            <div className="  flex justify-center items-center w-screen mt-10 shadow-custom_shad2  ">
                <div className=" w-full h-[75px] pl-[6%] flex gap-4 ">
                    <div className=" flex items-center h-full gap-5 pr-2 ring-2 ">
                        <figure className=" relative h-full w-[131px] ">
                            <Image 
                                className=" absolute bottom-0 "
                                width={131}
                                height={150}
                                // fill 
                                // sizes="(max-width: 768px) 100px, (max-width: 1200px) 100px, 100px"
                                src={MAYOR} 
                                alt="mayor"
                            />
                        </figure>
                        <div className=" h-full flex flex-col justify-center items-center ring-2 ">
                            <h1 className=" text-light_dark_yellow text-[36px] font-semibold truncate w-full max-w-[250px] ring-2 ">
                                <I18N>YUKSEL_CELEBI</I18N>
                            </h1>
                            <hr className=" w-full " />
                            <h2 className=" text-[15px] text-gray-400 font-semibold ">
                                <I18N>MAYOR_OF_DIKMEN</I18N>
                            </h2>
                        </div>
                    </div>
                    <div id="mayorStripList" className=" ring-2 flex-1 flex justify-between gap-3 pl-10 bg-base_yellow ">
                        <ul  className=" flex-1 flex items-center ring-2  " >
                            {
                                MayorStripe.map((obj, idx) => {
                                    const isLast = (MayorStripe.length - 1) === idx
                                    return(
                                        <li className={` text-[13px] font-semibold  max-h-[25px] w-fit truncate border-light_dark_yellow px-8 text-dark_yellow ${isLast ? "" : "border-r"}  `} key={idx}>
                                            {
                                                obj.social ? (
                                                     <Socials className=" gap-4 " color="bg-base_yellow"/>
                                                ) : (
                                                    <I18N>{obj.title}</I18N>
                                                )
                                            }
                                        </li>
                                    )
                                })
                            }
                        </ul>
                        <div className=" flex justify-center items-center bg-white h-[30px] text-light_dark_yellow aspect-square ">
                            <FontAwesomeIcon icon={faAngleDown} />
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </section>
    )
}