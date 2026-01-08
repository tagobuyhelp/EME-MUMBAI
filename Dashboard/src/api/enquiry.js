
import { enquiryEndpoints } from "./apis";
import { apiConnector, handleResponse } from "./core";

const { GET_ALL_ENQUIRY_USER_API } = enquiryEndpoints;

const enquiry = {
  getEnquiryData: async (token,page) => {
    let response = null;
    try {
      response = await apiConnector(
        "GET",
        `${GET_ALL_ENQUIRY_USER_API}?page=${page}&limit=100`,
        null,
        {
          Authorization: `Bearer ${token}`,
        }
      );
    } catch (error) {
      response = error;
    }
    return handleResponse(response);
  },
};

export default enquiry;
