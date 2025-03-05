"use client"

import I18N from "@/i18n"
import Image from "next/image"
import Socials from "./reusables/Socials"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleDown } from "@fortawesome/free-solid-svg-icons"

const MAYOR =  '/static/svg/mayor.svg'

const MayorStripeData = [
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

const MayorStripe = () => {
    return(
        <section id="mayorStrip" className="  flex justify-center items-center w-screen mt-32 shadow-custom_shad2  ">
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
                <div id="mayorStripList" className=" w-full xl:w-[65%] h-[120px] mobile:h-[100px] md:h-[75px] pl-4 pr-4 py-2 sm:py-0 tab:pl-5 xl:pl-3 flex justify-between gap-1 bg-base_yellow ">
                    <ul  className=" flex-1 flex flex-wrap gap-2 md:gap-0 md:flex-row items-center justify-center md:justify-between tab:justify-normal " >
                        {
                            MayorStripeData.map((obj, idx) => {
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
    )
}

export default MayorStripe