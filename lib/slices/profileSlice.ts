import { createSlice } from "@reduxjs/toolkit"
import { profileApiSlice } from "../api/profileApiSlice"
import { GetTableDataOutput } from "@/types"

interface ProjectStateType {
    allProjects: GetTableDataOutput
}

const initialState: ProjectStateType = {
    allProjects: {
        data: [],
        per_page: 10,
        total: 0
    }
}

const projectSlice = createSlice({
    name: "projects",
    initialState,
    reducers: {
        setAllProjects: (state, action) => {
            state.allProjects = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
            .addMatcher(
                profileApiSlice.endpoints.getProfile.matchFulfilled,
                    (state, action) => {
                        state.allProjects = action.payload
                        console.log("Projects Action ===>", action)
                    }
            )
    }
})

export const { setAllProjects } = projectSlice.actions
export default projectSlice.reducer