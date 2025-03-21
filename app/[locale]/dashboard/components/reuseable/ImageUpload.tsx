import { usePostProjectImageMutation, useRemoveProjectImageMutation } from "@/lib/api/profileApiSlice";
import { InboxOutlined, PlusOutlined } from "@ant-design/icons";
import { GetProp, Image, message, Upload, UploadFile, UploadProps } from "antd"
import Dragger from "antd/es/upload/Dragger";
import { Dispatch, SetStateAction, useState } from "react";

export interface ImageUploadProps {
    fileList: UploadFile[];
    setFileList: Dispatch<SetStateAction<UploadFile[]>>;
}


type FileType = Parameters<GetProp<UploadProps, 'beforeUpload'>>[0];

const getBase64 = (file: FileType): Promise<string> =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = (error) => reject(error);
});


const ImageUpload: React.FC<ImageUploadProps> = ({fileList, setFileList}) => {
    const [previewOpen, setPreviewOpen] = useState(false);
    const [previewImage, setPreviewImage] = useState('');
    const [postProjectImage, {}] = usePostProjectImageMutation()
    const [removeProjectImage, {data, isSuccess}] = useRemoveProjectImageMutation()
    // const [fileList, setFileList] = useState<UploadFile[]>([])

    const uploadImage = async (value:any) => {
        const formData = new FormData()
        formData.append("file", value.file)
        await postProjectImage(formData).then((response) => {
            setFileList((prev) => { 
                return [...prev, {uid: Date.now()+'', name: Date.now()+'', url: process.env.NEXT_PUBLIC_BASE+response.data.link}]}
            )
        })
        return true
    }

    const removeImage = async (value: any) => {
        const url = value.url.replace(process.env.NEXT_PUBLIC_BASE, '').replace('storage/projects/','')
        await removeProjectImage(url)
        const newFileList = fileList.map(Obj => Obj).filter((item) => (item.url !== value.url))
        setFileList(newFileList)
    }
    

    // const handleChange: UploadProps['onChange'] = ({ fileList: newFileList }) =>
    //     // setFileList(newFileList);
    //     console.log(newFileList)


    const handlePreview = async (file: UploadFile) => {
        if (!file.url && !file.preview) {
            file.preview = await getBase64(file.originFileObj as FileType);
        }
    
        setPreviewImage(file.url || (file.preview as string));
        setPreviewOpen(true);
    };
    
    
    const uploadButton = (
        <button style={{ border: 0, background: 'none' }} type="button">
          <PlusOutlined />
          <div style={{ marginTop: 8 }}>Upload</div>
        </button>
      );
    
    return(
        <>
            <Upload
                listType="picture-card"
                fileList={fileList}
                multiple={true}
                onPreview={handlePreview}
                // onChange={handleChange}
                customRequest={uploadImage}
                onRemove={removeImage}
                
            >
            { uploadButton}
            </Upload>
            {   previewImage && (
                    <Image
                        wrapperStyle={{ display: 'none' }}
                        preview={{
                            visible: previewOpen,
                            onVisibleChange: (visible) => setPreviewOpen(visible),
                            afterOpenChange: (visible) => !visible && setPreviewImage(''),
                        }}
                        src={previewImage}
                    />
                )
            }
        </>
    )
}

export default ImageUpload