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
import MayorStripe from "./component/MayorStripe";
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

const ourFeaturesData = [
    {
        title: "OUR_SERVICES",
        writeup: "Lorem Ipsum pasajlarının birçok çeşitlemesi vardır. Ancak bunların büyük bir çoğunluğu mizahtır.",
        image: "/assets/services.png"
    },
    {
        title: "STUDIES",
        writeup: "Lorem Ipsum pasajlarının birçok çeşitlemesi vardır. Ancak bunların büyük bir çoğunluğu mizahtır.",
        image: "/assets/studies.png"
    },
    {
        title: "COURSES",
        writeup: "Lorem Ipsum pasajlarının birçok çeşitlemesi vardır. Ancak bunların büyük bir çoğunluğu mizahtır.",
        image: "/assets/course.png"
    },
    {
        title: "CULTURE",
        writeup: "Lorem Ipsum pasajlarının birçok çeşitlemesi vardır. Ancak bunların büyük bir çoğunluğu mizahtır.",
        image: "/assets/culture.png"
    },
]

    return (
        <section className=" relative flex flex-col justify-center items-center bg-primary_light_grey " >
            <NavBar/>
            <Hero/>
            <div className=" flex flex-col gap-24 justify-center items-center " >
                <Preview/>
                <WhatsApp/>
                <MayorStripe/>
                <section className=" section ">
                    <ul className=" w-full h-fit flex flex-wrap tab:flex-nowrap justify-center items-center gap-2 " >
                        {
                            ourFeaturesData.map((obj, idx) => {
                                return(
                                    <li key={idx} className=" flex flex-col justify-center items-center max-w-[290px] min-w-[220px] w-1/4 h-fit gap-3 bg-section_bg pb-6 " >
                                        <figure className=" w-full h-[285px] ">
                                            <Image
                                                className=" object-cover w-full h-full "
                                                width={290}
                                                height={285} 
                                                src={obj.image} 
                                                alt="our features"
                                            />
                                        </figure>
                                        <div className=" flex flex-col gap-2 px-6">
                                            <h1 className=" text16 font-semibold text-light_dark_yellow w-fit " > {obj.title} </h1>
                                            <hr className=" max-w-[120px] border-light_dark_yellow " />
                                            <p className=" text-secondary_gray text-left mt-1" >
                                                {obj.writeup}
                                            </p>
                                        </div>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </section>
                <Footer/>

            </div>
        </section>
    )
}