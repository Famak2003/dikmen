import { createSlice } from "@reduxjs/toolkit"
import { newsApiSlice } from "../api/newsApiSlice"
import { GetTableDataOutput } from "@/types"

interface NewsStateType {
    allNews: GetTableDataOutput
}

const initialState: NewsStateType = {
    allNews: {
        data: [],
        per_page: 10,
        total: 0
    }
}

const newsSlice = createSlice({
    name: "news",
    initialState,
    reducers: {
        setAllNews: (state, action) => {
            state.allNews = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
            .addMatcher(
                newsApiSlice.endpoints.getNews.matchFulfilled,
                    (state, action) => {
                        state.allNews = action.payload
                        console.log("News Action ===>", action)
                    }
            )
    }
})

export const { setAllNews } = newsSlice.actions
export default newsSlice.reducer