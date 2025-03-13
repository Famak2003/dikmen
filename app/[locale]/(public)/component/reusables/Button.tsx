import I18N from "@/i18n"
import { FC } from "react"

type Buttontype = {
    handleClick: (...args: any) => any,
    text: string,
    className?: string
}

const Button: FC<Buttontype> = ({handleClick, text, className}) => {
    return(
        <button onClick={() => handleClick()} className={` self-end flex justify-center items-center text text-dark_yellow w-fit font-bold p-3 bg-base_yellow hover:scale-95 duration-300 transition-all ${className} `}>
            <I18N>{text}</I18N>
        </button>
    )
}

export default Button