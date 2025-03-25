import { combineReducers } from "@reduxjs/toolkit";
import newsReducer from './newsSlice'
import projectsReducer from './profileSlice'
import dashboardReducer from "./dashboardSlice"
import authReducer from "./authSlice";
import { apiSlice } from "../api/apiSlice";


const AppReducers = combineReducers(
    {
        [apiSlice.reducerPath]: apiSlice.reducer,
        news: newsReducer,
        projects: projectsReducer,
        dashboard: dashboardReducer,
        auth: authReducer,
    }
)

export default AppReducers