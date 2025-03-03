import { combineReducers } from "@reduxjs/toolkit";
import dashboardReducer from "./dashboardSlice"
import authReducer from "./authSlice";
import { apiSlice } from "../api/apiSlice";


const AppReducers = combineReducers(
    {
        [apiSlice.reducerPath]: apiSlice.reducer,
        dashboard: dashboardReducer,
        auth: authReducer
    }
)

export default AppReducers