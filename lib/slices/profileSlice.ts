import { createSlice } from "@reduxjs/toolkit"
import { profileApiSlice } from "../api/profileApiSlice"


const initialState = {
    allProjects: null
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
                        console.log("Projects Action ===>", action)
                    }
            )
    }
})
