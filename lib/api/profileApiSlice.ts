import { LocaleType } from "@/app/[locale]/dashboard/projects/page";
import { apiSlice } from "./apiSlice";

interface user {
    id: number;
    email: string;
    name: string;
    role: string;
}

export interface projectType {
    key: React.Key;
    title: LocaleType;
    content: LocaleType;
    images: string[];
    display_image: string;
    completed: boolean;
    slug: string;
    updated_at: string;
    total: number;
    user: user;
}

interface prorjectsLinks {
    active: boolean;
    label: string;
    url?: string;
}

interface GetProjectsOutputType {
    data: projectType[];
    first_page_url: string;
    links: prorjectsLinks[];
    from: string;
    last_page: string;
    last_page_url: string;
    per_page: number;
    to: number;
    total: number;
    current_page: number;
}

interface GetProjectsInputType {
    perPage: number; 
    page: number;
}

export const profileApiSlice = apiSlice.injectEndpoints({
    overrideExisting: true,
    endpoints: (builder) => ({
        // get all profile info
        getProfile: builder.query<GetProjectsOutputType, GetProjectsInputType>({
            query: ({perPage, page}) => `projects?perPage=${perPage}&page=${page}`,
        }),
        createProject: builder.mutation({
            query: (projectData) => ({
                url: "admin/projects",
                method: "PUT",
                body: projectData
            })
        }),
        postProjectImage: builder.mutation({
            query: (image: FormData) => ({
                url: "admin/projects/image",
                method: "POST",
                body: image
            }) 
        }),
        removeProjectImage: builder.mutation({
            query: (imageurl) => {
                return {
                    url: "admin/projects/image" + imageurl,
                    method: "DELETE"
                }
            }
        }),
        editProject: builder.mutation({
            query: ({projectData, slug}) => ({
                url: `admin/projects/${slug}`,
                method: "PUT",
                body: projectData
            })
        }),
    }),
    
})

export const {
    useGetProfileQuery,
    useRemoveProjectImageMutation,
    useCreateProjectMutation,
    usePostProjectImageMutation,
    useEditProjectMutation,
} = profileApiSlice