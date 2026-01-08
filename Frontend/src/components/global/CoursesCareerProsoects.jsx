"use client"

import Image from "next/image"
import { Card } from "@/components/ui/card"
import { useState } from "react";
import CTAButton from "../common/CtaButton";

function CoursesCareerProsoects({
  title,
  subtitle,
  careerRoles,
  salaryInfo,
  image,
  Courses,
  SelectCourses,
  email_sender,
  Brochure,
  BrochureName,
  name = "Download Brochure"
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

  return (
    <div className="w-full max-w-6xl mx-auto p-6 flex flex-col md:flex-row items-center gap-8">
      <div className="flex-1 space-y-4 text-[12px] md:text-[14px]">
        <div className="space-y-2">
          <h2 className="text-[18px] md:text-[22px] font-bold text-[#1e3a8a]" dangerouslySetInnerHTML={{ __html: title }}>
          </h2>
          <p className="text-[#727272] font-[500]">{subtitle}</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-2 gap-3">
          {careerRoles?.map((role, index) => (
            <div
              key={index}
              className="transition duration-500 ease-in-out transform hover:scale-105 cursor-pointer"
            >
              <Card
                className="flex flex-row items-center gap-2 bg-white p-2 md:p-4 rounded-[14px] shadow-sm hover:shadow-lg border border-gray-100"
              >
                <div className="flex-shrink-0 h-5 w-5 flex items-center justify-center">
                  <Image
                    src="/assets/images/Data_Analytics_Landing/icons/tick2.svg"
                    alt="check"
                    width={20}
                    height={20}
                    className="w-5 h-5 md:w-10 md:h-10"
                  />
                </div>
                <span className="text-[#232D63]">{role}</span>
              </Card>
            </div>
          ))}
        </div>

        <p className="font-medium text-[#4B4B4B]" dangerouslySetInnerHTML={{ __html: salaryInfo }}></p>

        <div className="w-full md:flex justify-start">
          <CTAButton name="Download Brochure"
            styleClasses="text-white bg-[#0057E2] hover:bg-[#0047C2] hover:text-gray-100 rounded-full border-none"
            _this={_this}
          />

        </div>
      </div>

      <div className="flex-1 md:flex justify-end transition duration-500 ease-in-out transform hover:scale-110 cursor-pointer">
        <Image
          src={image}
          alt="Career prospects visualization"
          width={700}
          height={700}
          className="object-contain"
        />
      </div>
    </div>
  )
}

export default CoursesCareerProsoects
