"use client"

import I18N from "@/i18n";
import { faEye, faImage, faPlus, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Form, Image, Input, Switch, Table, TableColumnsType, UploadFile } from "antd"
import { useEffect, useState } from "react";
import { projectType, useCreateProjectMutation, useEditProjectMutation, useGetProfileQuery } from "@/lib/api/profileApiSlice";
import toast from "react-hot-toast";
import { useForm } from "antd/es/form/Form";
import { getLocale } from "next-intl/server";
import { useLocale } from "next-intl";
import EditModal from "../components/reuseable/EditModal";
import ProjectsForm from "../components/reuseable/ProjectsForm";
import CustomModal from "../components/reuseable/CustomModal";
import CreateProject from "../components/CreateProject";

export interface LocaleType {
    en: string;
    tr: string;
}

interface ProjectContent  {
    title: LocaleType;
    content: LocaleType;
    completed: boolean;
    slug: string;
    images: string[]
}



const Projects = () => {
    const [form] = useForm()
    const locale = useLocale()
    const [isCreateModalVisible, setisCreateModalVisible] = useState(false)
    const [isEditModalVisible, setisEditModalVisible] = useState(false)
    const [page, setPage] = useState<number>(1)
    
    const [contentEN, setContentEN] = useState<string>("")
    const [fileList, setFileList] = useState<UploadFile[]>([])
    
    const [contentTR, setContentTR] = useState<string>("")
    const perPage = 10
    const [createProject, {isSuccess, isError, isLoading: isCreateProjectLoading}] = useCreateProjectMutation()
    const [editProject, {isSuccess: isEditProfileSuccess, isError: isEditProfileError, isLoading: isEditProfileLoading}] = useEditProjectMutation()
    
    const {data, refetch} = useGetProfileQuery({perPage, page})
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
    
    useEffect(() => {
        refetch()
    }, [])

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

    const handleEditSubmit = () => {
        console.log("Edit modal submit")
    }


    const columns: TableColumnsType<projectType> = [
        {
            title: <I18N>TITLE</I18N>,
            dataIndex: "title",
            // fixed: "left",
            defaultSortOrder: "ascend",
            sorter: (a, b) => a.title.en.length - b.title.en.length,
            sortDirections: ['descend'],
            render: (title, record) => {
                return (
                    <p>
                        {record.title[locale as keyof LocaleType]}
                    </p>
                )
            }
        },
        {
            title: <I18N>COMPLETED_PROJECTS</I18N>,
            dataIndex: "completed",
            filters: [
                {
                    text: <I18N>COMPLETED_PROJECTS</I18N>,
                    value: true
                },
                {
                    text: <I18N>ONGOING_PROJECTS</I18N>,
                    value: false
                },
            ],
            onFilter: (value, record) => record.completed === value,
            render: (_, record) => {
                return (
                    <Switch checked={record.completed} />
                )
            }
        },
        {
            title: <I18N>IMAGES</I18N>,
            dataIndex: "display_image",
            render: (diaplayImage, _) => {
                return(
                    <div className=" flex justify-center items-center ">
                        {
                            diaplayImage ? (
                                <figure className=" w-[70px] aspect-square rounded-md overflow-hidden border-dark_yellow ">
                                    <Image className=" h-full w-full object-fill " height={70} width={70} src={diaplayImage} alt="Project Display Image" />
                                </figure>
                            ) : (
                                <FontAwesomeIcon className=" imageIcon " icon={faImage} />
                            )
                        }
                    </div>
                )
            }
        },
        {
            title: <I18N>CONTENT</I18N>,
            width: "500px",
            dataIndex: "content",
            render: (content, record) => {
                return(
                    <div dangerouslySetInnerHTML={{__html:content.en}} className=" line-clamp-4 "/>
                )
            }
        },
        {
            title: <I18N>SLUG</I18N>,
            dataIndex: "slug",
            render: (_, record) => {
                return(
                    <p>{record.slug}</p>
                )
            }
        },
        {
            title: <I18N>UPDATED</I18N>,
            dataIndex: "updated",
            render: (_, record) => {
                return(
                    <p>{record.updated_at}</p>
                )
            }
        },
        {
            title: <I18N>ACTION</I18N>,
            fixed: "right",
            dataIndex: "action",
            render: (_, record) => {
                return(
                    <div className=" flex gap-2 justify-between items-center ">
                        <FontAwesomeIcon onClick={() => setisEditModalVisible(true)} className="dashboarIcon" icon={faEye} />
                        <FontAwesomeIcon className="dashboarIcon" icon={faTrashAlt} />
                    </div>
                )
            }
        },
    ]
    


    return (
        <section className=" relative flex-1 flex flex-col gap-6 justify-center " >
            <h1 className=" text-[30px] font-bold " >
                <I18N>PROJECTS</I18N>
            </h1>
            
            <div className=" flex flex-col gap-6 bg-white dark:bg-dark_side rounded-md p-6 duration-300 transition-all shadow-custom_shad5 w-full overflow-x-scroll " >
                <button
                    onClick={() => {
                        return setisCreateModalVisible(true)
                    }}
                    className=' flex gap-4 justify-between items-center rounded-md px-4 py-2 bg-primary_black dark:bg-slate-600 w-fit text-white '>
                    <span> <I18N>ADD_NEW_PROJECT</I18N> </span>
                    <FontAwesomeIcon icon={faPlus} className=' text-[20px] ' /> 
                    
                </button>
                {/* <CustomModal handleSubmit={handleSubmit} isModalVisible={isCreateModalVisible} setisModalVisible={setisCreateModalVisible} title="ADD_NEW_PROJECT" loading={isCreateProjectLoading} >
                    <ProjectsForm form={form} contentEN={contentEN} setContentEN={setContentEN} contentTR={contentTR} setContentTR={setContentTR} fileList={fileList} setFileList={setFileList} />
                </CustomModal> */}
                <CreateProject isCreateModalVisible={isCreateModalVisible} setisCreateModalVisible={setisCreateModalVisible} />
                <EditModal title="EDIT_PROJECT" loading={isEditProfileLoading} setisEditModalVisible={setisEditModalVisible} isEditModalVisible={isEditModalVisible} handleSubmit={handleEditSubmit}  >
                    <ProjectsForm form={form} contentEN={contentEN} setContentEN={setContentEN} contentTR={contentTR} setContentTR={setContentTR} fileList={fileList} setFileList={setFileList} />
                </EditModal>
                <Table 
                    className=" w-fit  " 
                    scroll={{ x: 'max-content' }}
                    columns={columns}
                    dataSource={data?.data}
                    pagination={{
                        current: page,
                        total: data?.total ? data?.total : 0,
                        pageSize: perPage,
                        onChange: (page) => setPage(page)
                    }}
                />
            </div>
        </section>
    )
}

export default Projects