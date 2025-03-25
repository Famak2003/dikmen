'use client'

import I18N from "@/i18n"
import { Form, Input, Switch } from "antd"
import TitleContent from "./TitleContent";
import ImageUpload from "./ImageUpload";
import { useEffect } from "react";
import { CustomFormType, FormContent } from "@/types";

interface NewsFormType extends CustomFormType{
    newsdata: FormContent;
    setNewsData: (value: any) => void;
}

const NewsForm: React.FC<NewsFormType> = 
    ({ form, newsdata, setNewsData, fileList, setFileList }) => {

        useEffect(() => {
            if(newsdata){
                form.setFieldsValue({
                    slug: newsdata.slug,
                    completed: newsdata?.completed
                })
            }
        }, [newsdata])


    return(
        <Form
            className=" w-full h-full "
            form={form}
            layout="vertical"
        >
            <div className=" flex flex-col md:flex-row justify-between items-start gap-3 " >
                <TitleContent data={newsdata} setData={setNewsData} locale={"en"} form={form} />
                <TitleContent data={newsdata} setData={setNewsData} locale={"tr"} form={form} />
            </div>
            <Form.Item 
                required
                name={"slug"}
                label={<I18N>SLUG</I18N>}>
                <Input
                    onChange={(e) => {
                        setNewsData((prev: any) => {
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
                name={"completed"}
                label={<I18N>COMPLETED</I18N>}
            >
                <Switch 
                    value={true}
                    onChange={(value) => {
                        setNewsData((prev: any) => {
                            return{
                                ...prev,
                                completed: value
                            }
                        })
                    }}
                />
            </Form.Item>
            <Form.Item 
                required
                name={"images"}
                label={<I18N>IMAGES</I18N>}
            >
                <ImageUpload setFileList={setFileList} fileList={fileList}  />
            </Form.Item>
        </Form>

    )
}

export default NewsForm