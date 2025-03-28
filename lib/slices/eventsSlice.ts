import { createSlice } from "@reduxjs/toolkit"
import { GetTableDataOutput } from "@/types"
import { eventsApiSlice } from "../api/eventsApiSlice"

interface eventsStateType {
    allEvents: GetTableDataOutput
}

const initialState: eventsStateType = {
    allEvents: {
        data: [],
        per_page: 10,
        total: 0
    }
}

const eventsSlice = createSlice({
    name: "events",
    initialState,
    reducers: {
        setAllEvents: (state, action) => {
            state.allEvents = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
            .addMatcher(
                eventsApiSlice.endpoints.getEvents.matchFulfilled,
                    (state, action) => {
                        state.allEvents = action.payload
                    }
            )
    }
})

export const { setAllEvents } = eventsSlice.actions
export default eventsSlice.reducer