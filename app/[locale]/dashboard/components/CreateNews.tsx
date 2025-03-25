"use client"

import React, { useEffect, useState } from "react"
import CustomModal from "./reuseable/CustomModal"
import ProjectsForm from "./reuseable/ProjectsForm"
import { UploadFile } from "antd"
import { useForm } from "antd/es/form/Form"
import { useCreateNewsMutation } from "@/lib/api/newsApiSlice"
import toast from "react-hot-toast"
import I18N from "@/i18n"
import { FormContent } from "@/types"
import NewsForm from "./reuseable/NewsForm"

// export interface ProjectContent {
//     title: LocaleType;
//     content: LocaleType;
//     completed: boolean;
//     slug: string;
//     images: string[]
// }

export interface createNewsType {
    isModalVisible: boolean,
    setisModalVisible: (value: any) => void
}

const CreateNews: React.FC<createNewsType> = ({isModalVisible, setisModalVisible}) => {
    const [form] = useForm()
    const [fileList, setFileList] = useState<UploadFile[]>([])

    const [createNews, {isSuccess, isError, isLoading: isCreateNewsLoading}] = useCreateNewsMutation()

    const [newsdata, setNewsData] = useState<FormContent>({
            title: {
                en: "",
                tr: ""
            },
            content: {
                en: "",
                tr: ""
            },
            slug: "",
            images: [] 
            
        })

    
    useEffect(() => {
        if(isError){
            toast.error(<I18N>SOMETHING_WENT_WRONG</I18N>)
        }
        if(isSuccess){
            toast.success(<I18N>UPDATED_SUCCESFULLY</I18N>)
        }
    }, [isError, isSuccess])

    const handleSubmit = async () => {
        try {
            console.log(newsdata)
            const newFileList = fileList.map((obj: any) => {
                const newUrl = obj.url.replace(process.env.NEXT_PUBLIC_BASE, '').replace('storage/projects/','')
                return newUrl
            })
            const dataToSubmit = {
                ...newsdata,
                images: newFileList
            }
            console.log(dataToSubmit)
            createNews(dataToSubmit)

        } catch (error) {
            console.log("Form submit Failed")
            console.error("Form validation failed:", error);
        }
        
    }
    return(
        <div>
            <CustomModal handleSubmit={handleSubmit} isModalVisible={isModalVisible} setisModalVisible={setisModalVisible} title="ADD_NEWS" loading={isCreateNewsLoading} >
                <NewsForm newsdata={newsdata} setNewsData={setNewsData} form={form} fileList={fileList} setFileList={setFileList} />
            </CustomModal>
        </div>
    )
}

export default CreateNews