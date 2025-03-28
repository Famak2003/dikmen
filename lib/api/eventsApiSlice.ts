import { apiSlice } from "./apiSlice";
import { GetAllPageDataType, GetTableDataOutput } from "@/types";


export const eventsApiSlice = apiSlice.injectEndpoints({
    overrideExisting: true,
    endpoints: (builder) => ({
        getEvents: builder.query<GetTableDataOutput, GetAllPageDataType>({   // get all events info
            query: ({perPage, page}) => `events?perPage=${perPage}&page=${page}`,
            keepUnusedDataFor: 0,
        }),
        createEvents: builder.mutation({
            query: (EventsData) => ({
                url: "admin/events",
                method: "PUT",
                body: EventsData
            })
        }),
        postEventsImage: builder.mutation({
            query: (image: FormData) => ({
                url: "admin/events/image",
                method: "POST",
                body: image
            }) 
        }),
        removeEventsImage: builder.mutation({
            query: (imageurl) => {
                return {
                    url: "admin/events/image" + imageurl,
                    method: "DELETE"
                }
            }
        }),
        editEvents: builder.mutation({
            query: ({EventsData, id}) => ({
                url: `admin/events/${id}`,
                method: "PATCH",
                body: EventsData
            })
        }),
        deleteEvents: builder.mutation({
            query: (id) => {
                return {
                    url: `admin/events/${id}`,
                    method: "DELETE",
                }
            }
        }),
    }),
    
})

export const {
    useGetEventsQuery,
    useRemoveEventsImageMutation,
    useCreateEventsMutation,
    usePostEventsImageMutation,
    useEditEventsMutation,
    useDeleteEventsMutation,
} = eventsApiSlice