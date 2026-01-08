import { admissionEndpoints } from "./apis";
import { apiConnector, handleResponse } from "./cors";

const { MAIN_ADMISSION_FORM_API, ENQUIRY_FORM_API } = admissionEndpoints;

const admission = {
  SendAdmissionData: async (data) => {
    let response = null;
    try {
      response = await apiConnector("POST", ENQUIRY_FORM_API, {
        name: data.name,
        phone_number: data.mobile,
        email: data.email,
        course: data.course,
        email_sender: data.email_sender,
        // UTM tracking fields and page URL
        utm_source: data.utm_source || null,
        utm_medium: data.utm_medium || null,
        utm_campaign: data.utm_campaign || null,
        utm_term: data.utm_term || null,
        utm_content: data.utm_content || null,
        page_url: data.page_url || null,
      });
    } catch (error) {
      response = error;
    }
    return handleResponse(response);
  },

  sendMainAdmissionFormData: async (data) => {
    let response = null;

    try {
      response = await apiConnector(
        "POST",
        MAIN_ADMISSION_FORM_API,
        {
          name: data.name || "",
          date_of_birth: data.date_of_birth || "",
          age: data.age || "",
          gender: data.gender || "",
          location: data.location || "",
          blood_group: data.blood_group || "",
          contact_number: data.contact_number || data.mobile || "",
          email: data.email || "",
          // nationality: data.nationality || "",
          permanent_address: data.permanent_address || "",
          course_name: data.course_name || "",
          course_fee: data.course_fee || "",
          course_duration: data.course_duration || "",
          guardian_name: data.guardian_name || "",
          guardian_contact: data.guardian_contact || "",
          academic_qualification: data.academic_qualification || "",
        },
        {
          "Content-Type": "application/json",
        }
      );
    } catch (error) {
      response = error;
    }

    return handleResponse(response);
  },
};

export default admission;
