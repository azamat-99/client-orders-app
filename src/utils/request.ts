import router from "@/router";
import type {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
} from "axios";
import axios from "axios";
import { toast } from "vue3-toastify";

const baseURL: string = import.meta.env.VITE_APP_BASE_URL;
// Create an Axios instance with the base URL
const service: AxiosInstance = axios.create({
  baseURL,
  // timeout: 5000, // Set a timeout for requests (optional)
});
// Request interceptor
service.interceptors.request.use(
  (config: AxiosRequestConfig<any> | any) => {
    // You can modify the request configuration here if needed
    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);

// Response interceptor
service.interceptors.response.use(
  (response: AxiosResponse) => {
    // Check if the response status is within the successful range
    if (response.status >= 200 && response.status < 300) {
      return response;
    } else {
      return Promise.reject(response);
    }
  },
  (error: AxiosError) => {
    // if(error.code  == "ERR_NETWORK") router.replace("/login");

    // Handle response errors
    if (error.response) {
      if (error.response.status >= 400) {
        toast.error(`Error: ${error.response.status}`, {
          position: toast.POSITION.TOP_RIGHT,
        });
        if (error.response.status == 401) router.replace("/login");
      }
    } else if (!error.response) {
      toast.error("Network Error", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }

    return Promise.reject(error);
  }
);

export default service;
