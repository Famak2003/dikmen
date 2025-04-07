'use client'

import I18N from "@/i18n"
import { useDeleteNewsMutation, useGetNewsQuery } from "@/lib/api/newsApiSlice"
import { RootState } from "@/lib/store"
import { Image, Switch, Table, TableColumnsType } from "antd"
import { useLocale } from "next-intl"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { LocaleType } from "../projects/page"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faImage, faPen, faPlus, faTrashAlt } from "@fortawesome/free-solid-svg-icons"
import CreateNews from "../components/CreateNews"
import { FormSourceDataType } from "@/types"
import EditNews from "../components/EditNews"
import AddButton from "../components/reuseable/AddButton"


const News = () => {
    const allNews = useSelector((state: RootState) => state.news.allNews)
    const [page, setPage] = useState<number>(1)
    const perPage = 10

    const {data, refetch} = useGetNewsQuery({perPage, page}, { refetchOnFocus: true })
    const [deleteNews, {isSuccess, isError, isLoading: isDeleteNewsLoading}] = useDeleteNewsMutation()
    
    const locale = useLocale()

    const [individualData, setIndividualData] = useState<any>({})
    const [isCreateModalVisible, setisCreateModalVisible] = useState(false)
    const [isEditModalVisible, setisEditModalVisible] = useState(false)
    
    useEffect(() => {
        console.log("Refetch news")
        refetch()
    }, [])

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
            filters: [
                {
                    text: <I18N>VISIBLE</I18N>,
                    value: true
                },
                {
                    text: <I18N>HIDDEN</I18N>,
                    value: false
                },
            ],
            onFilter: (value, record) => record.completed === value,
            render: (_, record) => {
                return (
                    <Switch checked={record.visible} />
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
                                    <Image className=" h-full w-full object-fill " height={70} width={70} src={imageURL} alt="News Display Image" />
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
                    deleteNews(id)
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

    console.log(data)

    return (
        <section className=" dashboardPages ">
            <h1 className=" text30 " >
                <I18N>NEWS</I18N>
            </h1>
            <div className=" flex flex-col gap-6 bg-white dark:bg-dark_side rounded-md p-6 duration-300 transition-all shadow-custom_shad5 w-full overflow-x-scroll " >
                
                <AddButton text="ADD_NEWS" setState={setisCreateModalVisible} />

                <CreateNews isModalVisible={isCreateModalVisible} setisModalVisible={setisCreateModalVisible} />
                <EditNews data={individualData} isModalVisible={isEditModalVisible} setisModalVisible={setisEditModalVisible} />
                {/* <ValidatorModal handleSubmit={handleDeleteProject} title="DELETE_PROJECT" >

                </ValidatorModal> */}
                <Table
                    className=" w-full " 
                    columns={columns}
                    dataSource={allNews.data}
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

export default News