import {
    BaseQueryFn,
    createApi,
    FetchArgs,
    fetchBaseQuery,
    FetchBaseQueryError,
  } from "@reduxjs/toolkit/query/react";
  import { RootState } from "../store";
//   import { logoutUser, setAuthorizationToken } from "../slices/authSlice";
import toast from "react-hot-toast";
import { logoutUser, setAuthorizationToken } from "../slices/authSlice";
import clearCookie from "@/utility/clearToken";

interface authorizationTokenType {
    payload: string,
    type: string
}
  
  const baseQueryWithReauth: BaseQueryFn<
    string | FetchArgs,
    unknown,
    FetchBaseQueryError
  > = async (args, api, extraOptions) => {
    // create a fetch base query instance with credentials included
    const baseQuery = fetchBaseQuery({
      baseUrl: process.env.NEXT_PUBLIC_BASE_URL,
      credentials: "include", // include cookies when making requests
      prepareHeaders: (headers, { getState }) => {
        const state = getState() as RootState;
        const authorizationToken = state.auth.token;
  
        if (authorizationToken) {
          headers.set("Authorization", `Bearer ${authorizationToken}`);
        }
        headers.set("Accept", "application/json")
        return headers;
      },
    });
  
    // Make the initial API request
    let result = await baseQuery(args, api, extraOptions);

    const authorizationToken = result.meta?.response?.headers?.get('Authorization')
    if(authorizationToken){
        api.dispatch(setAuthorizationToken(authorizationToken.split(" ")[1]))
        document.cookie = `token=${authorizationToken}; path=/; secure; samesite=strict`;
    }

  
    // If forbidden (401), attempt to refresh the token
    if (result.error && result.error.status === 401) {
        console.warn("Session expired. Logging out...");
        // Remove token from cookie
        clearCookie("token")
        api.dispatch(logoutUser(undefined));
        toast.error("Unauthorized");
        window.location.reload();

    //   console.warn("Access token expired, attempting refresh...");
  
    //   // Attempt to refresh the token
    //   const refreshResult = await baseQuery(
    //     { url: "/admin/refresh-token", method: "GET" }, // Refresh token endpoint
    //     api,
    //     extraOptions
    //   );
  
      // console.log("refreshResult", refreshResult);
  
    //   if (refreshResult.data) {

    //     const newAccessToken = (
    //       refreshResult.data as {
    //         status: string;
    //         message: string;
    //         data: { token: string };
    //       }
    //     ).data.token;
  
    //     // Store the new access token in Redux
    //     api.dispatch(setAuthorizationToken(newAccessToken));
  
    //     // Retry the original request with the new access token
    //     result = await baseQuery(args, api, extraOptions);
    //   } else {
    //     // Refresh token failed, log out the user
    //     console.warn("Session expired. Logging out...");
    //     api.dispatch(logoutUser(undefined));
    //     toast.error("Login session expired");
    //   }
    }
  
    return result;
  };
  
  // Define a base URL for your API
  export const apiSlice = createApi({
    reducerPath: "api",
    baseQuery: baseQueryWithReauth,
    endpoints: (builder) => ({}),
  });