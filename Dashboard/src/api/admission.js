import { admissionEndpoints } from "./apis";
import { apiConnector, handleResponse } from "./core";

const { GET_ALL_ADMISSION_USER_API, GET_STUDENT_DATA_API } = admissionEndpoints;

const admission = {

  getAdmissionData: async (token,page) => {
    // const token = await getToken();

    let response = null;
    try {
      response = await apiConnector(
        "GET",
        `${GET_ALL_ADMISSION_USER_API}?page=${page}&limit=15`,
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

  getStudentDetails: async (data) => {
    let response = null;
    try {
      response = await apiConnector(
        "GET",
        `${GET_STUDENT_DATA_API}/${data.student_id}`,
        null,
        {
          Authorization: `Bearer ${data.token}`,
        }
      );
    } catch (error) {
      response = error;
    }
    return handleResponse(response);
  },

};

export default admission;
