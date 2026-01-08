"use client";
import { useState } from "react";
import SliderLandingCompany from "@/components/common/SliderLandingCompany";

import Image from "next/image";

import AllSapCourseLanding from "./AllSapCourseLanding";

import LandingAnalytics from "@/components/common/LandingAnalytics";
import CourseData from "@/data/course.json";

export default function SAPMainContent() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const Courses = CourseData?.SapCourse;
  const email_sender = "SAP";
  const _this = {
    isModalOpen,
    setIsModalOpen,
    Courses,
    email_sender,
  };
  return (
    <main className="relative w-full  flex flex-col items-center pt-[40px] bg-[url('https://eme25.s3.ap-south-1.amazonaws.com/assets/images/bgimage.png')] ">
      <div className=" w-full bg-[#ffffff]">
        <SliderLandingCompany />
      </div>
      <div className="flex w-full   bg-[#ffffff]  ">
        <AllSapCourseLanding {..._this} />
      </div>
      <div className="flex w-full   bg-[#ffffff]  ">
        <LandingAnalytics />
      </div>
      <div className="hidden lg:inline w-full h-full absolute inset-0 z-10">
        <Image
          className="  w-full h-full object-fill "
          src="https://eme25.s3.ap-south-1.amazonaws.com/assets/images/bgimage.png"
          alt="bgimage"
        />
      </div>
    </main>
  );
}
