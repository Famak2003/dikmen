import { apiSlice } from "./apiSlice";
import { GetAllPageDataType, GetTableDataOutput } from "@/types";

// export interface user {
//     id: number;
//     email: string;
//     name: string;
//     role: string;
// }

// export interface newsType {
//     id: number;
//     key?: React.Key;
//     title: LocaleType;
//     content: LocaleType;
//     images: string[];
//     display_image: string;
//     completed: boolean;
//     slug: string;
//     updated_at: string;
//     total: number;
//     user?: user;
// }

// interface newsLinks {
//     active: boolean;
//     label: string;
//     url?: string;
// }

// export interface GetAllNewsOutputType {
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

// interface GetAllNewsInputType {
//     perPage: number; 
//     page: number;
// }

export const newsApiSlice = apiSlice.injectEndpoints({
    overrideExisting: true,
    endpoints: (builder) => ({
        getNews: builder.query<GetTableDataOutput, GetAllPageDataType>({   // get all profile info
            query: ({perPage, page}) => `news?perPage=${perPage}&page=${page}`,
            keepUnusedDataFor: 0,
        }),
        createNews: builder.mutation({
            query: (newsData) => ({
                url: "admin/news",
                method: "PUT",
                body: newsData
            })
        }),
        postNewsImage: builder.mutation({
            query: (image: FormData) => ({
                url: "admin/news/image",
                method: "POST",
                body: image
            }) 
        }),
        removeNewsImage: builder.mutation({
            query: (imageurl) => {
                return {
                    url: "admin/news/image" + imageurl,
                    method: "DELETE"
                }
            }
        }),
        editNews: builder.mutation({
            query: ({newsData, id}) => ({
                url: `admin/news/${id}`,
                method: "PATCH",
                body: newsData
            })
        }),
        deleteNews: builder.mutation({
            query: (id) => {
                // console.log(" API ID ",id)
                return {
                    url: `admin/news/${id}`,
                    method: "DELETE",
                }
            }
        }),
    }),
    
})

export const {
    useGetNewsQuery,
    useRemoveNewsImageMutation,
    useCreateNewsMutation,
    usePostNewsImageMutation,
    useEditNewsMutation,
    useDeleteNewsMutation,
} = newsApiSlice