"use client";
import Image from "next/image";
import { CheckCircle } from "lucide-react";

import { useState } from "react";

function MLCareerProspects() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const Courses = "AI & ML Course";
  const email_sender = "ALL";
  const _this = {
    isModalOpen,
    setIsModalOpen,
    Courses,
    email_sender,
  };
  const data = [
    "AI Consultant in MNCs",
    "AI Developer",
    "AI Specialist ",
    "Machine Learning Engineer",
    "Data Science Specialist",
    "Business Intelligence Developer",
    "AI Product Manager",
    "AI Data Analyst",
  ];

  return (
    <div className="flex flex-col lg:flex-row max-w-[1380px] h-auto mx-auto items-start gap-10 py-10 px-5 md:px-24">
      {/* Heading Section */}
      <div className="h-auto flex flex-col items-start mt-[5]">
        <div className="w-full flex justify-left ">
          <h1 className="text-[#00A2E7] text-[16px] lg:text-2xl font-bold">
            Career Prospects
            <span className="text-[#232D63] p-1 lg:p-4 lg:inline">
              After The Course
            </span>
          </h1>
        </div>
        <div className="text-[#727272] text-[12px] lg:text-[16px] leading-[22px] lg:w-[637px] lg:h-[52px] mt-[12px] lg:mt-3  ">
          Cloud Computing are in high demand across industries. The skills
          learned in our Cloud Computing courses open doors to a wide range of
          career paths.
        </div>

        {/* Career List Section */}
        <div className="w-[355px] h-[168px] md:w-auto gap-x-5 gap-y-3 lg:gap-y-0.5 lg:gap-x-10 grid grid-cols-2 items-left mt-[30px] lg:mt-2">
          {data.map((item, index) => (
            <div
              key={index}
              className="max-w-full h-auto lg:h-14 flex items-center gap-2 lg:gap-2.5"
            >
              <div className="flex items-center gap-2">
                <CheckCircle size={18} className="text-[#14CE03]" />
                <span className="text-[#070B23] text-[12px] md:text-[15px] font-[400] text-left">
                  {item}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Enquire Now Button */}

        {/* Need the fix the alignment of the buttton with the course list */}
        <div className="flex justify-center items-center mt-14 lg:mt-20">
          <button
            className="flex justify-center items-center text-[#fff] text-xs lg:text-[14px] rounded-md bg-[#0057E2] hover:bg-[#00a2e7]/90 px-[10px] lg:px-[24px] py-[14px] font-[600] gap-2.5"
            onClick={() => {
              setIsModalOpen(true);
            }}
          >
            <div>Enquire Now</div>
            <svg
              className=" w-[10px] lg:w-[16px] lg:h-[16px] group-hover:translate-x-1 transition-all "
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="17"
              viewBox="0 0 16 17"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M13.434 8.10009L7.71641 2.38329L8.28281 1.81689L14.9652 8.50009L8.28281 15.1833L7.71641 14.6177L13.434 8.90009H1.59961V8.10009H13.434Z"
                fill="#fff"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Image Section*/}
      <div className="w-full lg:w-[50%] flex items-center lg:items-start lg:pt-[50px] border-40">
        <Image
          className="w-full h-full object-cover"
          src="https://eme25.s3.ap-south-1.amazonaws.com/assets/images/SAP_Course/SAP_Main/CareerProspectImage.svg"
          width={30}
          height={30}
          alt="team"
        />
      </div>
    </div>
  );
}

export default MLCareerProspects;
