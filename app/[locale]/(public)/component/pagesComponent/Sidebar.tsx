import I18N from "@/i18n"
import Socials from "../reusables/Socials"
import { Button, Input } from "antd"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleRight, faPaperPlane } from "@fortawesome/free-solid-svg-icons"
import { Link } from "@/i18n/routing"
import { usePathname } from "next/navigation"
import { ForwardedRef, forwardRef, useRef } from "react"

interface subpages{
    title: string,
    link: string
}

const Sidebar = forwardRef<HTMLDivElement, {isPagesSidebarOpen: boolean, subpages: subpages[]}>((props, ref) => {
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

    console.log(props.isPagesSidebarOpen)

    return(
    <div ref={ref} className={` absolute top-0 ${props.isPagesSidebarOpen ? "translate-x-[0%]" : "translate-x-[-200%]"}  sm:translate-x-0 sm:relative flex flex-col gap-3 bg-section_bg max-w-[220px] tab:max-w-[290px] w-full min-h-[598px] h-fit z-[30] transition-all duration-300 `}>
            <div className=" flex flex-col item-center gap-4 px-7 py-7 ">
                <div className=" flex flex-col gap-5 py-4">
                    <h1 className=" text-[18px] font-bold uppercase text-dark_yellow "><I18N>{parentRouteName}</I18N></h1>
                    <ul className=" flex flex-col gap-4 ">
                        {
                            props?.subpages.map((obj, idx) => {
                                return (
                                    <Link key={idx} href={obj.link}>
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
            <div className=" flex flex-col gap-2 p-5 bg-base_yellow flex-1 pb-20 ">
                <h1 className=" text-[18px] text-dark_yellow font-bold uppercase ">
                    <I18N>FOLLOW_US</I18N>
                </h1>
                <Socials className=" text-base_yellow " color="bg-dark_yellow text-base_yellow " />
            </div>
        </div>
    )
})

Sidebar.displayName = "{Pages Sidebar";

export default Sidebar;