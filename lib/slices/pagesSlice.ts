import { createSlice } from "@reduxjs/toolkit"
import { pagesApiSlice } from "../api/pagesApiSlice"
import { arrayMove } from "@dnd-kit/sortable"
import { FormContent, LocaleType, PagesDataType } from "@/types";

// interface pagesStateType {
//     allPages: GetTableDataOutput
// }

// export interface PagesDataType {
//     id: number;
//     title: LocaleType,
//     visible: boolean
// }

interface initialType {
    data: PagesDataType[]
    per_page: number
    total: number
}

interface pagesType {
    allPages: initialType
    sub_pages: FormContent[]
}

const initialState: pagesType = {
    allPages: {
        data: [
            { id: 1, title: {en: "Name", tr: "ufdbydhf"}, visible: true},
            { id: 2, title: {en: "Name", tr: "ufdbydhf"}, visible: true},
            { id: 3, title: {en: "Name", tr: "ufdbydhf"}, visible: false},
            { id: 4, title: {en: "Name", tr: "ufdbydhf"}, visible: true},
            { id: 5, title: {en: "Name", tr: "ufdbydhf"}, visible: false},
            { id: 6, title: {en: "Name", tr: "ufdbydhf"}, visible: true},
        ],
        per_page: 10,
        total: 0
    },
    sub_pages: [
        {
            title: {
                en: "",
                tr: ""
            },
            content: {
                en: "",
                tr: ""
            },
            slug: "",
            images: []
        }
    ],
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
            const oldIndex = state.allPages.data.findIndex((item) => item.id === activeId);
            const newIndex = state.allPages.data.findIndex((item) => item.id === overId);
            state.allPages.data = arrayMove(state.allPages.data, oldIndex, newIndex);
        },
        setSub_Pages: (state, action) => {
            state.sub_pages = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
            .addMatcher(
                pagesApiSlice.endpoints.getPages.matchFulfilled,
                    (state, action) => {
                        console.log("API Response: ", action.payload); // Debugging
                        state.allPages.data = action.payload
                    }
            )
    }
})

export const { setAllPages, moveRow, setSub_Pages } = pagesSlice.actions
export default pagesSlice.reducer