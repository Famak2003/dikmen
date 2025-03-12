import I18N from "@/i18n"
import Image from "next/image"

const City_Council_Member_Card = ({image, title, name}: {image?: string, title?: string, name?: string}) => {
    return (
        <li className=" flex flex-col gap-3 pt-8 pb-5 px-2 bg-white max-w-[172px] w-full h-[288px] ">
            {
                image ? (
                    <figure className=" w-full max-w-[153px] h-full max-h-[175px] " >
                        <Image
                            className=" object-cover h-full w-full"
                            src={image}
                            width={153}
                            height={175}
                            alt="profile image"
                        />
                    </figure>
                )
                : (
                    <div className=" w-full max-w-[153px] h-full max-h-[175px] bg-section_bg ">
                        
                    </div>
                )
            }
            <div className=" flex flex-col ">
                <h1 className=" text-dark_gray font-bold text16 " >{name}</h1>
                <span className=" text-faint_gray text font-bold "> <I18N>{title ?? "NO_CONTENT"}</I18N> </span>
            </div>
        </li>
    )
}

export default City_Council_Member_Card