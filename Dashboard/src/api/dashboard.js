
import { dashboardEndpoints } from "./apis";
import { apiConnector, handleResponse } from "./core";

const { GET_ALL_DASHBOARD_DATA_API } = dashboardEndpoints;

const dashboard = {
  getDashboardData: async (token) => {
    let response = null;
    try {
      response = await apiConnector("GET", GET_ALL_DASHBOARD_DATA_API, null, {
        Authorization: `Bearer ${token}`,
      });
    } catch (error) {
      response = error;
    }
    return handleResponse(response);
  },
};

export default dashboard;
