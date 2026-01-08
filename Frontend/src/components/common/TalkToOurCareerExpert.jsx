"use client";
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Phone } from "lucide-react";
import Image from "next/image";
import React from "react";
import CTAButton from "./CtaButton";

export default function TalkToOurCareerExpert({
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
    SelectCourses,
    email_sender,
    Brochure,
    BrochureName,
    ctaType,
    setCtaType,
  };

  return (
    <Card className="w-full max-w-[1140px] shadow-none border-[#EEEEEE] md:gap-10 flex flex-col md:flex-row rounded-[26px] justify-between items-center px-3 md:px-5 pt-3 md:pl-5 mx-auto">
      {/* Featured In Section */}
      <div className="text-center md:text-start p-4">
        <h2 className="text-[16px] md:text-[22px] text-[#232D63] font-bold text-gray-900">
          Need guidance?{" "}
          <span className="text-[#FF7A00]">Talk to our career expert!</span>
        </h2>
        <p className="text-[#454545] font-[400] text-[12px] md:text-[14px] mt-2 mx-auto">
          Get in touch with our program advisor & get your queries resolved.
        </p>
        <div className="w-full flex justify-center md:justify-start mt-4">
          <CTAButton
            name="Download Brochure"
            styleClasses="text-white bg-[#0057E2] hover:bg-[#0047C2] hover:text-gray-100 rounded-full border-none"
            _this={_this}
          />
        </div>

        <p className="flex flex-col md:flex-row justify-start items-center gap-2 text-[#454545] font-[400] text-[14px] mt-4">
          Reach out to our expert{" "}
          <span className="flex flex-row justify-center items-center gap-2">
            <Phone size={16} />
            9831284098
          </span>
        </p>
      </div>

      {/* Image Section */}
      <div className="relative max-w-[600px] flex justify-end items-right bg-[url('https://eme25.s3.ap-south-1.amazonaws.com/assets/images/Web_Development/pictures/MazeImage.svg')] bg-cover bg-center bg-no-repeat">
        <Image
          width={420}
          height={220}
          src="https://eme25.s3.ap-south-1.amazonaws.com/assets/images/Web_Development/pictures/Expert.webp"
          alt="Talk To Expert Image"
          className="object-contain h-[210px] items-end"
        />
      </div>
    </Card>
  );
}
