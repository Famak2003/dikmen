import I18N from "@/i18n"
import FooterStrip from "./FooterStrip"
import Image from "next/image"
import Socials from "./reusables/Socials"

const MAIL = '/static/svg/mail.svg' 
const HEADPHONES = '/static/svg/headphones.svg'
const WHATSAPP = '/static/svg/whatsapp.svg'
const linkedinSVG = '/static/svg/linkedin.svg'
const facebookSVG = '/static/svg/facebook.svg'
const xSVG = '/static/svg/x.svg'
const instaSVG = '/static/svg/insta.svg'


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
        ]
    },
    {
        title: "FOLLOW_US",
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

const Footer = () => {
    const year = new Date().getFullYear()

    return(
        <footer className=" w-screen min-h-[621px] flex flex-col gap-20 items-center text-secondary_gray ">
            <FooterStrip/>
            <div className=" flex justify-between gap-2 flex-1 w-screen section ">
                <div className=" grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-y-10 gap-x-2 w-[60%] sm:w-[75%] justify-between " >
                    {
                        footerLeftData.map((obj, idx) => {
                            return(
                                <div className=" flex flex-col gap-8 lg:gap-10 " key={idx}>
                                    <h1 className=" font-bold text16 text-dark_yellow uppercase " >
                                        <I18N>{obj.title}</I18N>
                                    </h1>
                                    {
                                        obj?.social ? (
                                            <Socials />
                                        ) : (
                                            <ul className=" flex flex-col gap-3 ">
                                                {obj?.sub?.map((text, index) => {
                                                    return(
                                                        <li className=" text text-secondary_gray font-semibold uppercase leading-8" key={index}>
                                                            <I18N>{text}</I18N>
                                                        </li>
                                                    )
                                                })}
                                            </ul>
                                        )
                                    }
                                </div>
                            )
                        })
                    }
                </div>
                <div className=" flex flex-col gap-5 w-[40%] sm:w-[25%] ">
                    <h1 className="font-bold text16 text-dark_yellow uppercase">
                        <I18N>BE_INFORMED_ABOUT_US</I18N>
                    </h1>
                    <ul>
                        {
                            beInformedData.map((obj, idx) => {
                                return(
                                    <li key={idx} className=" flex items-center gap-3 h-fit w-full p-2 ">
                                        <figure className=" block relative h-[40px] w-[40px]" >
                                            <Image fill src={obj.icon} alt="contact us" />
                                        </figure>
                                        <div className=" flex flex-col gap-3 w-[70%] ">
                                            <h2 className=" text font-bold text-dark_yellow uppercase "> <I18N>{obj.title}</I18N></h2>
                                            <p className=" text16 font-bold text-secondary_gray w-full truncate overflow-hidden text-ellipsis whitespace-nowrap ">{obj.info}</p>
                                        </div>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
            <caption className=" relative flex items-start border-t w-full py-6 section">
                <hr className=" absolute top-0 h-1 w-[150px] translate-y-[-50%] bg-base_yellow" />
                <p className=" text font-semibold"><I18N>ALL_RIGHTS_RESERVED</I18N>. Copyright {year} <I18N>DIKMEN_BELEDIYESI</I18N></p>
            </caption>
        </footer>
    )
}

export default Footer