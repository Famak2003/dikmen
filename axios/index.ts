import axios from "axios";
import toast from "react-hot-toast";
// import Cookies from 'js-cookie';

export const API_URL = "http://192.168.144.32:8000/api";

const axiosInstance = axios.create({
  baseURL: API_URL,
});

// Request Interceptor: Called before sending the request
axiosInstance.interceptors.request.use(
  (config) => {
      config.withCredentials=true
      config.headers["Content-Type"] = 'application/json';
      config.headers.Accept = 'application/json';
    // Show a loading toast
    // config._toastId = toast.loading("Sending request...");
    return config;
  },
  (error) => {
    // Handle request error
    return Promise.reject(error);
  }
);

// Response Interceptor: Called after receiving the response
axiosInstance.interceptors.response.use(
  (response) => {
    // Dismiss the loading toast and show success
    // if (response.config._toastId) {
      // toast.dismiss(response.config._toastId);
      // toast.success("Request completed successfully!");
    // }

    return response;
  },
  (error) => {
    // Dismiss the loading toast and show an error
    if (error.config?._toastId) {
      toast.dismiss(error.config._toastId);
      toast.error(
        error.response?.data?.message || "An error occurred during the request."
      );
    }


    if (error.response?.status === 401) {
      toast.error("Unauthorized")
    //   if (!(window.location.pathname === "en/auth/login")){
    //     // Cookies.remove('token')
    //     window.location.href = "/auth/login"
    //   }
    }

    return Promise.reject(error); // Propagate the error
  }
);

export default axiosInstance;