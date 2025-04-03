'use client'

import I18N from "@/i18n"
import { FormSourceDataType, LocaleType } from "@/types"
import { HolderOutlined } from "@ant-design/icons"
import { faImage, faPen, faPlus, faTrashAlt } from "@fortawesome/free-solid-svg-icons"
import { arrayMove, SortableContext, useSortable, verticalListSortingStrategy } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Button, Image, Switch, Table, TableColumnsType } from "antd"
import { useLocale } from "next-intl"
import React, { useContext, useEffect, useMemo, useState } from "react"
import { useAppDispatch, useAppSelector } from "@/lib/store"
import { restrictToVerticalAxis } from '@dnd-kit/modifiers';
import { moveRow, PagesDataType } from "@/lib/slices/pagesSlice"
import { DndContext, DragEndEvent } from "@dnd-kit/core"
import { SyntheticListenerMap } from "@dnd-kit/core/dist/hooks/utilities"
import CreatePage from "../components/CreatePage"


interface RowProps extends React.HTMLAttributes<HTMLTableRowElement> {
    "data-row-key": string;
}

interface RowContextProps {
    setActivatorNodeRef?: (element: HTMLElement | null) => void;
    listeners?: SyntheticListenerMap;
}
  
const RowContext = React.createContext<RowContextProps>({});

const DragHandle: React.FC = () => {
    const { setActivatorNodeRef, listeners } = useContext(RowContext);
    return (
      <Button
        type="text"
        size="small"
        icon={<HolderOutlined />}
        style={{ cursor: 'move' }}
        ref={setActivatorNodeRef}
        {...listeners}
      />
    );
  };
// FormSourceDataType

const Row: React.FC<RowProps> = (props) => {
    const { attributes, setNodeRef, setActivatorNodeRef, listeners, transform, transition, isDragging } = useSortable({
        id: props["data-row-key"],
    });
    const style: React.CSSProperties = {
        ...props.style,
        transform: CSS.Translate.toString(transform),
        transition,
        ...(isDragging ? { position: 'relative', zIndex: 9999 } : {}),
    };

    const contextValue = useMemo<RowContextProps>(
        () => ({ setActivatorNodeRef, listeners }),
        [setActivatorNodeRef, listeners],
    );

    return (
        <RowContext.Provider value={contextValue}>
            <tr {...props} ref={setNodeRef} style={style} {...attributes} />
        </RowContext.Provider>
    );
};


const Pages = () => {
    const dispatch = useAppDispatch();
    const dataSource = useAppSelector(state => state.pages.allPages.data);
    const [sortedArr, setSortedArr] = useState<{sort_id: number, id: number}[]>([])

    const [individualData, setIndividualData] = useState<any>({})
    const [isCreateModalVisible, setisCreateModalVisible] = useState(false)
    const [isEditModalVisible, setisEditModalVisible] = useState(false)

    const locale = useLocale()

    const columns: TableColumnsType<PagesDataType> = [
        { 
            key: "sort", 
            title: "", // Add title to avoid TypeScript errors
            align: "center", // Corrected type
            width: 80, 
            render: (_: any, record: any) => {
                return (
                    <DragHandle />
                )
            }
            
        },
        {
            title: <I18N>TITLE</I18N>,
            width: "80%",
            dataIndex: "title",
            render: (title, record) => {
                return (
                    <p>
                        {title[locale as keyof LocaleType]}
                    </p>
                )
            }
        },
        {
            title: <I18N>VISIBLE</I18N>,
            width: "15%",
            dataIndex: "visible",
            render: (_, record) => {
                return (
                    <Switch  className=" scale-75 " checked={record.visible} />
                )
            }
        },
        {
            title: <I18N>ACTION</I18N>,
            width: "5%",
            fixed: "right",
            dataIndex: "action",
            render: (_, record) => {
                const handleEditModal = () => {
                    setIndividualData(record)
                    return setisEditModalVisible(true)
                }
                // const handleDelete = () => {
                //     const id = record.id
                //     console.log(id)
                //     // deleteNews(id)
                // }
                return(
                    <div className=" flex gap-2 justify-between items-center ">
                        <FontAwesomeIcon onClick={handleEditModal} className="dashboarIcon" icon={faPen} />
                        {/* <FontAwesomeIcon onClick={handleDelete} className="dashboarIcon" icon={faTrashAlt} /> */}
                        <FontAwesomeIcon className="dashboarIcon" icon={faTrashAlt} />
                    </div>
                )
            }
        }
    ]

    const expandedRowRenderColumn: TableColumnsType<FormSourceDataType> = [
        {
            title: <I18N>TITLE</I18N>,
            dataIndex: "title",
            render: (title, record) => {
                return (
                    <p>
                        {record.title[locale as keyof LocaleType]}
                    </p>
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
                    // deleteNews(id)
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

    const expandedRowRender = () => {
        return(
            <Table<FormSourceDataType>
                columns={expandedRowRenderColumn}
                // dataSource={expandedRowRenderData}
                pagination={false}
            />
        )
    }

    

    const onDragEnd = ({ active, over }: DragEndEvent) => {
        if (active.id !== over?.id) {
            dispatch(moveRow({ activeId: active?.id, overId: over?.id }));
        }
    };

    useEffect(() => {
        // console.log(dataSource)
        setSortedArr(dataSource.map((item:any, idx) =>{
            return {
                sort_id: idx, 
                id: item.key
            }
        }))
    }, [dataSource])
    console.log("Sorted Arr \n",sortedArr)

    return(
        <section className="dashboardPages">
            <h1 className=" text30 " >
                <I18N>PAGES</I18N>
            </h1>
            <div className=" flex flex-col gap-6 bg-white dark:bg-dark_side rounded-md p-6 duration-300 transition-all shadow-custom_shad5 w-full overflow-x-scroll " >
                <button
                    onClick={() => {
                        return setisCreateModalVisible(true)
                    }}
                    className=' flex gap-4 justify-between items-center rounded-md px-4 py-2 bg-primary_black dark:bg-slate-600 w-fit text-white '>
                    <span> <I18N>ADD_PAGE</I18N> </span>
                    <FontAwesomeIcon icon={faPlus} className=' text-[20px] ' /> 
                    
                </button>
                <CreatePage isModalVisible={isCreateModalVisible} setisModalVisible={setisCreateModalVisible} />
                {/* <EditNews data={individualData} isModalVisible={isEditModalVisible} setisModalVisible={setisEditModalVisible} /> */}
                {/* <ValidatorModal handleSubmit={handleDeleteProject} title="DELETE_PROJECT" >

                </ValidatorModal> */}
                <DndContext modifiers={[restrictToVerticalAxis]} onDragEnd={onDragEnd}>
                    <SortableContext items={dataSource.map((i) => i.key)} strategy={verticalListSortingStrategy}>
                        <Table
                            className=" w-full " 
                            rowKey="key"
                            columns={columns}
                            components={{ body: { row: Row } }}
                            expandable={{expandedRowRender, defaultExpandedRowKeys: ['0']}}
                            dataSource={dataSource}
                            // pagination={{
                            //     current: page,
                            //     total: data?.total ? data?.total : 0,
                            //     pageSize: perPage,
                            //     onChange: (page) => setPage(page)
                            // }}
                        />
                    </SortableContext>
                </DndContext>
            </div>
            
        </section>
    )
}




export default Pages