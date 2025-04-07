"use client"

import I18N from "@/i18n"
import { CustomFormType, FormContent, PageFormType } from "@/types";
import { Form, Input, Select } from "antd"
import OfficialMessage from "./OfficialMessage";
import { useEffect, useState } from "react";
import { SubPagesDataType } from "../CreateSubpage";
import Writeup from "./Writeup";
import GridLayout from "./GridLayout";

interface SubpageFormType extends CustomFormType {
    subPagedata: SubPagesDataType;
    setSubPageData: (value:any) => void;
    subPageState: FormContent;
    setSubPageState: (value:any) => void;
}

const SubPageForm: React.FC<SubpageFormType> = ({subPagedata, setSubPageData, fileList, setFileList, subPageState, setSubPageState, form}) => {
    const [spreadChildren, setSpreadChildren] = useState("")
    const handleTitle = (e: React.ChangeEvent<HTMLInputElement>, locale: string) => {
        const newValue = e.target.value;
        setSubPageData((prev: any) => ({
            ...prev,
            title: {
                ...prev.title,
                [locale]: newValue,
            },
        }));
    }

    const ChooseChildrenForm = (type: string) => {
        switch (type) {
            case "official_message":
                return <OfficialMessage data={subPageState} setData={setSubPageState} setFileList={setFileList} fileList={fileList} form={form} />
            case "write_up":
                return <Writeup data={subPageState} setData={setSubPageState} setFileList={setFileList} fileList={fileList} form={form} />
            case "grid layout":
                return <GridLayout data={subPageState} setData={setSubPageState} setFileList={setFileList} fileList={fileList} form={form} />
            default:
                return <></>
        }
    }

    const handleSelect = (e:any) => {
        // console.log(e)
        setSpreadChildren(e)
        setSubPageData((prev: any) => ({
            ...prev,
            type: e
        }));
    }


    useEffect(() => {
        console.log("Changed")
        setSubPageState({
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
        setFileList([])
    }, [spreadChildren])

    return(
        <Form 
            className=" w-full h-full "
            form={form}
            layout="vertical"
        >
            <div className=" flex flex-col md:flex-row justify-between items-start w-full h-fit gap-3 " >
                <div className=" flex flex-col w-full" >
                    <h1 className=" text16 p-3 rounded-md bg-gray-300 md:bg-transparent italic uppercase" >EN</h1>
                    <Form.Item
                        required
                        name={`titleEN`}
                        label={ "Page Title" }
                        className=" w-full"
                    >
                        <Input className=" w-full inputStyle" value={subPagedata.title?.en} onChange={(e) => handleTitle(e, 'en')} placeholder={`Input Title here`} />
                    </Form.Item>
                </div>
                <div className=" flex flex-col w-full " >
                    <h1 className=" text16 p-3 rounded-md bg-gray-300 md:bg-transparent italic uppercase" >TR</h1>
                    <Form.Item
                        required
                        name={`titleTR`}
                        label={ "Sayfa Başlığı" }
                        className=" w-full"
                    >
                        <Input className=" w-full inputStyle" value={subPagedata.title?.tr} onChange={(e) => handleTitle(e, 'tr')} placeholder={"Başlığı buraya girin"} />
                    </Form.Item>
                </div>
            </div>
            <Form.Item 
                required
                name={"slug"}
                label={<I18N>SLUG</I18N>}>
                <Input
                    onChange={(e) => {
                        setSubPageData((prev: any) => {
                            return { 
                                ...prev,
                                slug: e.target.value
                            }
                        })
                    } } 
                    className="inputStyle"
                    placeholder={"İçerik Slug"}
                />
            </Form.Item>
            <Form.Item
                required
                name={`type`}
                label={ "Type" }
                className=" w-full md:w-1/2 "
            >
                <Select 
                    onChange={handleSelect}
                    className="inputStyle"
                    // mode="multiple"
                    options={
                        [
                            {name: 'project', value: 'project'}, 
                            {name: 'event', value: 'event'}, 
                            {name: 'announcement', value: 'announcement'}, 
                            {name: 'news', value: 'news'}, 
                            {name: 'official_message', value: 'official_message'}, 
                            {name: 'write_up', value: 'write_up'}, 
                            {name: 'documents', value: 'documents'}, 
                            {name: 'grid_layout', value: 'grid layout'}
                        ]
                    }
                />
            </Form.Item>

            <hr className=" border-dark_yellow border-[1px] my-3 " />

            {ChooseChildrenForm(spreadChildren)}
                
        </Form>
    )
}

export default SubPageForm;