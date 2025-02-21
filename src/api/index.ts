import request from "@/utils/request";
import type { Method, ResponseType } from "axios";

export const requestApi = (
  url: string,
  method?: Method,
  params?: object,
  data?: object,
  responseType?: ResponseType
) => {
  return request({
    url,
    method,
    data,
    params,
    responseType
  });
};
