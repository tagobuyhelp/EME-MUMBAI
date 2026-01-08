import axios from "axios";
import moment from "moment";
import { toast } from "sonner";
import { authEndpoints } from "./apis";
const { REFRESH_TOKEN } = authEndpoints;

export const axiosInstance = axios.create({});
export const apiConnector = (method, url, bodyData, headers, params) => {
  return axiosInstance({
    method: `${method}`,
    url: `${url}`,
    data: bodyData ? bodyData : null,
    headers: headers ? headers : null,
    params: params ? params : null,
  });
};

export const handleResponse = (response) => {
  
  if (response?.status === 202) toast.warning("Something went wrong", {
    description: response.data.error,
  });
  else if (response?.response?.status === 500)
    toast.error("Server error", {
      description: response?.message,
    });
  else if (response?.response?.status === 401) {
    toast.error("Session expired", {
      description: "Please logout and log in again.",
    });
  } else if (response?.status === 200) return response?.data;
  else
     toast.error("Unexpected error", {
       description: "Please contact server admin.",
     });
  return false;
};


// export const getToken = async () => {
//   const session = localStorage.getItem("authentications")
//     ? JSON.parse(localStorage.getItem("authentications"))
//     : null;
//   console.log(session);
//   
// 
//   let response = session?.access_token;
//   const token_expired =
//     moment(session?.token_expiry).diff(moment(), "seconds") < 5 ? true : false;
// 
//   if (session && token_expired) {
//     //call refresh token and update client token
//     // console.log("token refresh");
//     try {
//       const apiresponse = await apiConnector(
//         "GET",
//         REFRESH_TOKEN +
//           session.email +
//           "/" +
//           session.active_session_refresh_token +
//           "/" +
//           session.device
//       );
//       if (apiresponse?.status === 200) {
//         session.access_token = apiresponse.data.access_token;
//         session.token_expiry = apiresponse.data.token_expiry;
//         session.active_session_refresh_token =
//           apiresponse.data.active_session_refresh_token;
//         response = session.access_token;
//         localStorage.setItem("userSession", JSON.stringify(session));
//       } else {
//         throw apiresponse.data.error;
//       }
//     } catch (e) {
//       Config.UNAUTHORIZED_EXCEPTION = true;
//       toast.error("Unauthorized api call", {
//         description: "You are not authorized for the action.",
//       });
//     }
//   }
// 
//   return response + "||" + session?.device;
// };