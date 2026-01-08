import { apiConnector, handleResponse } from "./cors";

const contact = {
  SendAdmissionData: async (data) => {
    let response = null;
    try {
      response = await apiConnector(
        "POST",
        "https://backend.emeacademy.co.in/api/v1/contact/email/send",
        {
          fname: data.fname,
          lname: data.lname,
          mobile: data.mobile,
          email: data.email,
          program: data.program,
        }
      );
    } catch (error) {
      response = error;
    }
    return handleResponse(response);
  },
};

export default contact;
