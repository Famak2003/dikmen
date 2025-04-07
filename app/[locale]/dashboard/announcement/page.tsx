'use client'

import I18N from "@/i18n"

import { RootState } from "@/lib/store"
import { Image, Switch, Table, TableColumnsType } from "antd"
import { useLocale } from "next-intl"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { LocaleType } from "../projects/page"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faImage, faPen, faPlus, faTrashAlt } from "@fortawesome/free-solid-svg-icons"
import { FormSourceDataType } from "@/types"
import { useDeleteAnnouncementMutation, useGetAnnouncementQuery } from "@/lib/api/announcementApiSlice"
import CreateAnnouncement from "../components/CreateAnnouncement"
import EditAnnouncement from "../components/EditAnouncement"
import toast from "react-hot-toast"
import AddButton from "../components/reuseable/AddButton"


const Announcement = () => {
    const allAnnouncement = useSelector((state: RootState) => state.announcement.allAnnouncement)
    const [page, setPage] = useState<number>(1)
    const perPage = 10

    const {data, refetch} = useGetAnnouncementQuery({perPage, page})
    const [deleteAnnouncement, {isSuccess, isError, isLoading: isDeleteAnnouncementLoading}] = useDeleteAnnouncementMutation()
    
    const locale = useLocale()

    const [individualData, setIndividualData] = useState<any>({})
    const [isCreateModalVisible, setisCreateModalVisible] = useState(false)
    const [isEditModalVisible, setisEditModalVisible] = useState(false)
    
    useEffect(() => {
        console.log("Refetch Announcement")
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
            title: <I18N>VISIBLE</I18N>,
            dataIndex: "visible",
            render: (_, record) => {
                return (
                    <Switch className=" scale-75 " checked={record.visible} />
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
                                    <Image className=" h-full w-full object-fill " height={70} width={70} src={imageURL} alt="Announcement Display Image" />
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
            title: <I18N>TAGS</I18N>,
            dataIndex: "tags",
            render: (tags, _) => {
                return(
                    <ul className=" flex justify-center items-center text ">
                        {tags?.map((item: string, idx: number) => {
                            const isLast = (tags.length - 1) === idx
                            return(
                                <li key={idx} className={` px-2 ${isLast ? "border-r-0" : "border-r-2"} `} >{item}</li>
                            )
                        })}
                    </ul>
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
                    deleteAnnouncement(id)
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

    console.log( "All Announcement", allAnnouncement)

    return (
        <section className=" dashboardPages ">
            <h1 className=" text30 " >
                <I18N>ANNOUNCEMENT</I18N>
            </h1>
            <div className=" flex flex-col gap-6 bg-white dark:bg-dark_side rounded-md p-6 duration-300 transition-all shadow-custom_shad5 w-full overflow-x-scroll " >

                <AddButton text="ADD_ANNOUNCEMENT" setState={setisCreateModalVisible} />

                <CreateAnnouncement isModalVisible={isCreateModalVisible} setisModalVisible={setisCreateModalVisible} />
                <EditAnnouncement data={individualData} isModalVisible={isEditModalVisible} setisModalVisible={setisEditModalVisible} />
                <Table
                    className=" w-full "
                    columns={columns}
                    dataSource={allAnnouncement.data}
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

export default Announcement