import I18N from "@/i18n"
import { Form, Input } from "antd"
import TextEditor from "./TextEditor"
import React from "react";

interface TitleContentType {
    content: string;
    setContent: (value: string) => void;
    locale: string;
}

const TitleContent: React.FC<TitleContentType> = ({locale, content, setContent}) => {
    return(
        <div className="w-full">
            <h1 className=" text16 p-3 rounded-md bg-gray-300 md:bg-transparent italic " >{locale}</h1>
            <Form.Item
                required
                name={`title${locale}`}
                label={locale === "EN" ? "Title" : "Başlık"}
            >
                <Input className="inputStyle" placeholder={`${ locale === "EN" ?  "Input Title here" : "Başlığı buraya girin"}`} />
            </Form.Item>
            <Form.Item 
                required
                // name={`content${locale}`}
                label={locale === "EN" ? "Content" : "İçerik"}
                shouldUpdate={true} // Ensures it updates only when needed
                initialValue={content}
            >
                <TextEditor placeHolder={`${ locale === "EN" ?  "Input Content here" : "İçeriği buraya girin"}`} content={content} setContent={setContent}  />
            </Form.Item>
        </div>
    )
}

export default TitleContent