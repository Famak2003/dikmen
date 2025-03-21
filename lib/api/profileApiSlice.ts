import { apiSlice } from "./apiSlice";

interface GetProjectsOutputType {
    key: React.Key;
    title: string;
    content: string;
    image: string;
    completed: boolean;
    slug: string;
    updatedAt: string
    total: number;
}

interface GetProjectsInputType {
    perPage: number; 
    page: number
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
                console.log(`admin/projects/image/${imageurl}`)
                return {
                    url: "admin/projects/image" + imageurl,
                    method: "DELETE"
                }
            }
        })
    }),
    
})

export const {
    useGetProfileQuery,
    useRemoveProjectImageMutation,
    useCreateProjectMutation,
    usePostProjectImageMutation
} = profileApiSlice