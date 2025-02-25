"use client"

import axiosInstance from "@/axios"
import I18N from "@/i18n"
import { Link } from "@/i18n/routing"
import { faLock, faPaperPlane, faUser, faUserTie } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Button, Form, Input } from "antd"
import toast from "react-hot-toast"
import { motion } from "framer-motion";


interface loginForm {
    email: string,
    password: string
}

const Login = () => {
    // const [form] = Form.useForm()

    const handlSubmit = (value : loginForm) => {
        const _toastId = toast.loading("processing...");
        axiosInstance.post("/admin/login", {
            email: value?.email,
            password: value?.password
        }).then((res: any) =>{
            toast.dismiss(_toastId);
            toast.success("Login Successful")
            console.log(res)
        }).catch((err : any) => {
            toast.dismiss(_toastId);
            toast.error("problem verifying certificate")
            console.log(err)
        })

        console.log(value)
    }

    return(
        <motion.section animate={{scale:1}} initial={{scale:0.3}} transition={{duration:0.5}}  className=" flex justify-center items-center h-full bg-white shadow-custom_shad1 p-4 rounded-sm " >
            <Form 
                className=" w-[550px] h-fit " 
                onFinish={handlSubmit}
                name="login"
                layout="vertical" >
                <Form.Item 
                    required 
                    name={"email"}
                    label={"Email"}
                    rules={
                        [{
                            required: true,
                            message: "Email is required"
                        }]
                } >
                    <Input 
                        className="inputStyle "
                        prefix={<FontAwesomeIcon icon={faPaperPlane} className=" text-black mr-2" />}
                        placeholder="Input email here" 
                    />
                </Form.Item>
                <Form.Item
                    required
                    label={"Password"}
                    name={"password"}
                    rules={[
                        {
                            required: true,
                            message: "Password is required"
                        }
                    ]}  
                >
                    <Input.Password 
                        className="inputStyle "
                        prefix={<FontAwesomeIcon icon={faLock} className=" text-black mr-2" />}
                        placeholder="Input password here"  
                    />
                </Form.Item>
                <Form.Item className=" text-end" >
                    <Link className=" text-blue-500" href={"/auth/resetpassword"} >
                        Forgot Password?
                    </Link>
                    <Button className=" hover:border-none hover:!bg-black hover:!text-white !w-full bg-black text-white rounded-none " htmlType="submit" >
                        <I18N>LOGIN</I18N>
                    </Button>
                </Form.Item>
            </Form>
        </motion.section>
    )

}

export default Login