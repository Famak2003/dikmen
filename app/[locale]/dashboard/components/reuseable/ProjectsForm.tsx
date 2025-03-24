import I18N from "@/i18n"
import { Form, FormInstance, Input, Switch, UploadFile } from "antd"
import TextEditor from "./TextEditor"
import TitleContent from "./TitleContent";
import ImageUpload from "./ImageUpload";
import { Dispatch, SetStateAction } from "react";
// import ImageUpload from "./ImageUpload"
// import {ImageUploadProps} from "./ImageUpload"

interface ProjectsFormType {
    contentEN: string;
    setContentEN: (value: string) => void;
    contentTR: string;
    setContentTR: (value: string) => void;
    fileList: UploadFile[];
    setFileList:  Dispatch<SetStateAction<UploadFile<any>[]>>;
    form: FormInstance;
}

const ProjectsForm: React.FC<ProjectsFormType> = (
        {
            form, 
            contentEN, 
            setContentEN, 
            contentTR, 
            setContentTR, 
            fileList, 
            setFileList
        }
    ) => {

    return(
        <Form
            className=" w-full h-full "
            form={form}
            layout="vertical"
        >
            <div className=" flex flex-col md:flex-row justify-between items-start gap-3 " >
                <TitleContent locale={"EN"} content={contentEN} setContent={setContentEN} />
                <TitleContent locale={"TR"} content={contentTR} setContent={setContentTR} />
            </div>
            <Form.Item 
                required
                name={"slug"}
                label={<I18N>SLUG</I18N>}
            >
                <Input className="inputStyle" placeholder={"İçerik Slug"} />
            </Form.Item>
            <Form.Item
                required
                name={"completed"}
                label={<I18N>COMPLETED</I18N>}
            >
                <Switch />
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

export default ProjectsForm