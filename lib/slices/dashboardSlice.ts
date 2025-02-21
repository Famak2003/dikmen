import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface dashboardSlice {
    selectedKey: string,
    sidebarPos: string,
    isSidebarCollapsed: boolean
}

const initialState: dashboardSlice = {
    selectedKey: "1",
    sidebarPos: 'side',
    isSidebarCollapsed: false,
}

const dashboardSlice = createSlice({
    name: "dashboard",
    initialState,
    reducers: {
        setSelectedKey: (state, action: PayloadAction<string>) => {
            state.selectedKey = action.payload
        },
        setSidebarPos: (state, action: PayloadAction<string>) => {
            state.sidebarPos = action.payload
        },
        setisSidebarCollapsed: (state, action: PayloadAction<boolean>) => {
            state.isSidebarCollapsed = action.payload
        }
    }
})

export const {setSelectedKey, setSidebarPos, setisSidebarCollapsed} = dashboardSlice.actions;
export default dashboardSlice.reducer;