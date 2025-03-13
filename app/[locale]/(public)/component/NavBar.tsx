"use client"

import { Link } from "@/i18n/routing"
import Image from "next/image"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import I18N from "@/i18n"
import { faAngleDown, faBars, faHashtag, faInfoCircle, faShare } from "@fortawesome/free-solid-svg-icons"
import { useTranslations } from "next-intl"
import type { MenuProps } from 'antd';
import { Dropdown, Tooltip } from "antd"
import { useState } from "react"
import Socials from "./reusables/Socials"

const navLinks = [
    {
        name: "HOME_PAGE",
        link: "/"
    },
    {
        name: "MINISTER",
        link: "/minister/resume"
    },
    {
        name: "INSTITUTIONAL",
        link: "/institutional/city_council_members"
    },
    {
        name: "NEWS",
        link: "/news"
    },
    {
        name: "EVENTS",
        link: "/events"
    },
    {
        name: "TENDERS",
        link: "/tenders"
    },
    {
        name: "ANNOUNCEMENTS",
        link: "#"
    },
    {
        name: "COMMUNICATION",
        link: "#"
    },
    

]




const items: MenuProps['items'] = [
    {
      label: <I18N>INQUIRE_DEBT</I18N>,
      key: '1',
    },
    {
      label: <I18N>SUBSCRIBER_NUMBER</I18N>,
      key: '2',
    },
  ];
  





