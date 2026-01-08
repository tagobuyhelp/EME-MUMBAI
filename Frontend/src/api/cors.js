import axios from "axios";
import { toast } from "sonner";

export const axiosInstance = axios.create({});
export const apiConnector = (method, url, bodyData, headers, params) => {
  return axiosInstance({
    method: `${method}`,
    // url: `${url}`,
    url: url,
    data: bodyData ? bodyData : null,
    headers: headers ? headers : null,
    params: params ? params : null,
  });
};

export const handleResponse = (response) => {
  if (response?.status === 202)
  // toast.error(response.data.error);
  {
    console.log(response.data.error);
    console.log("202 error handling called");

  }
  else if (response?.response?.status === 500) toast.error(response?.message);
  else if (response?.response?.status === 401) {
    toast.error("You are not authorized for the action.");
  } else if (response?.status === 200) return response?.data;
  else toast.error("Something went wrong. Please contact server admin.");
  return false;
};
