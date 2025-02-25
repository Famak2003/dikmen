"use client";
// import I18N from "@/i18n";
import { EyeOutlined, EyeInvisibleOutlined, UnlockOutlined, LoadingOutlined } from "@ant-design/icons";
import { Button, Form, Input } from "antd";
import FormItem from "antd/es/form/FormItem";
import OTP from "antd/es/input/OTP";
import axios from "@/axios";
import React, { useState } from "react";
// import { toast } from "react-toastify";
import { useRouter } from "@/i18n/routing";
import { motion } from "framer-motion";
import {Link} from "@/i18n/routing";
import I18N from "@/i18n";
import toast from "react-hot-toast";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock, faMailBulk, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
type Props = {};

const customizeRequiredMark = (
    label: React.ReactNode,
    { required }: { required: boolean }
) => (
    <>
        {label}
        {required && <span className="text-red-500 ml-[2px]">*</span>}
    </>
);

const page = (props: Props) => {
    const router = useRouter();
    const [form] = Form.useForm();
    const [sendOTPLoading, setSendOTPLoading] = useState(false);
    const [changePasswordLoading, setChangePasswordLoading] = useState(false);

    const handleSubmit = (values: any) => {
        setChangePasswordLoading(true);
        axios.post("/admin/reset-password", {
            email: form.getFieldValue("email"),
            token: form.getFieldValue("otp"),
            password: form.getFieldValue("password"),
            password_confirmation: form.getFieldValue("password_confirmation"),
        }).then((res : any) => {
            toast.success(<I18N>PASSWORD_CHANGED_SUCCESSFULLY</I18N>);
            form.resetFields();
            router.push("/admin/auth/login");
        }).catch((err : any) => {
            console.log("ERR", err);
            if(err?.response?.status === 422){
                toast.error(err?.response?.data?.message);
            }
        }).finally(() => {
        setChangePasswordLoading(false);
        });
    };

    const sendOTP = () => {
        setSendOTPLoading(true);
        axios.post("/admin/send-reset-password-email", {
            email: form.getFieldValue("email"),
        }).then((res: any) => {
            console.log("RES", res);
        }).catch((err : any) => {
            console.log("ERR", err);
            if(err?.response?.status === 422){
                toast.error(err?.response?.data?.message);
            } 
        }).finally(() => {
            setSendOTPLoading(false);
        });
    };

  const validatePassword = (_: any, value: string) => {
    if (!value) {
      return Promise.reject(
        <span>
            Password must be:
            <br /> ✅ At least 2 lowercase letters
            <br /> ✅ At least 2 uppercase letters
            <br /> ✅ At least 2 special characters
            <br /> ✅ At least 2 numbers
            <br /> ✅ Minimum length of 8 characters!
        </span>
      );
    }

    // Check minimum length of 8 characters
    if (value.length < 8) {
        return Promise.reject("Password must be at least 8 characters long!");
    }

    // Check for at least 2 lowercase letters
    if (!/(.*[a-z]){2}/.test(value)) {
        return Promise.reject("Password must have at least 2 lowercase letters!");
    }

    // Check for at least 2 uppercase letters
    if (!/(.*[A-Z]){2}/.test(value)) {
        return Promise.reject("Password must have at least 2 uppercase letters!");
    }

    // Check for at least 2 special characters (!@#$%^&*()_+ etc.)
    if (!/(.*[\W_]){2}/.test(value)) {
        return Promise.reject("Password must have at least 2 special characters!");
    }

    // Check for at least 2 numbers
    if (!/(.*\d){2}/.test(value)) {
        return Promise.reject("Password must have at least 2 numbers!");
    }

    return Promise.resolve();
  };

    return (
        <>
        <motion.section animate={{scale:1}} initial={{scale:0.3}} transition={{duration:0.5}}  className="bg-white relative max-w-[500px] w-[90%] flex flex-col rounded-lg shadow-custom_shad1 p-4">
            <div className="p-3 rounded-lg grid place-items-center bg-white shadow-shadow-1 w-fit mx-auto mb-4">
                <UnlockOutlined className="text-2xl text-black" />
            </div>

            <p className="text-xl font-semibold text-center text-black">
                <I18N>REQUEST_PASSWORD_CHANGE</I18N>
            </p>
            <Form
                form={form}
                layout="vertical"
                onFinish={handleSubmit}
                className="mt-4 flex flex-col"
                requiredMark={customizeRequiredMark}
            >
                <FormItem
                    label={<I18N>EMAIL</I18N>}
                    name="email"
                    rules={[
                        {
                            required: true,
                            message: <I18N>PLEASE_INPUT_YOUR_EMAIL</I18N>,
                        },
                        {
                            type: "email",
                            message: <I18N>THE_INPUT_IS_NOT_A_VALID_EMAIL</I18N>,
                        },
                    ]}
                >
                    <Input
                        className="inputStyle"
                        size="large"
                        prefix={<FontAwesomeIcon icon={faPaperPlane} className=" text-black mr-2" />}
                        suffix={
                            sendOTPLoading ? (
                                <LoadingOutlined className="animate-spin" />
                            ) : (
                                <div className="cursor-pointer" onClick={sendOTP}>
                                <I18N>SEND_OTP</I18N>
                                </div>
                            )
                        }
                    />
                </FormItem>

                <FormItem
                    label={<I18N>OTP</I18N>}
                    name="otp"
                    rules={[
                        {
                        required: true,
                        message: <I18N>PLEASE_INPUT_YOUR_OTP</I18N>,
                        },
                    ]}
                >
                    <OTP
                        className="!ring-2"
                        length={6}
                        size="large"
                        onChange={(value) => {
                            console.log("onChange", value);
                        }}
                        type="text"
                    />
                </FormItem>

                <FormItem
                    label={<I18N>PASSWORD</I18N>}
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: <I18N>PLEASE_INPUT_YOUR_PASSWORD</I18N>,
                        },
                        {
                            validator: validatePassword
                        }
                    ]}
                >
                    <Input.Password
                        className="inputStyle"
                        size="large"
                        prefix={<FontAwesomeIcon icon={faLock} className=" text-black mr-2" />}
                    />
                </FormItem>

                <FormItem
                    label={<I18N>CONFIRM_PASSWORD</I18N>}
                    name="password_confirmation"
                    rules={[
                        {
                            required: true,
                            message: <I18N>PLEASE_CONFIRM_YOUR_PASSWORD</I18N>,
                        },
                        {
                            validator: validatePassword
                        }
                    ]}
                >
                    <Input.Password
                        className="inputStyle"
                        size="large"
                        prefix={<FontAwesomeIcon icon={faLock} className=" text-black mr-2" />}
                    />
                </FormItem>
                
                <Link
                    href="/auth/login"
                    className=" text-blue-500 self-end "
                >
                    <I18N>LOGIN</I18N> ?
                </Link>
                <button type="submit" className="font-medium bg-black h-[39.6px] text-white py-[7px] px-[11px] rounded-sm flex justify-center items-center gap-2">
                    {
                    changePasswordLoading ? (
                        <LoadingOutlined className="animate-spin" />
                    ) : (
                        <I18N>CHANGE_PASSWORD</I18N>
                    )
                    }
                </button>
            </Form>
        </motion.section>
        </>
    );
};

export default page;
