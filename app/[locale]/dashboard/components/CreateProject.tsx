"use client"

import React, { useEffect, useState } from "react"
import CustomModal from "./reuseable/CustomModal"
import ProjectsForm from "./reuseable/ProjectsForm"
import { UploadFile } from "antd"
import { useForm } from "antd/es/form/Form"
import { useCreateProjectMutation } from "@/lib/api/profileApiSlice"
import { LocaleType } from "../projects/page"
import toast from "react-hot-toast"
import I18N from "@/i18n"
import { FormContent } from "@/types"

// export interface ProjectContent {
//     title: LocaleType;
//     content: LocaleType;
//     completed: boolean;
//     slug: string;
//     images: string[]
// }

export interface createProjectType {
    isModalVisible: boolean,
    setisModalVisible: (value: any) => void
}

const CreateProject: React.FC<createProjectType> = ({isModalVisible, setisModalVisible}) => {
    const [form] = useForm()
    const [fileList, setFileList] = useState<UploadFile[]>([])

    const [createProject, {isSuccess, isError, isLoading: isCreateProjectLoading}] = useCreateProjectMutation()

    const [projectdata, setProjectData] = useState<FormContent>({
            title: {
                en: "",
                tr: ""
            },
            content: {
                en: "",
                tr: ""
            },
            completed: false,
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
            form.validateFields
            console.log(projectdata)
            const newFileList = fileList.map((obj: any) => {
                const newUrl = obj.url.replace(process.env.NEXT_PUBLIC_BASE, '')
                return newUrl
            })
            const dataToSubmit = {
                ...projectdata,
                images: newFileList
            }
            console.log(dataToSubmit)
            createProject(dataToSubmit)

        } catch (error) {
            console.log("Form submit Failed")
            console.error("Form validation failed:", error);
        }
        
    }
    return(
        <div>
            <CustomModal handleSubmit={handleSubmit} isModalVisible={isModalVisible} setisModalVisible={setisModalVisible} title="ADD_PROJECT" loading={isCreateProjectLoading} >
                <ProjectsForm projectdata={projectdata} setProjectData={setProjectData} form={form} fileList={fileList} setFileList={setFileList} />
            </CustomModal>
        </div>
    )
}

export default CreateProject