import I18N from "@/i18n";
import { Form, FormInstance, Input } from "antd";
import TitleContent from "./TitleContent";
import { CustomFormType, FormContent } from "@/types";
import ImageUpload from "./ImageUpload";
import { usePostPageImageMutation, useRemovePageImageMutation } from "@/lib/api/pagesApiSlice";

interface OfficialMessageType extends CustomFormType {
    data: FormContent;
    setData: (vale:any) => void;
}

const OfficialMessage: React.FC<OfficialMessageType> = ({data, setData, fileList, setFileList, form}) => {
    const [postPageImage] = usePostPageImageMutation()
    const [removePageImage] = useRemovePageImageMutation()
    // useRemovePageImageMutation
    // handleName
    return(
        <>
            <Form.Item
                required
                name={`name`}
                label={ <I18N>NAME</I18N> }
                className=" w-full md:w-1/2 "
            >
                <Input 
                    onChange={ (e) => {
                        setData((prev:any) => {
                            return {
                                ...prev,
                                name: e.target.value
                            }
                        }
                    )}} 
                    placeholder={`Adı buraya girin`}
                    className="inputStyle"
                />
                
            </Form.Item>
            <div className=" flex flex-col md:flex-row justify-between items-start gap-3 " >
                <TitleContent data={data} setData={setData} locale={"en"} form={form} />
                <TitleContent data={data} setData={setData} locale={"tr"} form={form} />
            </div>
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

export default OfficialMessage;