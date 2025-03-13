import I18N from "@/i18n"
import { faArrowDown, faLongArrowAltDown, faLongArrowAltUp } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Image from "next/image"

const TendersData = [
    {
        title: "Aknar Sitesi Park Büfe İhale",
        date: "22.02.2025"
    },
    {
        title: "Aknar Sitesi Park Büfe İhale",
        date: "22.02.2025"
    },
    {
        title: "Aknar Sitesi Park Büfe İhale",
        date: "22.02.2025"
    },
]

const Tenders = () => {
    return(
        <div className=" flex flex-col gap-3 subPageSection " >
            <div className=" flex gap-2 w-full justify-end items-center  ">
                <span>
                    <I18N>SORT_BY_DATE</I18N>
                </span>
                <div className=" flex " >
                    <span>
                        <FontAwesomeIcon icon={faLongArrowAltDown} />
                    </span>
                    <span>
                        <FontAwesomeIcon icon={faLongArrowAltUp} />
                    </span>
                </div>
            </div>
            <ul className=" flex flex-col gap-2 w-full bg-section_bg p-2 " >
                {
                    TendersData.map((obj, idx) => {
                        return(
                            <li className=" flex gap-2 mobile:gap-5 text16 text-secondary_gray bg-white hover:bg-pale_yellow pl-3 pr-6 h-[90px] w-full ">
                                <figure className=" max-w-[50px] md:max-w-[69px] w-full aspect-square " >
                                    <Image 
                                        className="h-full w-full"
                                        height={69}
                                        width={69}
                                        src={"/static/svg/floatingLogo.svg"}
                                        alt="dikmen logo"
                                    />
                                </figure>
                                <div className=" flex justify-between items-center flex-1 gap-2">
                                    <div className=" flex flex-col  uppercase font-bold ">
                                        <span><I18N>DIKMEN_MUNICIPALITY</I18N></span>
                                        <span><I18N>MANAGEMENT</I18N></span>
                                    </div>
                                    <span className=" tracking-[-1%] line-clamp-2 " >
                                        {obj.title}
                                    </span>
                                    <span>
                                        {obj.date}
                                    </span>
                                </div>
                            </li>
                        )
                    })
                }
            </ul>

        </div>
    )
}

export default Tenders