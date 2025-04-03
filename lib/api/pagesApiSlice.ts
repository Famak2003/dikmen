// import { DataType } from "../slices/pagesSlice";
import { PagesDataType } from "../slices/pagesSlice";
import { apiSlice } from "./apiSlice";
import { GetAllPageDataType, GetTableDataOutput } from "@/types";


export const pagesApiSlice = apiSlice.injectEndpoints({
    overrideExisting: true,
    endpoints: (builder) => ({
        getPage: builder.query<PagesDataType[], GetAllPageDataType>({   // get all pages info
            query: ({perPage, page}) => `pages?perPage=${perPage}&page=${page}`,
            keepUnusedDataFor: 0,
        }),
        createPage: builder.mutation({
            query: (pageData) => ({
                url: "admin/page",
                method: "PUT",
                body: pageData
            })
        }),
        postPageImage: builder.mutation({
            query: (image: FormData) => ({
                url: "admin/page/image",
                method: "POST",
                body: image
            }) 
        }),
        removePageImage: builder.mutation({
            query: (imageurl) => {
                return {
                    url: "admin/page/image" + imageurl,
                    method: "DELETE"
                }
            }
        }),
        editPage: builder.mutation({
            query: ({pageData, id}) => ({
                url: `admin/page/${id}`,
                method: "PATCH",
                body: pageData
            })
        }),
        deletePage: builder.mutation({
            query: (id) => {
                return {
                    url: `admin/page/${id}`,
                    method: "DELETE",
                }
            }
        }),
    }),
    
})

export const {
    useGetPageQuery,
    useRemovePageImageMutation,
    useCreatePageMutation,
    usePostPageImageMutation,
    useEditPageMutation,
    useDeletePageMutation,
} = pagesApiSlice