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
        <section className=" relative flex flex-col justify-center items-center bg-primary_light_grey " >
            <NavBar/>
            <Hero/>
            <div className=" flex flex-col gap-24 justify-center items-center " >
                <Preview/>
                <WhatsApp/>
                <section id="mayorStrip" className="  flex justify-center items-center w-screen mt-10 shadow-custom_shad2  ">
                    <div className=" flex flex-col tab:flex-row justify-between gap-[2%] w-full h-fit tab:section bg-white ">
                        <div className=" flex items-center h-[75px] w-full justify-center tab:justify-normal tab:w-[37%] xl:w-[33%] gap-2 ltab:gap-5 pr-2 ">
                            <div className=" flex justify-center items-center h-full ">
                                <figure className=" relative h-full w-[110px] sm:w-[131px] ">
                                    <Image 
                                        className=" absolute bottom-0 w-[110px] h-[130px] sm:w-[131px] sm:h-[150px] "
                                        width={131}
                                        height={150}
                                        src={MAYOR} 
                                        alt="mayor"
                                    />
                                </figure>
                            </div>
                            <div className=" h-full flex flex-col justify-center items-center  ">
                                <h1 className=" text-light_dark_yellow text-[28px] sm:text-[32px] ltab:text-[36px] font-semibold truncate w-full max-w-[250px] ">
                                    <I18N>YUKSEL_CELEBI</I18N>
                                </h1>
                                <hr className=" w-full " />
                                <h2 className=" text-[14px] sm:text-[15px] text-gray-400 font-semibold ">
                                    <I18N>MAYOR_OF_DIKMEN</I18N>
                                </h2>
                            </div>
                        </div>
                        <div id="mayorStripList" className=" w-full xl:w-[65%] h-[110px] mobile:h-[100px] md:h-[75px] pl-4 pr-4 tab:pl-5 xl:pl-3 flex justify-between gap-1 bg-base_yellow ">
                            <ul  className=" flex-1 flex flex-wrap gap-2 md:gap-0 md:flex-row items-center justify-center md:justify-between tab:justify-normal " >
                                {
                                    MayorStripe.map((obj, idx) => {
                                        const isLast = (MayorStripe.length - 1) === idx
                                        return(
                                            <li className={` flex justify-center items-center text-[13px] font-semibold  max-h-[25px] md:w-1/4 tab:w-fit truncate border-light_dark_yellow px-4 xl:px-8 text-dark_yellow ${isLast ? "" : "border-r"}  `} key={idx}>
                                                {
                                                    obj.social ? (
                                                        <Socials className=" gap-4 " width="17px" height="17px" color="bg-base_yellow"/>
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
                </section>
                <Footer/>

            </div>
        </section>
    )
}