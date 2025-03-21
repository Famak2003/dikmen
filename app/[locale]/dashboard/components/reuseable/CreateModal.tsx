import I18N from "@/i18n";
import { Modal } from "antd"
import { ReactNode } from "react";

interface CreateModalProps {
    isCreateModalVisible: boolean;
    setisCreateModalVisible: (visible: boolean) => void;
    handleSubmit: () => void;
    title: string
    loading: boolean;
    children: ReactNode;
}

const CreateModal: React.FC<CreateModalProps> = ({handleSubmit, isCreateModalVisible, setisCreateModalVisible, title, loading, children}) => {

    // const handleSubmit = () => {
    //     console.log("submitted")
    //     setisCreateModalVisible(false)
    // }

    return(
        <Modal 
            title={ <h1 className=" uppercase font-bold text-[20px] "><I18N>{title}</I18N></h1> }
            open={isCreateModalVisible}
            width={"90%"}
            className=' createAdminForm '
            okText={"Submit"}
            onOk={() => handleSubmit()}
            // loading=
            confirmLoading={loading}
            onCancel={() => setisCreateModalVisible(false)} 
            onClose={() => setisCreateModalVisible(false)}
        >
            <div className=" flex flex-col gap-6 ">
                {children}
            </div>
        </Modal>
    )
}

export default CreateModal