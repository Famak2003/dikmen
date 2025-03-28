import I18N from "@/i18n";
import { usePostProjectImageMutation, useRemoveProjectImageMutation } from "@/lib/api/profileApiSlice";
import { PlusOutlined } from "@ant-design/icons";
import { GetProp, Image, Upload, UploadFile, UploadProps } from "antd"
import { Dispatch, SetStateAction, useState } from "react";
import toast from "react-hot-toast";
import { usePostAnnouncementImageMutation, useRemoveAnnouncementImageMutation } from "@/lib/api/announcementApiSlice";
import { usePostNewsImageMutation, useRemoveNewsImageMutation } from "@/lib/api/newsApiSlice";

export type TPostApi = 
    ReturnType<typeof usePostAnnouncementImageMutation>[0] |
    ReturnType<typeof usePostNewsImageMutation>[0] |
    ReturnType<typeof usePostProjectImageMutation>[0]; 

export type TRemoveApi = 
    ReturnType<typeof useRemoveAnnouncementImageMutation>[0] |
    ReturnType<typeof useRemoveNewsImageMutation>[0] |
    ReturnType<typeof useRemoveProjectImageMutation>[0]; 

export interface ImageUploadProps {
    fileList: UploadFile[];
    setFileList: Dispatch<SetStateAction<UploadFile[]>>;
    multiple?: boolean;
    singleImage?: boolean;
    postImageApi: TPostApi;
    removeImageApi: TRemoveApi;
}


type FileType = Parameters<GetProp<UploadProps, 'beforeUpload'>>[0];

const getBase64 = (file: FileType): Promise<string> =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = (error) => reject(error);
});


const ImageUpload: React.FC<ImageUploadProps> = ({fileList, setFileList, multiple=true, singleImage=false, removeImageApi, postImageApi}) => {
    const [previewOpen, setPreviewOpen] = useState(false);
    const [previewImage, setPreviewImage] = useState('');

    const uploadImage = async (value:any) => {
        const formData = new FormData()
        formData.append("file", value.file)
        try {
            const response = await postImageApi(formData).unwrap() // unwrap handles async errors
            console.log(response)
            console.log(response?.link)
            if (response?.link) {
                setFileList((prev) => {
                    return [
                        ...prev,
                        {uid: Date.now()+'', name: Date.now()+'', url: process.env.NEXT_PUBLIC_BASE+response?.link}
                    ]}
                )
            }
            
        } catch (err: any) {
            if(err.status === "413"){
                toast.error("File size too large")
            }else{
                toast.error("Having trouble uploading image")
            }
        }
        return true
    }

    const removeImage = async (value: any) => {
        const splitValueArr = value.url.split('/')
        const lastValueIndex = (splitValueArr.length - 1)
        const url = `/${splitValueArr[lastValueIndex]}` // Extracting image url from values array
        try {
            await removeImageApi(url).unwrap() // Removes image
            const newFileList = fileList.map(Obj => Obj).filter((item) => (item.url !== value.url))
            setFileList(newFileList)
        } catch (error) {
            toast.error(<I18N>SOMETHING_WENT_WRONG</I18N>)
        }
    }

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
                multiple={multiple}
                onPreview={handlePreview}
                customRequest={uploadImage}
                onRemove={removeImage}
                
            >
            { 
                singleImage ?  // checks if it should only allow a single image
                    fileList?.length >= 1 ?
                        null : 
                    uploadButton 
                    :
                uploadButton 
            }
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