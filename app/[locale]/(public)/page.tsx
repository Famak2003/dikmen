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
const DIKMENLOGO2 =  '/static/svg/floatingLogo.svg'
const LINKEDIN =  '/assets/linkedin.png'
const FACEBOOK =  '/assets/facebook.png'
const INSTA =  '/assets/insta.png'
const MAIL = '/static/svg/mail.svg'
const HEADPHONES = '/static/svg/headphones.svg'
const WHATSAPP = '/static/svg/whatsapp.svg'
const WEATHER = '/static/svg/weather.svg'
const linkedinSVG = '/static/svg/linkedin.svg'
const facebookSVG = '/static/svg/facebook.svg'
const xSVG = '/static/svg/x.svg'
const instaSVG = '/static/svg/insta.svg'

export default function Public() {


    const footerLeftData = [
        {
            title: "INSTITUTIONAL",
            sub: [
                "MUNICIPAL_COUNCIL_MEMBERS",
                "VISION_OR_MISSION",
                "UNITS",
                "OUR_HISTORY",
                "QUALITY_AND_SERVICES",
                "PROJECTS"
            ]
        },
        {
            title: "E_MUNICIPALITY",
            sub: [
                "DEBT_INQUIRY",
                "SUBSCRIBER_NUMBER_INQUIRY",
            ]
        },
        {
            title: "ONLINE_FORM",
            sub: [
                "DRINKING_WATER_APPLICATION_FORM",
                "REQUEST_OR_COMPLAINT_FORM",
            
            ]
        },
        {
            title: "COMMUNICATION",
            sub: [
                "COMMUNICATION",
                "FOLLOW_US",
            ],
            socials: true
        },
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
        <section className=" relative flex flex-col justify-center items-center gap-2 bg-primary_light_grey " >
            <NavBar/>
            <Hero/>
            <Preview/>
            <WhatsApp/>
            <footer className=" w-screen min-h-[621px] flex flex-col items-center ">
                <div className=" flex justify-center items-center h-[100px] w-screen bg-base_yellow">
                    <div className="flex justify-between items-center max-w-[1170px] w-full">
                        <div className="flex items-center gap-3 " >
                            <ul className=" flex gap-4 " >
                                <a className=" footerSocialLink " href="#" >
                                    <figure className="relative h-[16px] w-[16px]" >
                                        <Image fill src={linkedinSVG} alt="contact us" />
                                    </figure>
                                </a>
                                <a className=" footerSocialLink " href="#" >
                                    <figure className="relative h-[20px] w-[20px]" >
                                        <Image fill src={xSVG} alt="contact us" />
                                    </figure>
                                </a>
                                <a className=" footerSocialLink " href="#" >
                                    <figure className="relative h-[20px] w-[20px]" >
                                        <Image fill src={instaSVG} alt="contact us" />
                                    </figure>
                                </a>
                                <a className=" footerSocialLink " href="#" >
                                    <figure className="relative h-[25px] w-[13px]" >
                                        <Image fill src={facebookSVG} alt="contact us" />
                                    </figure>
                                </a>
                            </ul>
                            <ul>
                                <li className=" text-[16px] ">
                                    Sosyal
                                </li>
                                <li className=" text-[16px] ">
                                    Medya
                                </li>
                                <li className=" text-[16px] font-bold ">
                                    Hesaplarımız
                                </li>
                            </ul>
                        </div>
                        <Link href={"/"} >
                            <figure className=" relative w-[91px] h-[91px]" >
                                <Image className=" object-contain " src={DIKMENLOGO2} priority fill alt="logo" />
                            </figure>
                        </Link>
                        <div className=" flex gap-3 ">
                            <div className=" flex flex-col text-[16px] font-bold" >
                                <p className=" text-[16px] ">Dikmen</p>
                                <p className=" text-[16px] font-bold ">Hava Durumu</p>
                            </div>
                            <figure className=" relative aspect-square h-[68px] ">
                                <Image src={WEATHER} alt="weather" fill />
                            </figure>
                            <div className=" flex flex-col gap-1 " >
                                <h1 className=" text-[30px] " >22°C</h1>
                                <small className=" text-[16px] " >az bulutlu</small>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=" flex justify-between flex-1 pt-[120px] w-screen max-w-[1170px] ">
                    <div className=" flex w-[70%] justify-between ">
                        {
                            footerLeftData.map((obj, idx) => {
                                return(
                                    <div className=" flex flex-col gap-10 " key={idx}>
                                        <h1 className=" font-bold text-[16px] text-dark_yellow uppercase " >
                                            <I18N>{obj.title}</I18N>
                                        </h1>
                                        <ul className=" flex flex-col gap-3 ">
                                            {obj.sub.map((text, index) => {
                                                return(
                                                    <li className=" text text-secondary_gray font-semibold uppercase" key={index}>
                                                        <I18N>{text}</I18N>
                                                    </li>
                                                )
                                            })}
                                        </ul>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className=" flex flex-col gap-5  ">
                        <h1 className="font-bold text-[16px] text-dark_yellow uppercase">
                            <I18N>BE_INFORMED_ABOUT_US</I18N>
                        </h1>
                        <ul>
                            {
                                beInformedData.map((obj, idx) => {
                                    return(
                                        <li key={idx} className=" flex gap-3 h-fit p-2 ">
                                            <figure className="relative max-h-[40px] w-screen h-[100vh] max-w-[40px]" >
                                                <Image fill src={obj.icon} alt="contact us" />
                                            </figure>
                                            <div className=" flex flex-col gap-3 ">
                                                <h2 className=" text font-bold text-dark_yellow uppercase "> <I18N>{obj.title}</I18N></h2>
                                                <p className=" text-[16px] font-bold text-secondary_gray ">{obj.info}</p>
                                            </div>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
            </footer>
        </section>
    )
}