"use client"

import I18N from "@/i18n"
import Image from "next/image"
import { usePathname } from "next/navigation";

interface about {
    name: string;
    position: string;
};

interface ImageData {
    image: string;
    alt: string;
};

interface writeup {
    title: string;
    body: string;
};
  
interface MiniterCompProp {
    imagedata: ImageData,
    about: about,
    writeup: writeup

}

type prop = {
    prop: MiniterCompProp
}
  

const MinisterComp: React.FC<prop> = ({prop}) => {
    const pathname = usePathname()
    const getPageName = pathname.split("/").filter(Boolean)
    const pageName = getPageName[getPageName.length - 1].toUpperCase()

    return(
        <div className=" flex flex-col gap-7 lg:gap-0 lg:flex-row justify-between pt-6 ">
            <div className=" flex flex-col justify-center items-center lg:items-start w-full lg:max-w-[226px] ">
                <figure className="  h-fit sm:h-[226px] w-[150px] sm:w-[198px] ">
                    <Image
                        className=" w-full h-full"
                        width={198}
                        height={226}
                        src={prop?.imagedata?.image}
                        alt={`${prop?.imagedata?.alt}`}
                    />
                </figure>
                <div className=" flex flex-col justify-center items-center ">
                    <h1 className=" text-light_dark_yellow text-[28px] ltab:text-[30px] font-semibold truncate w-full max-w-[205px] ">
                        <I18N>{prop?.about?.name}</I18N>
                    </h1>
                    <hr className=" w-full " />
                    <h2 className=" text-[14px] sm:text-[15px] text-gray-400 font-semibold ">
                        <I18N>{prop?.about?.position}</I18N>
                    </h2>
                </div>
            </div>

            <div className=" flex flex-col gap-12 w-full lg:w-[65%] xl:max-w-[577px] ">
                <h1>
                    {prop?.writeup?.title}
                </h1>
                <div className=" text font-semibold text-secondary_gray leading-6 ">
                    {prop?.writeup?.body}
                </div>
            </div>
        </div>
    )
}

export default MinisterComp