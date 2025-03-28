import { FormInstance, UploadFile } from "antd";
import { Dispatch, SetStateAction } from "react";

export interface LocaleType {
    en: string;
    tr: string;
}

export interface user {
    id: number;
    email: string;
    name: string;
    role: string;
}

export interface CustomFormType {
    fileList: UploadFile[]; // Files to store images
    setFileList:  Dispatch<SetStateAction<UploadFile<any>[]>>;
    form: FormInstance; // Ant Design Form Instance
}

export interface FormContent {
    title: LocaleType;
    content: LocaleType;
    completed?: boolean;
    visible?: boolean;
    tags?: string[];
    slug: string;
    images: string[];
    image?: string;
    type?: string;
    datetime?: string;
}

export interface FormSourceDataType {
    id: number;
    key?: React.Key;
    title: LocaleType;
    content: LocaleType;
    images: string[];
    display_image: string;
    completed?: boolean;
    visible?: boolean;
    slug: string;
    tags?: string[];
    updated_at: string;
    datetime?: string;
    total: number;
    user?: user;
}

export interface PageLinks {
    active: boolean;
    label: string;
    url?: string;
}


export interface GetTableDataOutput {
    data: FormSourceDataType[];
    first_page_url?: string;
    links?: PageLinks[];
    from?: string;
    last_page?: string;
    last_page_url?: string;
    per_page: number;
    to?: number;
    total: number;
    current_page?: number;
}

export interface GetAllPageDataType {
    perPage: number; 
    page: number;
}

export interface IndividualType extends FormContent {
    id: number;
    display_image: string
    updated_at: string,
    total: number,
    user?: user
}

export interface modalStateType {
    isModalVisible: boolean,
    setisModalVisible: (value: any) => void
}