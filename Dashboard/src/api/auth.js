import { apiConnector, handleResponse } from "./core";
import { authEndpoints } from "./apis";
import { deleteCookie } from "@/utilities";
import { toast } from "sonner";

const {
  SIGNUP_API,
  LOGIN_API,
  UPDATE_PASSWORD,
  CHANGE_EMAIL_INITIATE,
  VERIFY_EMAIL,
} = authEndpoints;
const auth = {
  Login: async (data) => {
    let response = null;
    try {
      response = await apiConnector("POST", LOGIN_API, data);
    } catch (error) {
      response = error;
    }
    return handleResponse(response);
  },

  SignUp: async (data) => {
    let response = null;
    try {
      response = await apiConnector("POST", SIGNUP_API, data);
    } catch (error) {
      response = error;
    }
    return handleResponse(response);
  },


  Logout: async (router, clearAuthData) => {
    clearAuthData();
    router.push("/");
    toast.success("Logged Out");
  },

  UpdatePassword: async (data) => {
    let response = null;
    try {
      response = await apiConnector("PUT", UPDATE_PASSWORD, data, {
        Authorization: `Bearer ${data?.token}`,
      });
    } catch (error) {
      response = error;
    }
    return handleResponse(response);
  },

  ChangeEmailInitiate: async (data) => {
    let response = null;
    try {
      response = await apiConnector("POST", CHANGE_EMAIL_INITIATE, data, {
        Authorization: `Bearer ${data?.token}`,
      });
    } catch (error) {
      response = error;
    }
    return handleResponse(response);
  },

  verifyEmail: async (data) => {
    let response = null;
    try {
      response = await apiConnector("POST", VERIFY_EMAIL, data, {
        Authorization: `Bearer ${data?.token}`,
      });
    } catch (error) {
      response = error;
    }
    return handleResponse(response);
  },
};

export default auth;
