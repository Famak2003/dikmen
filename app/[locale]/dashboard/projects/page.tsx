"use client"

import I18N from "@/i18n";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Form, Image, Input, Switch, Table, TableColumnsType, UploadFile } from "antd"
import { useEffect, useMemo, useState } from "react";
import CreateModal from "../components/reuseable/CreateModal";
import { useCreateProjectMutation, useGetProfileQuery } from "@/lib/api/profileApiSlice";
import TextEditor from "../components/reuseable/TextEditor";
import dynamic from "next/dynamic";
import ProjectsForm from "../components/reuseable/ProjectsForm";
import TitleContent from "../components/reuseable/TitleContent";
import ImageUpload from "../components/reuseable/ImageUpload";
import toast from "react-hot-toast";

interface DataType {
    key: React.Key;
    title: string;
    content: string;
    image: string;
    completed: boolean;
    slug: string;
    updatedAt: string
}

// interface LanguageContent {
//     title: string;
//     content: string;
// }
interface Locale {
    en: string;
    tr: string;
}

interface ProjectContent  {
    // en: LanguageContent;
    // tr: LanguageContent;
    title: Locale;
    content: Locale;
    completed: boolean;
    slug: string;
    images: string[]
}

const columns: TableColumnsType<DataType> = [
    {
        title: <I18N>TITLE</I18N>,
        dataIndex: "title",
        defaultSortOrder: "ascend",
        sorter: (a, b) => a.title.length - b.title.length,
        sortDirections: ['descend'],
        render: (title, record) => {
            console.log(title)
            return (
                <p>
                    {record.title}
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
        dataIndex: "images",
        render: (_, record) => {
            console.log("This are all the images: =>>", record.image)
            return(
                <div>Images should be here</div>
            )
        }
    },
    {
        title: <I18N>CONTENT</I18N>,
        dataIndex: "content",
        render: (_, record) => {
            return(
                <p>{record.content}</p>
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
                <p>{record.updatedAt}</p>
            )
        }
    },
    {
        title: <I18N>ACTION</I18N>,
        dataIndex: "action",
        render: (_, record) => {
            return(
                <div>{record.content}</div>
            )
        }
    },
]

const Projects = () => {
    const [changes, setChanges] = useState<boolean>(false)
    const [isCreateModalVisible, setisCreateModalVisible] = useState(false)
    const [page, setPage] = useState<number>(1)
    
    const [contentEN, setContentEN] = useState<string>("")
    const [fileList, setFileList] = useState<UploadFile[]>([])
    
    const [contentTR, setContentTR] = useState<string>("")
    // const [fileListTR, setFileListTR] = useState<UploadFile[]>([])
    const perPage = 10
    const [createProject, {data: projectCreatedData, isSuccess, isError, isLoading: isCreateProjectLoading}] = useCreateProjectMutation()
    const {data, error, isLoading, refetch} = useGetProfileQuery({perPage, page})
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
            toast.error(<I18N>UPDATED_SUCCESFULLY</I18N>)
        }
    }, [isError, isSuccess])
    
    useEffect(() => {
        refetch()
    }, [])
    // console.log(projectCreatedData)

    const handleSubmit = () => {
        createProject(projectdata)
        console.log(projectdata)
    }
    

    const handleFormSubmit = (value: any) => {
        setProjectData((prev) => {
            return {
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
        })
        toast.success(<I18N>SAVED</I18N>)
        
    }
    // console.log(changes)
    // console.log(data)
    


    return (
        <section className=" relative flex-1 flex flex-col gap-6 justify-center " >
            <h1 className=" text-[30px] font-bold " >
                <I18N>PROJECTS</I18N>
            </h1>
            
            <div className=" flex flex-col gap-6 bg-white dark:bg-dark_side rounded-md p-6 duration-300 transition-all shadow-custom_shad5 " >
                <button
                    onClick={() => {
                        return setisCreateModalVisible(true)
                    }}
                    className=' flex gap-4 justify-between items-center rounded-md px-4 py-2 bg-primary_black dark:bg-slate-600 w-fit text-white '>
                    <span> <I18N>ADD_NEW_PROJECT</I18N> </span>
                    <FontAwesomeIcon icon={faPlus} className=' text-[20px] ' /> 
                    
                </button>
                <CreateModal handleSubmit={handleSubmit} isCreateModalVisible={isCreateModalVisible} setisCreateModalVisible={setisCreateModalVisible} title="ADD_NEW_PROJECT" loading={isCreateProjectLoading} >
                    <Form
                        className=" w-full h-full "
                        onValuesChange={() => setChanges(true)}
                        onFinish={handleFormSubmit}
                        layout="vertical"
                    >
                        <div className=" flex flex-col md:flex-row justify-between items-start gap-3 " >
                            <TitleContent locale={"EN"} content={contentEN} setContent={setContentEN} />
                            <TitleContent locale={"TR"} content={contentTR} setContent={setContentTR} />
                        </div>
                        <Form.Item 
                            required
                            name={"slug"}
                            label={<I18N>SLUG</I18N>}
                        >
                            <Input className="inputStyle" placeholder={"İçerik Slug"} />
                        </Form.Item>
                        <Form.Item 
                            required
                            name={"completed"}
                            label={<I18N>COMPLETED</I18N>}
                        >
                            <Switch />
                        </Form.Item>
                        <Form.Item 
                            required
                            name={"images"}
                            label={<I18N>IMAGES</I18N>}
                        >
                            <ImageUpload setFileList={setFileList} fileList={fileList}  />
                        </Form.Item>
                        <Form.Item>
                            <button className=" py-2 px-5 text-white hover:text-gray-200 rounded-md bg-green-400 " type="submit" >
                                save
                            </button>
                        </Form.Item>

                    </Form>
                </CreateModal>
                <Table 
                    className=" w-full " 
                    columns={columns}
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