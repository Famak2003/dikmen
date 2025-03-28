import { apiSlice } from "./apiSlice";
import { GetAllPageDataType, GetTableDataOutput } from "@/types";

export const newsApiSlice = apiSlice.injectEndpoints({
    overrideExisting: true,
    endpoints: (builder) => ({
        getNews: builder.query<GetTableDataOutput, GetAllPageDataType>({   // get all profile info
            query: ({perPage, page}) => `news?perPage=${perPage}&page=${page}`,
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