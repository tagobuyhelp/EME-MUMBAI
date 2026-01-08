"use client";
import React, { useEffect, useState } from "react";
import AdmissionTable from "./admission-table";
import useAuthDataStore from "@/store/authStore";
import API from "@/api";
import Navbar from "@/app/components/common/Navbar";

export default function Page() {
  const [loading, setLoading] = useState(false);
  const [allAdmissionData, setAllAdmissionData] = useState([]);
  const authData = useAuthDataStore((state) => state.authData);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

 

  // ************** GET ALL NEW QUOTATION API CALL *******************

  const getAllAdmissionData = (loadMore = false) => {
    setLoading(true);
    API.admission
      .getAdmissionData(authData.access_token, page)
      .then((response) => {
        if (response.success === true) {
          if (loadMore) {
            setAllAdmissionData((prevData) => ({
              ...prevData,
              data: [...prevData.data, ...response.data],
            }));
          } else {
            setAllAdmissionData(response);
          }
          setHasMore(response.data.length === 15);
          setPage((prevPage) => prevPage + 1);
        }
      })
      .finally(() => {
        setLoading(false);
      });
  };

 useEffect(() => {
   getAllAdmissionData();
 }, []);

  const handleLoadMore = () => {
    getAllAdmissionData(true);
  };

  return (
    <main className="w-full h-full flex flex-col ">
      <Navbar title={"All Admissions"} />

      <div className="flex bg-[#FBFBFB] flex-col gap-y-3  h-[calc(100%-50px)] overflow-y-scroll overscroll-y-contain eme-scroll ">
        <AdmissionTable
          data={allAdmissionData}
          loading={loading}
          hasMore={hasMore}
          onLoadMore={handleLoadMore}
        />
      </div>
    </main>
  );
}