const NavBar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)
    const DIKMENLOGO =  '/static/svg/logo.svg'
    const SEARCH =  '/assets/search.png'
    const HEADPHONE =  '/assets/headphones.png'
    const MAIL =  '/assets/mail.png'
    const LINKEDIN =  '/assets/linkedin.png'
    const FACEBOOK =  '/assets/facebook.png'
    const INSTA =  '/assets/insta.png'
    const X = '/assets/x.png'
    const t = useTranslations()

    return(
        <nav className=" relative flex items-center justify-center bg-white h-[100px] md:h-[120px] w-[100%] ">
            <div className=" relative flex items-center justify-between gap-3 h-full max-w-[1300px] w-[100%] px-1 ">
                <Link href={"/"} >
                    <div className=" relative max-w-[100px] w-screen h-[100px]" >
                        <Image className=" object-contain " src={DIKMENLOGO} priority fill alt="logo" />
                    </div>
                </Link>
                <div className={` fixed top-0 ${isSidebarOpen ? "right-0" : "right-[-200%] md:right-0"} transition-all duration-300 bg-white md:bg-transparent md:relative flex flex-col md:flex-row gap-1 w-[280px] md:w-[85%] h-[100dvh] md:h-full min-h-[100%] py-5 md:py-2 px-5 md:px-0 z-[99] border-l-[1px] md:border-0 border-dark_yellow`} >
                    <div className="  flex flex-col gap-10 md:gap-0 flex-1 md:justify-between  ">
                        <div className=" flex flex-col md:flex-row justify-between items-center gap-2 md:h-fit" >
                            <div className=" order-2 md:order-1 flex flex-col md:flex-row justify-start xl:justify-between items-center flex-1 max-w-[500px] text gap-3 xl:gap-2 " >
                                <Tooltip title="+90 392 237 26 18" >
                                    <a className=" flex justify-center items-center gap-2 " href="tel://+903922372618" >
                                        <figure className="relative h-[17px] w-[17px]" >
                                            <Image fill src={HEADPHONE} alt="contact us" />
                                        </figure>
                                        <p className=" md:hidden xl:block ">
                                            +90 392 237 26 18
                                        </p>
                                        <p className=" hidden md:block xl:hidden ">
                                            <I18N>
                                                PHONE
                                            </I18N>
                                        </p>
                                    </a>
                                </Tooltip>
                                <Tooltip title="info@dikmenbelediyesi.com" >
                                    <a className=" flex justify-center items-center gap-2 " href="mailto:info@dikmenbelediyesi.com" >
                                        <figure className="relative h-[17px] w-[20px]" >
                                            <Image fill src={MAIL} alt="contact us" />
                                        </figure>
                                        <p className=" md:hidden xl:block ">
                                            info@dikmenbelediyesi.com
                                        </p>
                                        <p className=" hidden md:block xl:hidden ">
                                            <I18N>
                                                MAIL
                                            </I18N>
                                        </p>
                                    </a>
                                </Tooltip>
                                <Socials className="flex md:hidden xxl:flex" height={"10px"} width={"10px"} />
                                <Dropdown
                                    className="  "
                                    trigger={['hover']}
                                    // placement="bottomRight"
                                    dropdownRender={() => {
                                        return(
                                            <ul className=" flex flex-col gap-2 " >
                                                <a className=" socialLink " href="#" >
                                                    <figure className="relative h-[10px] w-[10px]" >
                                                        <Image fill src={LINKEDIN} alt="contact us" />
                                                    </figure>
                                                </a>
                                                <a className=" socialLink " href="#" >
                                                    <figure className="relative h-[10px] w-[10px]" >
                                                        <Image fill src={X} alt="contact us" />
                                                    </figure>
                                                </a>
                                                <a className=" socialLink " href="#" >
                                                    <figure className="relative h-[10px] w-[10px]" >
                                                        <Image fill src={INSTA} alt="contact us" />
                                                    </figure>
                                                </a>
                                                <a className=" socialLink " href="#" >
                                                    <figure className="relative h-[12px] w-[7px]" >
                                                        <Image fill src={FACEBOOK} alt="contact us" />
                                                    </figure>
                                                </a>
                                            </ul>
                                        )
                                    }}
                                >
                                    <button className=" justify-center items-center gap-2 hidden md:flex xxl:hidden min-w-fit " >
                                        <FontAwesomeIcon className="text-base_yellow text-[17px] " icon={faHashtag} />
                                        <p className=" text" >
                                            <I18N>
                                                SOCIALS
                                            </I18N>                                            
                                        </p>
                                    </button>
                                </Dropdown>
                            </div>
                            <ul className=" order-1 md:order-2 flex flex-col md:flex-row items-center gap-2 md:h-[35px] " >
                                <li className=" flex justify-between items-center p-1 px-3 max-w-[200px] rounded-md h-[35px] ring-1 ring-gray-300 " >
                                    <input className=" text h-full !border-0 w-[90%] bg-transparent input" type="text"  placeholder={`${t("SEARCH_THE_SITE")}`} />
                                    <Image className=" cursor-pointer " height={14.7} width={14.7} src={SEARCH} alt="search" />
                                </li>
                                <li className=" cursor-pointer bg-base_yellow text-dark_yellow relative flex justify-center items-center max-w-[160px] w-screen h-[35px] rounded-md  ">
                                    <Tooltip title={<p><I18N>ONLINE_TRANSACTIONS</I18N></p>} >
                                        <p className=" max-w-[94px] w-full text truncate ">
                                                <I18N>ONLINE_TRANSACTIONS</I18N>
                                        </p>
                                    </Tooltip>
                                    <FontAwesomeIcon className=" absolute top-[50%] right-[7px] font-semibold translate-y-[-50%] " icon={faAngleDown} />
                                </li>
                            </ul>
                        </div>
                        <hr className=" w-full "/>
                        <ul className=" flex flex-col md:flex-row justify-between items-center gap-2 tab:gap-3 text-sm lg:text-base text-base_gray " >
                            {
                                navLinks.map((obj,idx) => {
                                    return(
                                        <Link key={idx} href={obj.link} >
                                            <li className=" cursor-pointer "><I18N>{obj.name}</I18N></li>
                                        </Link>
                                    )
                                })
                            }
                        </ul>

                    </div>
                    <div className=" flex justify-center w-fit h-fit lmd:bg-base_yellow rounded-md text " >
                        <div className=" hidden lmd:flex flex-col gap-2 justify-center w-full max-w-[160px] h-[70px] text-dark_yellow p-1 px-2 tab:px-5">
                            <button className=" "><I18N>INQUIRE_DEBT</I18N></button>
                            <hr/>
                            <button className=" "><I18N>SUBSCRIBER_NUMBER</I18N></button>
                        </div>
                        <Dropdown
                            className=""
                            menu={{items}}

                        >
                            <p className=" block lmd:hidden"><FontAwesomeIcon icon={faInfoCircle} className=" text-dark_yellow bg-gray-200 rounded-full p-2  " /></p>
                        </Dropdown>
                    </div>
                </div>
                <div 
                    className={` absolute z-[999] md:hidden flex justify-center items-center text-dark_yellow bg-base_yellow rounded-sm h-[30px] w-[30px] top-[50%] translate-y-[-50%] transition-all duration-300  ${isSidebarOpen ? "right-[300px]" : "right-10"} `}
                    onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                >
                    <FontAwesomeIcon icon={faBars} />
                </div>

            </div>
            </nav>
    )
}

export default NavBar