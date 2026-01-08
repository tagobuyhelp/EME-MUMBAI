"use client";

import { useEffect, useState } from "react";
import EnquireTable from "./enquire-table";
import useAuthDataStore from "@/store/authStore";
import API from "@/api";
import Navbar from "@/app/components/common/Navbar";
import { toast } from "sonner";

export default function Page() {
  const [loading, setLoading] = useState(false);
  const [allEnquiryData, setAllEnquiryData] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const authData = useAuthDataStore((state) => state.authData);

  // ************** GET ALL ENQUIRY DATA API CALL *******************
 
const getAllEnquiryData = (page, reset = false) => {
  if (!authData?.access_token) return; // prevent error during prerender
  setLoading(true);

  API.enquiry
    .getEnquiryData(authData.access_token, page)
    .then((response) => {
      if (response.success === true) {
        setAllEnquiryData((prevData) => {
          if (reset || !prevData) {
            return response;
          } else {
            const existingIds = new Set(
              prevData?.data?.map((i) => i._id) || []
            );
            const uniqueNewData = response.data.filter(
              (i) => !existingIds.has(i._id)
            );
            return {
              ...response,
              data: [...(prevData?.data || []), ...uniqueNewData],
            };
          }
        });
        setHasMore(response.data.length === 100);
        setCurrentPage(page);
      } else {
        setAllEnquiryData(null);
        toast.warning("Failed to fetch enquiry data");
      }
    })
    .catch((err) => {
      console.error("Error fetching enquiry data:", err);
      toast.error("Something went wrong while fetching enquiry data");
    })
    .finally(() => setLoading(false));
};
  useEffect(() => {
 

    if (!authData?.access_token) return;
    getAllEnquiryData(1, true);
  }, [authData?.access_token]);

  const handleLoadMore = () => {
    if (!loading && hasMore) {
      getAllEnquiryData(currentPage + 1);
    }
  };

  // ✅ Safe fallback to prevent prerender crash
  if (!authData?.access_token) {
    return (
      <main className="w-full h-screen flex items-center justify-center text-gray-600">
        Please login to access enquiry data.
      </main>
    );
  }

  return (
    <main className="w-full h-full flex flex-col">
      <Navbar title={"All Enquires"} />

      <div className="flex bg-[#FBFBFB] flex-col gap-y-3 h-[calc(100%-50px)] overflow-y-scroll overscroll-y-contain eme-scroll">
        <EnquireTable
          data={allEnquiryData?.data || []}
          loading={loading}
          onLoadMore={handleLoadMore}
          hasMore={hasMore}
          last24HoursRecordCount={allEnquiryData?.last24HoursRecordCount || 0}
          totalItems={allEnquiryData?.totalRecords || 0}
        />
      </div>
    </main>
  );
}
