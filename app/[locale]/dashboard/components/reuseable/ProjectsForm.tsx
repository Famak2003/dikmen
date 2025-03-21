import I18N from "@/i18n"
import { Form, Input, Switch } from "antd"
import TextEditor from "./TextEditor"
// import ImageUpload from "./ImageUpload"
// import {ImageUploadProps} from "./ImageUpload"

interface ProjectsFormType {
    content: string;
    setContent: (value: string) => void;
    locale: string;
    handleSubmit: (value: any) => void
}

const ProjectsForm: React.FC<ProjectsFormType> = ({locale, content, setContent, handleSubmit}) => {

    // const [content, setContent] = useState<string>("")
    // const [fileList, setFileList] = useState<UploadFile[]>([])

    return(
        <div className=" w-full max-w-[45%] " >
            <h1 className=" text16 p-3 rounded-md bg-gray-300 md:bg-transparent italic " >{locale}</h1>
            <Form
                className=" w-full h-full "
                onFinish={handleSubmit}
                layout="vertical"
            >
                <Form.Item
                    required
                    name={"title"}
                    label={<I18N>TITLE</I18N>}
                >
                    <Input className="inputStyle" placeholder={"Başlığı Girin"} />
                </Form.Item>
                <Form.Item 
                    required
                    name={"content"}
                    label={<I18N>CONTENT</I18N>}
                    shouldUpdate={true} // Ensures it updates only when needed
                    initialValue={content}
                >
                    
                    <TextEditor placeHolder="Input Content here" content={content} setContent={setContent}  />
                </Form.Item>
                {/* <Form.Item 
                    required
                    name={"slug"}
                    label={<I18N>SLUG</I18N>}
                >
                    <Input className="inputStyle" placeholder={"İçerik Slug"} />
                </Form.Item> */}
                {/* <Form.Item 
                    required
                    name={"completed"}
                    label={<I18N>COMPLETED</I18N>}
                >
                    <Switch />
                </Form.Item> */}
                {/* <Form.Item 
                    required
                    name={"images"}
                    label={<I18N>IMAGES</I18N>}
                >
                    <ImageUpload setFileList={setFileList} fileList={fileList}  />
                </Form.Item> */}
                <Form.Item>
                    <button className=" py-2 px-5 text-white hover:text-gray-200 rounded-md bg-green-400 " type="submit" >
                        save
                    </button>
                </Form.Item>
            </Form>
        </div>

    )
}

export default ProjectsForm