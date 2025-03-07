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
import Discover from "./component/Discover";
import Memories from "./component/Memories";
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

    

    

    return (
        <>
            <Hero/>
            <Preview/>
            <WhatsApp/>
            <MayorStripe/>
            <OurFeatures/>
            <Facilities/>
            <Discover/>
            <Memories/>
        </>
    )
}