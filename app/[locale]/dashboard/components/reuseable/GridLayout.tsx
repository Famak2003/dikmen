"use client"

import { Button, Divider, Form, Input, InputRef, Select, Space } from "antd"
import I18N from "@/i18n"
import ImageUpload from "./ImageUpload"
import { SubPageType } from "@/types"
import { usePostPageImageMutation, useRemovePageImageMutation } from "@/lib/api/pagesApiSlice"
import { PlusOutlined } from "@ant-design/icons"
import { useRef, useState } from "react"


const GridLayout:React.FC<SubPageType> = ({data, setData, fileList, setFileList, form}) => {
    const inputRef = useRef<InputRef>(null);
    const [name, setName] = useState('');
    const [postPageImage] = usePostPageImageMutation()
    const [removePageImage] = useRemovePageImageMutation()

    let index = 0;

    const onNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
    };

    const addItem = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
        e.preventDefault();
        setData((prev: any) => {
            return {
                ...prev,
                tags: [...(prev?.tags || []), name || `New item ${index++}`]
            }
        })
        setName('');
        setTimeout(() => {
            inputRef.current?.focus();
        }, 0);
    };

    const handleTitle = (e: React.ChangeEvent<HTMLInputElement>, locale: string) => {
        const newValue = e.target.value;
        setData((prev: any) => ({
            ...prev,
            title: {
                ...prev.title,
                [locale]: newValue,
            },
        }));
    }
    return(
        <>
            <div className=" flex flex-col md:flex-row justify-between items-start w-full h-fit gap-3 " >
                <div className=" flex flex-col w-full" >
                    <h1 className=" text16 p-3 rounded-md bg-gray-300 md:bg-transparent italic uppercase" >EN</h1>
                    <Form.Item
                        required
                        name={`titleEN`}
                        label={ "Page Title" }
                        className=" w-full"
                    >
                        <Input className=" w-full inputStyle" value={data.title.en} onChange={(e) => handleTitle(e, 'en')} placeholder={`Input Title here`} />
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
                        <Input className=" w-full inputStyle" value={data.title?.tr} onChange={(e) => handleTitle(e, 'tr')} placeholder={"Başlığı buraya girin"} />
                    </Form.Item>
                </div>
            </div>
            <Form.Item 
                required
                name={"slug"}
                label={<I18N>SLUG</I18N>}>
                <Input
                    onChange={(e) => {
                        setData((prev: any) => {
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
                name={"tags"}
                label={<I18N>TAGS</I18N>}>
                <Select
                    mode="multiple"
                    onChange={(value) => {
                        console.log(value)
                        setData((prev: any) => {
                            return {
                                ...prev,
                                tags: value
                            }
                        })
                    } } 
                    className="inputStyle"
                    placeholder={"İçerik tag"}
                    dropdownRender={(menu) => (
                        <>
                            {menu}
                            <Divider style={{ margin: '8px 0' }} />
                            <Space style={{ padding: '0 8px 4px' }}>
                            <Input
                                placeholder="Please enter item"
                                ref={inputRef}
                                value={name}
                                onChange={onNameChange}
                                onKeyDown={(e) => e.stopPropagation()}
                            />
                            <Button type="text" icon={<PlusOutlined />} onClick={addItem}>
                                Add item
                            </Button>
                            </Space>
                        </>
                        )}
                    options={data.tags?.map((item) => ({ lablel: item, value: item }))}
                />
            </Form.Item>
            <Form.Item 
                required
                name={"images"}
                label={<I18N>IMAGES</I18N>}
            >
                <ImageUpload setFileList={setFileList} fileList={fileList} multiple={false} removeImageApi={removePageImage} postImageApi={postPageImage}  />
            </Form.Item>
        </>
    )
}

export default GridLayout