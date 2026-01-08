const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

// ADMISSION FORM ENDPOINTS

export const admissionEndpoints = {
  MAIN_ADMISSION_FORM_API: BASE_URL + "/v1/admission/add_admission",
  ENQUIRY_FORM_API: BASE_URL + "/v1/enquiry/add_enquiry",
};


//**************** * BLOGS ENDPOINTS ***************
export const blogEndpoints = {
  GET_ALL_BLOG_DATA_API: BASE_URL + "/v1/blog/get-all-blogs-data",
  GET_BLOG_DETAILS_API: BASE_URL + "/v1/blog/get-blog-details",
  GET_BLOG_DETAILS_BY_URL_API: BASE_URL + "/v1/blog/get-blog-details-by-url",
};
