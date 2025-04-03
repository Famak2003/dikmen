import { createSlice } from "@reduxjs/toolkit"
import { GetTableDataOutput } from "@/types"
import { announcementApiSlice } from "../api/announcementApiSlice"

interface AnnouncementStateType {
    allAnnouncement: GetTableDataOutput
}

const initialState: AnnouncementStateType = {
    allAnnouncement: {
        data: [],
        per_page: 10,
        total: 0
    }
}

const announcementSlice = createSlice({
    name: "announcement",
    initialState,
    reducers: {
        setAllAnnouncement: (state, action) => {
            state.allAnnouncement = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
            .addMatcher(
                announcementApiSlice.endpoints.getAnnouncement.matchFulfilled,
                    (state, action) => {
                        state.allAnnouncement = action.payload
                    }
            )
    }
})

export const { setAllAnnouncement } = announcementSlice.actions
export default announcementSlice.reducer