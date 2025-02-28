"use client"

import { Link } from "@/i18n/routing"
import Image from "next/image"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import I18N from "@/i18n"
import { faAngleDown, faHashtag, faShare } from "@fortawesome/free-solid-svg-icons"
import { useTranslations } from "next-intl"
import { Dropdown } from "antd"

const NavBar = () => {
    const DIKMENLOGO =  '/assets/Dikmen-logo1.png'
    const SEARCH =  '/assets/search.png'
    const HEADPHONE =  '/assets/headphones.png'
    const MAIL =  '/assets/mail.png'
    const LINKEDIN =  '/assets/linkedin.png'
    const FACEBOOK =  '/assets/facebook.png'
    const INSTA =  '/assets/insta.png'
    const X = '/assets/x.png'
    const t = useTranslations()
    return(
        <nav className=" flex justify-between gap-3 max-h-[120px] h-[100%] max-w-[1300px] w-[100%] px-1 ">
                <Link href={"/"} >
                    <div className=" relative max-w-[100px] w-screen h-[100px] ring-2" >
                        <Image className=" object-contain " src={DIKMENLOGO} priority fill alt="logo" />
                    </div>
                </Link>
                <div className=" flex gap-1 w-[85%] min-h-[100%] py-2 ring-2 " >
                    <div className=" flex-1 flex flex-col justify-between ">
                        <div className=" flex justify-between items-center gap-2 " >
                            <div className=" flex justify-between items-center flex-1 max-w-[500px] text-[14px] gap-1 ring-2 " >
                                <a className=" flex justify-center items-center gap-2 " href="tel://+903922372618" >
                                    <figure className="relative h-[17px] w-[17px]" >
                                        <Image fill src={HEADPHONE} alt="contact us" />
                                    </figure>
                                    <p>
                                        +90 392 237 26 18
                                    </p>
                                </a>
                                <a className=" flex justify-center items-center gap-2 " href="mailto:info@dikmenbelediyesi.com" >
                                    <figure className="relative h-[17px] w-[20px]" >
                                        <Image fill src={MAIL} alt="contact us" />
                                    </figure>
                                    <p>
                                        info@dikmenbelediyesi.com
                                    </p>
                                </a>
                                <ul className=" hidden xxl:flex gap-2 " >
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
                                <Dropdown
                                    className="xxl:hidden block min-w-fit"
                                    trigger={['hover']}
                                    placement="bottomRight"
                                    dropdownRender={() => {
                                        return(
                                            <ul className=" flex flex-col gap-2 w-fit ring-2 " >
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
                                    <div className=" flex justify-center items-center gap-2" >
                                        <FontAwesomeIcon className="text-base_yellow" icon={faHashtag} />
                                        <p className=" text-[14px]" >
                                            Social
                                        </p>
                                    </div>
                                </Dropdown>
                            </div>
                            <ul className=" flex items-center gap-2 h-[35px] " >
                                <li className=" flex justify-between items-center p-1 px-3 max-w-[200px] rounded-md h-full ring-1 ring-gray-300 " >
                                    <input className=" text-[14px] h-full border-0 w-[90%] " type="text"  placeholder={`${t("SEARCH_THE_SITE")}`} />
                                    <Image className=" " height={14.7} width={14.7} src={SEARCH} alt="search" />
                                </li>
                                <li className=" bg-base_yellow text-dark_yellow relative flex justify-center items-center max-w-[160px] w-screen h-full rounded-md  ">
                                    <p className=" max-w-[94px] whitespace-nowrap line-clamp-2 text-ellipsis ">
                                        <I18N>ONLINE_TRANSACTIONS</I18N>
                                    </p>
                                    <FontAwesomeIcon className=" absolute top-[50%] right-[7px] font-semibold translate-y-[-50%] " icon={faAngleDown} />
                                </li>
                            </ul>
                        </div>
                        <hr className=" w-full "/>
                        <ul className=" flex justify-between items-center text-[16px] text-base_gray" >
                            <li><I18N>HOME_PAGE</I18N></li>
                            <li><I18N>MINISTER</I18N></li>
                            <li><I18N>INSTITUTIONAL</I18N></li>
                            <li><I18N>NEWS</I18N></li>
                            <li><I18N>EVENTS</I18N></li>
                            <li><I18N>TENDERS</I18N></li>
                            <li><I18N>ANNOUNCEMENTS</I18N></li>
                            <li><I18N>COMMUNICATION</I18N></li>
                        </ul>

                    </div>
                    <ul className=" flex flex-col gap-2 justify-center px-5 max-w-[160px] w-screen h-[70px] text-dark_yellow bg-base_yellow rounded-md text-[14px] p-1 " >
                        <li><I18N>INQUIRE_DEBT</I18N></li>
                        <hr/>
                        <li><I18N>SUBSCRIBER_NUMBER</I18N></li>
                    </ul>
                </div>
            </nav>
    )
}

export default NavBar