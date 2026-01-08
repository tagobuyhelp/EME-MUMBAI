"use client";
import { Clock, Clock9, FileText, User } from "lucide-react";
import BarchartAdmissionEnquiryData from "./barchart-admission-enquiry-data";
import { AreachartAdmissionEnquiryData } from "./areachart-admission-enquiry-data";
import { useEffect, useState } from "react";
import API from "@/api";
import useAuthDataStore from "@/store/authStore";
import Navbar from "../components/common/Navbar";

export default function Page() {
  const [loading, setLoading] = useState(false);
  const [allDashboardData, setAllDashboardData] = useState([]);
  const authData = useAuthDataStore((state) => state.authData);

  useEffect(() => {
    // Avoid calling API if authData is not available yet
    if (!authData?.access_token) return;

    const getAllDashboardData = async () => {
      try {
        setLoading(true);
        const response = await API.dashboard.getDashboardData(
          authData.access_token
        );
        if (response) setAllDashboardData(response);
      } catch (error) {
        console.error("Dashboard fetch error:", error);
      } finally {
        setLoading(false);
      }
    };

    getAllDashboardData();
  }, [authData?.access_token]);

  if (!authData?.access_token) {
    return (
      <main className="w-full h-screen flex items-center justify-center text-gray-600">
        Please login to access the dashboard.
      </main>
    );
  }

  return (
    <main className="w-full h-full flex flex-col ">
      <Navbar
        title={
          <div className="text-sm text-[#71717A] font-normal flex items-center gap-2">
            <span className="text-sm font-medium text-[#101828] leading-7">
              Dashboard
            </span>
            <span className="hidden sm:block">
              - Effortless Admission & Inquiry Management.
            </span>
          </div>
        }
      />

      <div className="flex bg-[#FBFBFB] flex-col gap-y-3 py-5 px-4 sm:px-8 h-[calc(100%-45px)]">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 ">
          {[
            {
              icon: FileText,
              label: "Total Enquires",
              value: allDashboardData?.totalEnquiries,
            },
            {
              icon: User,
              label: "Total Admissions",
              value: allDashboardData?.totalAdmissions,
            },
            {
              icon: Clock,
              label: "Last 24 hours Admissions",
              value: allDashboardData?.last24HoursAdmissions,
            },
            {
              icon: Clock9,
              label: "Last 24 hours Enquies",
              value: allDashboardData?.last24HoursEnquiries,
            },
          ].map(({ icon: Icon, label, value }, i) => (
            <div
              key={i}
              className="w-full rounded-[6px] border border-[#EEEEEE] bg-white px-2 py-5 flex items-center gap-x-2"
            >
              <div className="bg-[#EAF9FF] w-[40px] h-[40px] rounded-full flex items-center justify-center">
                <Icon className="text-[#44A5FF] w-5" />
              </div>
              <div>
                <p className="text-[#636363] text-[13px] font-medium">
                  {label}
                </p>
                <p className="text-[#464646] text-[18px] font-bold">
                  {loading ? "..." : value ?? 0}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-5">
          <BarchartAdmissionEnquiryData allDashboardData={allDashboardData} />
          <AreachartAdmissionEnquiryData allDashboardData={allDashboardData} />
        </div>
      </div>
    </main>
  );
}
