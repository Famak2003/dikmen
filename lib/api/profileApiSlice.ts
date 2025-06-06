import { apiSlice } from "./apiSlice";
import { GetAllPageDataType, GetTableDataOutput } from "@/types";

// export interface user {
//     id: number;
//     email: string;
//     name: string;
//     role: string;
// }

// export interface projectType {
//     id: number;
//     key?: React.Key;
//     title: LocaleType;
//     content: LocaleType;
//     images: string[];
//     display_image: string;
//     completed?: boolean;
//     slug: string;
//     updated_at: string;
//     total: number;
//     user?: user;
// }

// interface prorjectsLinks {
//     active: boolean;
//     label: string;
//     url?: string;
// }

// export interface GetAllProjectsOutputType {
//     data: FormSourceDataType[];
//     first_page_url?: string;
//     links?: PageLinks[];
//     from?: string;
//     last_page?: string;
//     last_page_url?: string;
//     per_page: number;
//     to?: number;
//     total: number;
//     current_page?: number;
// }

// interface GetAllProjectsInputType {
//     perPage: number; 
//     page: number;
// }

export const profileApiSlice = apiSlice.injectEndpoints({
    overrideExisting: true,
    endpoints: (builder) => ({
        getProfile: builder.query<GetTableDataOutput, GetAllPageDataType>({   // get all profile info
            query: ({perPage, page}) => `projects?perPage=${perPage}&page=${page}`,
            keepUnusedDataFor: 0,
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
            query: ({projectData, id}) => ({
                url: `admin/projects/${id}`,
                method: "PATCH",
                body: projectData
            })
        }),
        deleteProject: builder.mutation({
            query: (id) => {
                // console.log(" API ID ",id)
                return {
                    url: `admin/projects/${id}`,
                    method: "DELETE",
                }
            }
        }),
    }),
    
})

export const {
    useGetProfileQuery,
    useRemoveProjectImageMutation,
    useCreateProjectMutation,
    usePostProjectImageMutation,
    useEditProjectMutation,
    useDeleteProjectMutation,
} = profileApiSlice