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

interface ProjectContent  {
    title: LocaleType;
    content: LocaleType;
    completed: boolean;
    slug: string;
    images: string[]
}

interface CreateProjectType {
    isCreateModalVisible: boolean,
    setisCreateModalVisible: (value: any) => void
}

const CreateProject: React.FC<CreateProjectType> = ({isCreateModalVisible, setisCreateModalVisible}) => {
    const [form] = useForm()
    const [contentEN, setContentEN] = useState<string>("")
    const [contentTR, setContentTR] = useState<string>("")
    const [fileList, setFileList] = useState<UploadFile[]>([])
    // const [isCreateModalVisible, setisCreateModalVisible] = useState(false)

    const [createProject, {isSuccess, isError, isLoading: isCreateProjectLoading}] = useCreateProjectMutation()

    const [projectdata, setProjectData] = useState<ProjectContent>({
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
            const value = await form.validateFields()

            setProjectData((prev) => {
                const updatedData = {
                    ...prev,
                    completed: value.completed,
                    slug: value.slug,
                    content: {
                        en: contentEN,
                        tr: contentTR
                    },
                    title: {
                        en: value.titleEN,
                        tr: value.titleTR
                    },
                    images: fileList.map(obj => obj.url)  // Extract URL
                        .filter((url): url is string => Boolean(url)) // Remove undefined values
                }
                
                createProject(updatedData)
                // console.log(updatedData)

                return updatedData
            })

        } catch (error) {
            console.log("Form submit Failed")
            console.error("Form validation failed:", error);
        }
        
    }
    return(
        <div>
            <CustomModal handleSubmit={handleSubmit} isModalVisible={isCreateModalVisible} setisModalVisible={setisCreateModalVisible} title="ADD_NEW_PROJECT" loading={isCreateProjectLoading} >
                <ProjectsForm form={form} contentEN={contentEN} setContentEN={setContentEN} contentTR={contentTR} setContentTR={setContentTR} fileList={fileList} setFileList={setFileList} />
            </CustomModal>
        </div>
    )
}

export default CreateProject