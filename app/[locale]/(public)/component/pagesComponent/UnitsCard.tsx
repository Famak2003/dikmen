import I18N from "@/i18n"
import Image from "next/image"


const UnitsCard = ({image, title, name}: {image?: string, title?: string, name?: string}) => {
    return (
        <li className=" flex flex-col gap-3 p-3 bg-white max-w-[172px] w-full h-[150px] ">
            {
                image ? (
                    <figure className=" flex justify-center items-center ring-1 ring-section_bg w-full max-w-[153px] h-full max-h-[90px] " >
                        <Image
                            className=" object-cover h-fit w-fit"
                            src={image}
                            width={153}
                            height={90}
                            alt="profile image"
                        />
                    </figure>
                )
                : (
                    <div className=" w-full max-w-[153px] h-full max-h-[175px] bg-section_bg ">
                        
                    </div>
                )
            }
            <div className=" flex items-center justify-start ">
                <span className=" text-dark_gray text font-bold "> <I18N>{title ?? "NO_CONTENT"}</I18N> </span>
            </div>
        </li>
    )
}

export default UnitsCard