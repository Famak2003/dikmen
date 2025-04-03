"use client"

import I18N from "@/i18n";
import { faEye, faImage, faPlus, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Image, Switch, Table, TableColumnsType } from "antd"
import { useEffect, useState } from "react";
import { useDeleteProjectMutation, useGetProfileQuery } from "@/lib/api/profileApiSlice";
import toast from "react-hot-toast";
import { useLocale } from "next-intl";
import CreateProject from "../components/CreateProject";
import EditProject from "../components/EditProject";
import { useSelector } from "react-redux";
import { RootState } from "@/lib/store";
import { FormSourceDataType } from "@/types";

export interface LocaleType {
    en: string;
    tr: string;
}



const Projects = () => {

    const allProject = useSelector((state: RootState) => state.projects.allProjects)
    const [individualData, setIndividualData] = useState<any>({})

    const locale = useLocale()
    const [isCreateModalVisible, setisCreateModalVisible] = useState(false)
    const [isEditModalVisible, setisEditModalVisible] = useState(false)
    const [page, setPage] = useState<number>(1)
    
    const perPage = 10
    const [deleteProject, {isSuccess, isError, isLoading: isDeleteProjectLoading}] = useDeleteProjectMutation()
    
    const {data, refetch} = useGetProfileQuery({perPage, page}, { refetchOnMountOrArgChange: true })

    useEffect(() => {
        if(isError){
            toast.error(<I18N>SOMETHING_WENT_WRONG</I18N>)
        }
        if(isSuccess){
            toast.success(<I18N>PROJECTS_DELETED</I18N>)
        }
    }, [isError, isSuccess])
    
    useEffect(() => {
        refetch();
    }, [])


    const columns: TableColumnsType<FormSourceDataType> = [
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
            render: (displayImage, _) => {
                const imageURL = process.env.NEXT_PUBLIC_BASE + displayImage
                return(
                    <div className=" flex justify-center items-center ">
                        {
                            displayImage ? (
                                <figure className=" w-[70px] aspect-square rounded-md overflow-hidden border-dark_yellow ">
                                    <Image className=" h-full w-full object-fill " height={70} width={70} src={imageURL} alt="Project Display Image" />
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
                const date = new Date(record.updated_at);
                const formatedDate = date.toLocaleString()
                return(
                    <p>{formatedDate}</p>
                )
            }
        },
        {
            title: <I18N>ACTION</I18N>,
            fixed: "right",
            dataIndex: "action",
            render: (_, record) => {
                const handleEditModal = () => {
                    setIndividualData(record)
                    return setisEditModalVisible(true)
                }
                const handleDelete = () => {
                    const id = record.id
                    console.log(id)
                    deleteProject(id)
                }
                return(
                    <div className=" flex gap-2 justify-between items-center ">
                        <FontAwesomeIcon onClick={handleEditModal} className="dashboarIcon" icon={faEye} />
                        <FontAwesomeIcon onClick={handleDelete} className="dashboarIcon" icon={faTrashAlt} />
                    </div>
                )
            }
        },
    ]

    // console.log(allProject?.data)

    return (
        <section className=" dashboardPages " >
            <h1 className=" text30 " >
                <I18N>PROJECTS</I18N>
            </h1>
            
            <div className=" flex flex-col gap-6 bg-white dark:bg-dark_side rounded-md p-6 duration-300 transition-all shadow-custom_shad5 w-full overflow-x-scroll " >
                <button
                    onClick={() => {
                        return setisCreateModalVisible(true)
                    }}
                    className=' flex gap-4 justify-between items-center rounded-md px-4 py-2 bg-primary_black dark:bg-slate-600 w-fit text-white '>
                    <span> <I18N>ADD_PROJECT</I18N> </span>
                    <FontAwesomeIcon icon={faPlus} className=' text-[20px] ' /> 
                    
                </button>
                <CreateProject isModalVisible={isCreateModalVisible} setisModalVisible={setisCreateModalVisible} />
                <EditProject data={individualData} isModalVisible={isEditModalVisible} setisModalVisible={setisEditModalVisible} />
                {/* <ValidatorModal handleSubmit={handleDeleteProject} title="DELETE_PROJECT" >

                </ValidatorModal> */}
                <Table
                    className=" w-fit "
                    scroll={{ x: 'max-content' }}
                    columns={columns}
                    dataSource={allProject?.data}
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