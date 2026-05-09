"use client";

import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

import { useState } from "react";
import CTAButton from "@/components/common/CtaButton";

export default function SAPCareerProspects({
  Courses,
    SelectCourses,
    email_sender,
    Brochure,
    BrochureName,
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
    const [ctaType, setCtaType] = useState(null);
    const _this = {
        isModalOpen,
        setIsModalOpen,
        Courses,
        SelectCourses: SelectCourses ? SelectCourses : [],
        email_sender,
        Brochure,
        BrochureName,
        ctaType,           
        setCtaType,         
    };

  const data = [
    "SAP Functional Consultant (FICO, MM, SD, HR)",
    "SAP S/4 HANA Architect",
    "SAP ABAP Developer / Consultant",
    "SAP Project Manager",
    "SAP Basis Administrator",
    "SAP Data & Analytics Specialist",
  ];

  return (
    <div className="flex flex-col lg:flex-row max-w-[1380px] h-auto mx-auto items-start gap-10 py-10 px-5 md:px-24">
      {/* Left Section */}
      <div className="h-auto flex flex-col items-start">
        {/* Heading */}
        <div className="w-full flex justify-start">
          <h2 className="text-[#232D63] text-[24px] lg:text-[40px] font-[700] leading-tight">
            High-Paying Career Paths <span className="text-[#00A2E7]">You Will Unlock</span>
          </h2>
        </div>

        {/* Description */}
        <p className="text-[#727272] text-[12px] lg:text-[16px] leading-[22px] lg:w-[637px] mt-[12px] lg:mt-3">
          Top-tier MNCs and agencies aren't looking for generic graduates—they are aggressively hunting for certified SAP specialists who can execute from day one. Completing this SAP Consultant Course doesn't just add a line to your resume; it makes you an undeniable asset. Backed by the most reliable SAP Course with Placement in Mumbai, you will be primed to step directly into elite, high-paying corporate roles.
        </p>

        {/* Career List */}
        <div className="w-[355px] md:w-auto grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-3 lg:gap-y-2 lg:gap-x-10 mt-[30px] lg:mt-2">
          {data.map((item, index) => (
            <div key={index} className="flex items-center gap-2 lg:gap-2.5">
              <CheckCircle2 size={18} className="text-[#14CE03]" />{" "}
              {/* ✅ Using lucide-react */}
              <span className="text-[#070B23] text-[12px] md:text-[15px] font-[400] text-left">
                {item}
              </span>
            </div>
          ))}
        </div>

        {/* Enquire Now Button */}
        <div className="flex justify-center items-center mt-10 lg:mt-14">
          
          <CTAButton
                    name="Speak to a Placement Expert →"
                    styleClasses="flex justify-center items-center text-white text-xs lg:text-[14px] rounded-md bg-[#0057E2] hover:bg-[#00a2e7]/90 px-[10px] lg:px-[24px] py-[14px] font-[600] gap-2.5 transition-all border-none hover:bg-[#0047C2] hover:text-white"
                    _this={_this}
                  />
        </div>
      </div>

      {/* Right Section (Image) */}
      <div className="w-full lg:w-[50%] flex items-center lg:items-start lg:pt-[50px]">
        <Image
          className="w-full h-full object-cover"
          src="https://eme25.s3.ap-south-1.amazonaws.com/assets/images/SAP_Course/SAP_Main/CareerProspectImage.svg"
          width={30}
          height={30}
          alt="Career Prospect"
        />
      </div>
    </div>
  );
}
