'use client'

import I18N from "@/i18n"
import { RootState } from "@/lib/store"
import { Image, Table, TableColumnsType } from "antd"
import { useLocale } from "next-intl"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { LocaleType } from "../projects/page"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faImage, faPen, faPlus, faTrashAlt } from "@fortawesome/free-solid-svg-icons"
import { FormSourceDataType } from "@/types"
import toast from "react-hot-toast"
import { useDeleteEventsMutation, useGetEventsQuery } from "@/lib/api/eventsApiSlice"
import CreateEvents from "../components/CreateEvents"
import EditEvents from "../components/EditEvents"


const Events = () => {
    const allEvents = useSelector((state: RootState) => state.events.allEvents)
    const [page, setPage] = useState<number>(1)
    const perPage = 10

    const {data, refetch} = useGetEventsQuery({perPage, page})
    const [deleteEvents, {isSuccess, isError, isLoading: isDeleteEventsLoading}] = useDeleteEventsMutation()
    
    const locale = useLocale()

    const [individualData, setIndividualData] = useState<any>({})
    const [isCreateModalVisible, setisCreateModalVisible] = useState(false)
    const [isEditModalVisible, setisEditModalVisible] = useState(false)
    
    useEffect(() => {
        console.log("Refetch Events")
        refetch()
    }, [])

    useEffect(() => {
            if(isError){
                toast.error(<I18N>SOMETHING_WENT_WRONG</I18N>)
            }
            if(isSuccess){
                toast.success(<I18N>PROJECTS_DELETED</I18N>)
            }
        }, [isError, isSuccess])

    const columns: TableColumnsType<FormSourceDataType> = [
        {
            title: <I18N>TITLE</I18N>,
            minWidth: 150,
            dataIndex: "title",
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
            title: <I18N>DATE_AND_TIME</I18N>,
            minWidth: 200,
            dataIndex: "datetime",
            onFilter: (value, record) => record.completed === value,
            render: (_, record) => {
                const date = new Date(record?.datetime ?? "")
                const formatedDate = date.toLocaleString()
                return(
                    <p>{formatedDate}</p>
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
                                    <Image className=" h-full w-full object-fill " height={70} width={70} src={imageURL} alt="Events Display Image" />
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
            title: <I18N>EVENT_TYPE</I18N>,
            minWidth: 130,
            dataIndex: "type",
            render: (type, _) => {
                return(
                    <p>
                        {type}
                    </p>
                )
            }
        },
        {
            title: <I18N>CONTENT</I18N>,
            minWidth: 400,
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
                    deleteEvents(id)
                }
                return(
                    <div className=" flex gap-2 justify-between items-center ">
                        <FontAwesomeIcon onClick={handleEditModal} className="dashboarIcon" icon={faPen} />
                        <FontAwesomeIcon onClick={handleDelete} className="dashboarIcon" icon={faTrashAlt} />
                    </div>
                )
            }
        },
    ]

    return (
        <section className=" dashboardPages ">
            <h1 className=" text30 " >
                <I18N>EVENTS</I18N>
            </h1>
            <div className=" flex flex-col gap-6 bg-white dark:bg-dark_side rounded-md p-6 duration-300 transition-all shadow-custom_shad5 w-full overflow-x-scroll " >
                <button
                    onClick={() => {
                        return setisCreateModalVisible(true)
                    }}
                    className=' flex gap-4 justify-between items-center rounded-md px-4 py-2 bg-primary_black dark:bg-slate-600 w-fit text-white '>
                    <span> <I18N>ADD_EVENTS</I18N> </span>
                    <FontAwesomeIcon icon={faPlus} className=' text-[20px] ' /> 
                    
                </button>
                <CreateEvents isModalVisible={isCreateModalVisible} setisModalVisible={setisCreateModalVisible} />
                <EditEvents data={individualData} isModalVisible={isEditModalVisible} setisModalVisible={setisEditModalVisible} />
                <Table
                    className=" w-full " 
                    columns={columns}
                    dataSource={allEvents.data}
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

export default Events