import { blogEndpoints } from "./apis";
import { apiConnector, handleResponse } from "./cors";


const {
  GET_ALL_BLOG_DATA_API,
  GET_BLOG_DETAILS_API,
  GET_BLOG_DETAILS_BY_URL_API
} = blogEndpoints;

const blog = {
  getAllBlogs: async (data) => {
    let response = null;
    try {
      response = await apiConnector("GET", GET_ALL_BLOG_DATA_API, null);
    } catch (error) {
      response = error;
    }
    return handleResponse(response);
  },

  getBlogDetails: async (data) => {
    let response = null;
    try {
      response = await apiConnector(
        "GET",
        `${GET_BLOG_DETAILS_API}/${data?._id}`
      );
    } catch (error) {
      response = error;
    }
    return handleResponse(response);
  },
  getBlogDetailsByUrl: async (data) => {
    let response = null;
    try {
      response = await apiConnector(
        "GET",
        `${GET_BLOG_DETAILS_BY_URL_API}/${data?.url}`
      );
    } catch (error) {
      response = error;
    }
    return handleResponse(response);
  },
};

export default blog;
