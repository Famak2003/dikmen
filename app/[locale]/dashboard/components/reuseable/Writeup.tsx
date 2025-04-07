import { SubPageType } from "@/types";
import TitleContent from "./TitleContent";
import React from "react";

const Writeup:React.FC<SubPageType> = ({data, setData, fileList, setFileList, form}) => {
    return(
        <>
            <div className=" flex flex-col md:flex-row justify-between items-start gap-3 " >
                <TitleContent data={data} setData={setData} locale={"en"} form={form} />
                <TitleContent data={data} setData={setData} locale={"tr"} form={form} />
            </div>
        </>
    )
}

export default Writeup;