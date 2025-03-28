import { apiSlice } from "./apiSlice";
import { GetAllPageDataType, GetTableDataOutput } from "@/types";


export const announcementApiSlice = apiSlice.injectEndpoints({
    overrideExisting: true,
    endpoints: (builder) => ({
        getAnnouncement: builder.query<GetTableDataOutput, GetAllPageDataType>({   // get all profile info
            query: ({perPage, page}) => `announcement?perPage=${perPage}&page=${page}`,
            keepUnusedDataFor: 0,
        }),
        createAnnouncement: builder.mutation({
            query: (AnnouncementData) => ({
                url: "admin/announcement",
                method: "PUT",
                body: AnnouncementData
            })
        }),
        postAnnouncementImage: builder.mutation({
            query: (image: FormData) => ({
                url: "admin/announcement/image",
                method: "POST",
                body: image
            }) 
        }),
        removeAnnouncementImage: builder.mutation({
            query: (imageurl) => {
                return {
                    url: "admin/announcement/image" + imageurl,
                    method: "DELETE"
                }
            }
        }),
        editAnnouncement: builder.mutation({
            query: ({AnnouncementData, id}) => ({
                url: `admin/announcement/${id}`,
                method: "PATCH",
                body: AnnouncementData
            })
        }),
        deleteAnnouncement: builder.mutation({
            query: (id) => {
                return {
                    url: `admin/announcement/${id}`,
                    method: "DELETE",
                }
            }
        }),
    }),
    
})

export const {
    useGetAnnouncementQuery,
    useRemoveAnnouncementImageMutation,
    useCreateAnnouncementMutation,
    usePostAnnouncementImageMutation,
    useEditAnnouncementMutation,
    useDeleteAnnouncementMutation,
} = announcementApiSlice