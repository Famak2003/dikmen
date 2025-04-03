import { createSlice } from "@reduxjs/toolkit"
import { pagesApiSlice } from "../api/pagesApiSlice"
import { arrayMove } from "@dnd-kit/sortable"
import { LocaleType } from "@/types";

// interface pagesStateType {
//     allPages: GetTableDataOutput
// }

export interface PagesDataType {
    key: string;
    title: LocaleType,
    visible: boolean
}

interface initialType {
    data: PagesDataType[]
    per_page: number
    total: number
}

interface pagesType {
    allPages: initialType
}

const initialState: pagesType = {
    allPages: {
        data: [
            { key: "1", title: {en: "Name", tr: "ufdbydhf"}, visible: true},
            { key: "2", title: {en: "Name", tr: "ufdbydhf"}, visible: true},
            { key: "3", title: {en: "Name", tr: "ufdbydhf"}, visible: false},
            { key: "4", title: {en: "Name", tr: "ufdbydhf"}, visible: true},
            { key: "5", title: {en: "Name", tr: "ufdbydhf"}, visible: false},
            { key: "6", title: {en: "Name", tr: "ufdbydhf"}, visible: true},
        ],
        per_page: 10,
        total: 0
    }
}

const pagesSlice = createSlice({
    name: "pages",
    initialState,
    reducers: {
        setAllPages: (state, action) => {
            state.allPages = action.payload
        },
        moveRow: (state, action) => {
            const { activeId, overId } = action.payload;
            const oldIndex = state.allPages.data.findIndex((item) => item.key === activeId);
            const newIndex = state.allPages.data.findIndex((item) => item.key === overId);
            state.allPages.data = arrayMove(state.allPages.data, oldIndex, newIndex);
        },
    },
    extraReducers: (builder) => {
        builder
            .addMatcher(
                pagesApiSlice.endpoints.getPage.matchFulfilled,
                    (state, action) => {
                        console.log("API Response: ", action.payload); // Debugging
                        state.allPages.data = action.payload
                    }
            )
    }
})

export const { setAllPages, moveRow } = pagesSlice.actions
export default pagesSlice.reducer