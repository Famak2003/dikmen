"use client"

import I18N from "@/i18n"
import { Link } from "@/i18n/routing"
import { faAngleLeft, faAngleRight, faPaperPlane } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Button, Input } from "antd"
import { usePathname } from "next/navigation"
import Socials from "../component/reusables/Socials"

const MinisterLayout = ({children}: {children: React.ReactNode}) => {
    const pathname = usePathname()
    const parentRouteName = pathname.split("/").filter(Boolean)[1].toLocaleUpperCase()
    const parentSubpages = [
        {
            title: "RESUME",
            link: "/minister/resume"
        },
        {
            title: "PRESIDENT_MESSAGE",
            link: "/minister/president_message"
        },
        {
            title: "MESSAGE_TO_PRESIDENT",
            link: "/minister/message_to_president"
        },
    ]

    return(
        <div className=" flex justify-center gap-10 h-full min-h-[100dvh] w-screen bg-white pt-14">
            <div className=" section flex gap-10 h-full w-full  ">
                <div className=" flex flex-col gap-3 bg-section_bg max-w-[290px] w-full h-[598px] ">
                    <div className=" flex flex-col item-center gap-4 px-7 py-7 ">
                        <div className=" flex flex-col gap-5 py-4">
                            <h1 className=" text-[18px] font-bold uppercase text-dark_yellow "><I18N>{parentRouteName}</I18N></h1>
                            <ul className=" flex flex-col gap-4 ">
                                {
                                    parentSubpages.map((obj, idx) => {
                                        return (
                                            <Link href={obj.link}>
                                                <li className=" relative flex gap-2 items-center justify-start text-secondary_gray hover:text-dark_yellow w-full ">
                                                    <span className=" absolute top-[50%] translate-y-[-50%] left-[-15px] "><FontAwesomeIcon className="h-[3px] w-[9px]" icon={faAngleRight} /></span>
                                                    <p> <I18N>{obj.title}</I18N></p>
                                                </li>
                                            </Link>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                        <hr className=" w-full border-[1px] " />
                        <div className=" flex flex-col justify-center items-start gap-4 py-3" >
                            <h1 className=" text-[18px] font-bold text-dark_yellow ">
                                <I18N>BE_INFORMED_ABOUT_US</I18N>
                            </h1>
                            <Input
                                prefix={<FontAwesomeIcon icon={faPaperPlane} className=" text-black mr-2" />}
                                placeholder={`E-Posta veya Numaranız`}
                                className=" text h-[35px]"
                                type="email"
                            />
                            <Button className=" uppercase w-[108px] h-[40px] rounded-[3px] bg-base_yellow text-dark_yellow ">
                                <I18N>SEND</I18N>
                            </Button>
                        </div>
                    </div>
                    <div className=" flex flex-col gap-2 p-5 bg-base_yellow flex-1">
                        <h1 className=" text-[18px] text-dark_yellow font-bold uppercase ">
                            <I18N>FOLLOW_US</I18N>
                        </h1>
                        <Socials className=" text-base_yellow " color="bg-dark_yellow text-base_yellow " />
                    </div>
                </div>
                {children}
            </div>
        </div>
    )
}

export default MinisterLayout