import I18N from "@/i18n"
import { FC } from "react"

type CategoryType = {
    state: string,
    handleClick: (tag: string) => void,
    title: string,
    tag: string,
}

const Category: FC<CategoryType> = ({state, handleClick, title, tag}) => {
    return (
        <div onClick={() => handleClick(tag) } className={` cursor-pointer flex items-center justify-center text16 font-bold border-r h-[19px] w-fit px-5 ${state === tag ? "text-dark_yellow" : "text-gray-300 hover:text-faint_gray"} transition-all duration-300 `}><I18N>{title}</I18N></div>
    )
}

export default Category