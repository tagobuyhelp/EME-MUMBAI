'use client';
import React from "react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

import { Card } from "../ui/card";
import Image from "next/image";
import CTAButton from "./CtaButton";

const features = [
  {
    icon: "/assets/icons/Icon2.svg",
    title: "Industry-Experienced Trainers",
  },
  {
    icon: "/assets/icons/Icon4.svg",
    title: "100% Placement Support",
  },
  {
    icon: "/assets/icons/Icon5.png",
    title: "Flexible Time Schedule",
  },
  {
    icon: "/assets/icons/Icon1.svg",
    title: "Capstone Projects & Hands-on Learning",
  },
  {
    icon: "/assets/icons/Icon6.png",
    title: "Continuing Career Assistance",
  },
  {
    icon: "/assets/icons/Icon3.svg",
    title: "EMI Options",
  },
];

export default function WhyChooseEMECard({ Courses, SelectCourses = [], email_sender, Brochure, BrochureName, backgroundImage }) {
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
    <div
      className="w-full flex flex-col items-center justify-center relative bg-cover bg-center text-white py-4"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      
      <div className="w-full flex flex-col gap-3 md:gap-4 max-w-[1140px] p-5">
        <h2 className="text-[18px] md:text-[22px] font-bold text-center md:text-start">Our Learning Methodology {Courses}?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-6 w-auto mx-auto">
          {features.map((feature, idx) => (
            <Card key={idx} className="bg-white backdrop-blur-sm rounded-xl shadow-md transition duration-500 ease-in-out transform hover:scale-105 cursor-pointer p-0">
              <div className="flex items-center gap-4 p-2">
                <Image src={feature.icon} alt="icon" width={50} height={50} className="w-8 h-8 md:w-12 md:h-12" />
                <p className="text-[14px] font-medium text-gray-800 text-start">{feature.title}</p>
              </div>
            </Card>
          ))}
        </div>
        <CTAButton name="Enroll Now"
          styleClasses="text-white bg-[#0057E2] hover:bg-[#0047C2] hover:text-gray-100 rounded-full border-none"
          _this={_this}
        />

      </div>

    </div>
  );
};
