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

    const facilitiesData = [
        {
            image: "/static/svg/townhall.svg",
            title: "OUR_TOWN_HALL",
            writeup: "Lorem Ipsum pasajlarının birçok çeşitlemesi vardır. Ancak bunların büyük bir çoğunluğu mizahtır.",
            getInfo: true
        },
        {
            image: "/static/svg/pharmacy.svg",
            title: "PHARMACIES_ON_DUTY",
            writeup: "Lorem Ipsum pasajlarının birçok çeşitlemesi vardır. Ancak bunların büyük bir çoğunluğu mizahtır.",
            getInfo: false,
            pharmacy: true
        },
    ]

    const pharmacyData = [
        {
            title: "ABD Eczanesi",
            phone: "+90 392 237 26 18",
            location: "Dikmen/Lefkoşa"
        },
        {
            title: "ABD Eczanesi",
            phone: "+90 392 237 26 18",
            location: "Dikmen/Lefkoşa"
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
            <section className=" flex justify-center items-center w-screen h-fit py-28 ">
                <ul className=" w-full h-fit flex flex-col md:flex-row justify-center items-center gap-5 section ">
                    {
                        facilitiesData.map((obj, idx) => {
                            return (
                                <li key={idx} className=" flex flex-col justify-center items-center gap-3 bg-white md:w-1/2 max-w-[565px] pb-6">
                                    <div className=" w-full h-[283px] ">
                                            {
                                                obj.pharmacy ? (
                                                    <div className=" flex  h-full w-full border-b border-light_gray ">
                                                        <div className=" flex flex-1 flex-col gap-3 p-6 ">
                                                            {
                                                                pharmacyData.map((obj, index) => {
                                                                    const isLast = (pharmacyData.length - 1) === index
                                                                    return(
                                                                        <div key={index} className={` flex flex-col gap-3 pb-4 ${isLast ? "" : "border-b border-text_light_gray"} `}>
                                                                            <h1 className="text16 font-semibold text-light_dark_yellow w-fit">{obj.title}</h1>
                                                                            <ul className=" flex flex-col gap-2 ">
                                                                                <li className=" flex gap-3 ">
                                                                                    <figure className={`relative h-[15px] w-[15px] text-light_dark_yellow`} >
                                                                                        <Image fill src={"/static/svg/phone.svg"} alt="contact us" />
                                                                                    </figure>
                                                                                    <p>
                                                                                        {obj.phone}
                                                                                    </p>
                                                                                </li>
                                                                                <li className=" flex gap-3 ">
                                                                                    <figure className={`relative h-[15px] w-[15px] text-light_dark_yellow`} >
                                                                                        <Image fill src={"/static/svg/location.svg"} alt="location" />
                                                                                    </figure>
                                                                                    <div className=" flex gap-1 w-full ">
                                                                                        <div className=" flex-1 border-dashed border-b border-light_dark_yellow " ></div>
                                                                                        <p>{obj.location}</p>
                                                                                        
                                                                                    </div>
                                                                                </li>

                                                                            </ul>
                                                                        </div>
                                                                    )
                                                                })
                                                            }
                                                        </div>
                                                        <figure className=" w-[139px] h-full bg-cool_red ">
                                                            <Image
                                                                className=" object-contain w-full h-full "
                                                                width={139}
                                                                height={283} 
                                                                src={"/assets/pharmacy.png"} 
                                                                alt="our features"
                                                            />
                                                        </figure>
                                                    </div>
                                                ): (
                                                    
                                                    <figure className=" w-full h-full ">
                                                        <Image
                                                            className=" object-cover w-full h-full "
                                                            width={565}
                                                            height={283} 
                                                            src={obj.image} 
                                                            alt="our features"
                                                        />
                                                    </figure>
                                                )
                                            }
                                    </div>
                                    <div className=" flex flex-col gap-2 px-6">
                                        <h1 className=" text16 font-semibold text-light_dark_yellow w-fit " > <I18N>{obj.title}</I18N> </h1>
                                        <p className=" text-secondary_gray text-left mt-1 " >
                                            {obj.writeup}
                                        </p>
                                        <div className=" flex justify-between items-center w-full mt-2 text-light_dark_yellow">
                                            {
                                                obj.getInfo ? (
                                                    <p className=" cursor-pointer "> <I18N>GET_INFORMATION</I18N> </p>
                                                ) : ""
                                            }
                                            <ul className=" flex gap-2 h-fit w-[27px] ">
                                                <li className=" text-light_dark_yellow h-[18px] w-[8.5px] " >
                                                    <FontAwesomeIcon icon={faAngleLeft} />
                                                </li>
                                                <li className=" text-light_dark_yellow h-[18px] w-[8.5px] " >
                                                    <FontAwesomeIcon icon={faAngleRight} />
                                                </li>
                                            </ul>
                                        </div> 
                                    </div>
                                </li>
                            )
                        })
                    }
                </ul>
            </section>
            <Footer/>
        </section>
    )
}