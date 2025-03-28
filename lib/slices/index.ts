import { apiSlice } from "../api/apiSlice";
import { combineReducers } from "@reduxjs/toolkit";

import announcementReducer from './announcementSlice';
import newsReducer from './newsSlice'
import projectsReducer from './profileSlice'
import dashboardReducer from "./dashboardSlice"
import authReducer from "./authSlice";


const AppReducers = combineReducers( // Combine all reducers in the application
    {
        [apiSlice.reducerPath]: apiSlice.reducer, // automatically add apiSlice reducers.
        announcement: announcementReducer,
        news: newsReducer,
        projects: projectsReducer,
        dashboard: dashboardReducer,
        auth: authReducer,
    }
)

export default AppReducers