"use client";

import { Card } from "@/components/ui/card";
import { useState } from "react";
import Image from "next/image";
import React from "react";
import CTAButton from "./CtaButton";

export default function NeedToKnowMore({
  Courses,
  SelectCourses = [],
  email_sender,
  Brochure,
  BrochureName,
  formVariant,
  buttonText,
  title,
  description,
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [ctaType, setCtaType] = useState(null);
  const _this = {
    isModalOpen,
    setIsModalOpen,
    Courses,
    SelectCourses,
    email_sender,
    Brochure,
    BrochureName,
    ctaType,
    setCtaType,
    formVariant,
  };
  return (
    <Card className="w-full max-w-[1140px] shadow-none border-[#EEEEEE] bg-[#F4FBFE] gap-2 md:gap-10 flex flex-col md:flex-row rounded-[26px] justify-center md:justify-between items-center px-4 pt-1 md:pl-5 mx-auto">
      {/* Featured In Section */}
      <div className="flex flex-col justify-center items-center md:items-start md:justify-start text-center md:text-start">
        <h2 className="text-[16px] md:text-[22px] font-bold text-gray-900">
          {title || "Need to know more?"} <span className="text-[#FF7A00]"></span>
        </h2>
        <p className="text-[#454545] font-[400] text-[12px] md:text-[14px] mt-2 mx-auto">
          {description || "Get to know the course in-depth by downloading the course brochure."}
        </p>
        <CTAButton
          name={buttonText || "Download Brochure"}
          styleClasses="text-white bg-[#0057E2] hover:bg-[#0047C2] hover:text-gray-100 rounded-full border-none mt-4"
          _this={_this}
        />
      </div>

      {/* Image Section */}
      <div className="relative max-w-[620px] flex justify-end items-center bg-[url('https://eme25.s3.ap-south-1.amazonaws.com/assets/images/Web_Development/pictures/MazeImage.svg')] bg-cover bg-center bg-no-repeat">
        <Image
          width={636}
          height={251}
          src="/assets/images/Home/CareersImage2.webp"
          alt="CareersImage"
          className="object-contain"
        />
      </div>
    </Card>
  );
}
