import { apiSlice } from "./apiSlice";
import { GetAllPageDataType, GetTableDataOutput, PagesDataType } from "@/types";

interface GetSinglePage {
    id: number
}

export const pagesApiSlice = apiSlice.injectEndpoints({
    overrideExisting: true,
    endpoints: (builder) => ({
        getPages: builder.query<PagesDataType[], void>({   // get all pages info
            query: () => `pages`,
            keepUnusedDataFor: 0,
        }),
        getPage: builder.query<PagesDataType[], GetSinglePage>({   // get single page
            query: ({id}) => `pages/${id}`,
            // keepUnusedDataFor: 0,
        }),
        createPage: builder.mutation({
            query: (pageData) => ({
                url: "admin/pages",
                method: "PUT",
                body: pageData
            })
        }),
        createSubPage: builder.mutation({
            query: (pageData) => ({
                url: "admin/pages",
                method: "PUT",
                body: pageData
            })
        }),
        postPageImage: builder.mutation({
            query: (image: FormData) => ({
                url: "admin/pages/image",
                method: "POST",
                body: image
            }) 
        }),
        removePageImage: builder.mutation({
            query: (imageurl) => {
                return {
                    url: "admin/pages/image" + imageurl,
                    method: "DELETE"
                }
            }
        }),
        editPage: builder.mutation({
            query: ({pageData, id}) => ({
                url: `admin/pages/${id}`,
                method: "PATCH",
                body: pageData
            })
        }),
        deletePage: builder.mutation({
            query: (id) => {
                return {
                    url: `admin/pages/${id}`,
                    method: "DELETE",
                }
            }
        }),
    }),
    
})

export const {
    useGetPagesQuery,
    useGetPageQuery,
    useRemovePageImageMutation,
    useCreatePageMutation,
    useCreateSubPageMutation,
    usePostPageImageMutation,
    useEditPageMutation,
    useDeletePageMutation,
} = pagesApiSlice