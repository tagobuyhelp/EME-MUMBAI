
// console.log(BASE_URL);



const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

//**************** * AUTH ENDPOINTS ***************
export const authEndpoints = {
  SIGNUP_API: BASE_URL + "/v1/auth/signup",
  LOGIN_API: BASE_URL + "/v1/auth/login",
  REFRESH_TOKEN: BASE_URL + "/v1/auth/refresh-token/",
  UPDATE_PASSWORD: BASE_URL + "/v1/auth/update-password",
  CHANGE_EMAIL_INITIATE: BASE_URL + "/v1/auth/change-email-initiate",
  VERIFY_EMAIL: BASE_URL + "/v1/auth/verify-email",
};

//**************** * ENQUIRY ENDPOINTS ***************
export const enquiryEndpoints = {
  GET_ALL_ENQUIRY_USER_API: BASE_URL + "/v1/enquiry/get_all_enquiry_data",
};

//**************** * ADMISSION ENDPOINTS ***************
export const admissionEndpoints = {
  GET_ALL_ADMISSION_USER_API: BASE_URL + "/v1/admission/get_all_admission_data",
  GET_STUDENT_DATA_API: BASE_URL + "/v1/admission/get-student-details",
};

//**************** * DASHBOARD ENDPOINTS ***************
export const dashboardEndpoints = {
  GET_ALL_DASHBOARD_DATA_API: BASE_URL + "/v1/dashboard/get_all_dashboard_data",
};

//**************** * BLOGS ENDPOINTS ***************
export const blogEndpoints = {
  GET_ALL_BLOG_DATA_API: BASE_URL + "/v1/blog/get-all-blogs-data",
  ADD_BLOG_API: BASE_URL + "/v1/blog/add-blog",
  GET_BLOG_DETAILS_API: BASE_URL + "/v1/blog/get-blog-details",
  UPDATE_BLOG_API: BASE_URL + "/v1/blog/update-blog",
  DELETE_BLOG_API: BASE_URL + "/v1/blog/delete-blog",
};
