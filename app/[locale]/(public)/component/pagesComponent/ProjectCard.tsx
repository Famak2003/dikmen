import I18N from "@/i18n"
import Image from "next/image"

const ProjectsCard = ({image, title, name}: {image?: string, title?: string, name?: string}) => {
    return (
        <li className=" flex flex-col gap-3 p-[10px] bg-white max-w-[274px] w-full h-[454px] rounded-2xl shadow-custom_shad4 ">
            {
                image ? (
                    <figure className=" w-full max-w-[254px] h-full max-h-[240px] overflow-hidden rounded-2xl " >
                        <Image
                            className=" object-cover h-full w-full"
                            src={image}
                            width={254}
                            height={240}
                            alt="profile image"
                        />
                    </figure>
                )
                : (
                    <div className=" w-full max-w-[153px] h-full max-h-[175px] bg-section_bg ">
                        
                    </div>
                )
            }
            <div className=" flex flex-col gap-2 ">
                <span className=" text-dark_yellow text-xs font-semibold capitalize " ><I18N>COMPLETED_PROJECTS</I18N></span>
                <h1 className="text-gray-500 line-clamp-2 font-bold text-xl tab:text-2xl " >{name}</h1>
                <span className="text-gray-600 line-clamp-2 text font-bold "> {title ?? <I18N>NO_CONTENT</I18N>} </span>
                <span className=" self-center text-dark_yellow border-b border-dark_yellow "><I18N>DETAIL</I18N></span>
            </div>
        </li>
    )
}

export default ProjectsCard