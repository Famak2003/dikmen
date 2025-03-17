"use client"

import I18N from "@/i18n"
import { faCalendarDays, faUpload } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Form, Input, Radio, Upload } from "antd"
import { LoadingOutlined, UploadOutlined } from "@ant-design/icons"
import { useState } from "react"

interface formType {
    nameSurname: string,
    id: number,
    phone: string,
    email: string,
    date: string,
    address: string,
    meterAddress: string,
    home: string,
    workplace: string,
    construction: string,
    garden: string,
    corral: string,
    accept: string
}

const Forms = () => {
    const [files, setFiles] = useState<{ [key: number]: any }>({})
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const handleSubmit = (values: any) => {
        const formData = new FormData();
        
        // Append text fields
        Object.keys(values).forEach((key) => {
            formData.append(key, values[key]);
        });

        // Append uploaded files
        Object.keys(files).forEach((idxStr) => {
            const idx = Number(idxStr); 
            if (files[idx]) {
                formData.append(`file_${idx}`, files[idx].originFileObj);
            }
        });

        console.log(formData)
    };

    const deedData = [
        "COPY_OF_TITLE_DEED_TO_CONNECTION",
        "ID_PHOTOCOPY",
        "PHOOCOPY_OF_WRITTEN_PETITTION",
        "IF_CONSTRUCTION_PHOTOCOPY_OF_CONSTRUCTION_PERMIT"
    ]

    const handleFileChange = (idx: number, info: any) => {
        console.log(info)
        setFiles((prev) => ({
            ...prev,
            [idx]: info.fileList.length > 0 ? info.fileList[0] : null, // Store only one file per row
        }));
    };



    return(
        <div className=" subPageSection richTextSection ">
            <Form 
                className=" flex flex-col gap-9 w-full "
                onFinish={handleSubmit}
                layout="inline"
            >
                <div className=" flex flex-col gap-2 ">
                    <Form.Item
                        name={"nameSurname"}    
                        required
                    >
                        <Input className=" text max-w-[443px] h-[35px] rounded-md border-gray-300 " placeholder="Başvuran Kişinin Adı Soyadı" />
                    </Form.Item>
                    <Form.Item
                        name={"id"}    
                        required
                    >
                        <Input className=" text max-w-[443px] h-[35px] rounded-md border-gray-300 " placeholder="Kimlik No" />
                    </Form.Item>
                    <Form.Item
                        name={"phone"}    
                        required
                    >
                        <Input className=" text max-w-[443px] h-[35px] rounded-md border-gray-300 " placeholder="Telefon No" />
                    </Form.Item>
                    <Form.Item
                        name={"email"}    
                        required
                    >
                        <Input className=" text max-w-[443px] h-[35px] rounded-md border-gray-300 " placeholder="E-Posta Adresi" />
                    </Form.Item>
                    <Form.Item 
                        name={"date"}
                        required
                    >
                        <Input suffix={<FontAwesomeIcon className=" text-secondary_gray " icon={faCalendarDays} />} className=" text max-w-[443px] h-[35px] rounded-md border-gray-300 " placeholder="Başvuru Tarihi" />
                    </Form.Item>
                    <Form.Item
                        name={"address"}    
                        required
                    >
                        <Input className=" text max-w-[443px] h-[35px] rounded-md border-gray-300 " placeholder="Başvuru Sahibinin Adresi" />
                    </Form.Item>
                    <Form.Item
                        name={"meterAddress"}    
                        required
                    >
                        <Input className=" text max-w-[443px] h-[35px] rounded-md border-gray-300 " placeholder="Su Sayacının Bağlanacağı Adres" />
                    </Form.Item>
                </div>

                <div className=" flex flex-col gap-2 ">
                    <h1 className=" text16 text-dark_yellow font-bold " ><I18N>WATER_CONNECTION_TYPE</I18N></h1>

                    <Form.Item name="connectionType">
                        <Radio.Group className="  " >
                            <Radio className=" text-secondary_gray " value="home">
                                <I18N>HOME_CONNECTION</I18N>
                            </Radio>
                            <Radio className=" text-secondary_gray " value="workplace">
                                <I18N>WORKPLACE_CONNECTION</I18N>
                            </Radio>
                            <Radio className=" text-secondary_gray " value="construction">
                                <I18N>CONSTRUCTION_CONNECTION</I18N>
                            </Radio>
                            <Radio className=" text-secondary_gray " value="garden">
                                <I18N>GARDEN_CONNECTION</I18N>
                            </Radio>
                            <Radio className=" text-secondary_gray " value="corral">
                                <I18N>CORRAL_CONNECTION</I18N>
                            </Radio>
                        </Radio.Group>
                    </Form.Item>
                </div>

                <ul className=" flex flex-col text-secondary_gray border-b" >
                    {
                        deedData.map((value, idx) => {
                            return(
                                <li className=" flex justify-between items-center px-2 py-5 border-t  " >
                                    <p className="  " > <I18N>{value}</I18N></p> 
                                    <Upload
                                        beforeUpload={() => false} // Prevent auto-upload
                                        fileList={files[idx] ? [files[idx]] : []} // Show only the uploaded file
                                        onChange={(info) => handleFileChange(idx, info)} // Handle file change per row
                                    >
                                        <button><UploadOutlined className=" text-[27px] " /></button>
                                    </Upload>
                                </li>
                            )
                        })
                    }
                </ul>
                <div className=" flex flex-col gap-2">
                    <Form.Item className=" " >
                        <button className=" hover:border-none hover:!bg-black hover:!text-white px-16 py-2 text !bg-base_yellow text-dark_yellow rounded-none " type="submit" >
                            {isLoading ? (
                                <LoadingOutlined className="animate-spin" />
                            ) : (
                                <I18N>SEND</I18N>
                            )}  
                        </button>
                    </Form.Item>
                    <Form.Item required name="accept">
                        <Radio.Group>
                            <Radio className=" text-secondary_gray " value={"true"} >
                                <I18N>CORRECT_ENTERED_INFO</I18N>
                            </Radio>
                        </Radio.Group>
                    </Form.Item>
                </div>
            </Form>

        </div>
    )
}

export default Forms