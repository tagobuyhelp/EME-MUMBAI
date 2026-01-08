'use client';
import React from "react";
import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import CTAButton from "./CtaButton";

 

export default function LearningMethodology ({ Courses, email_sender, Brochure, BrochureName, items, backgroundImage }){
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [ctaType, setCtaType] = useState(null);
    const _this = {
      isModalOpen,
      setIsModalOpen,
      Courses,
      email_sender,
      Brochure,
      BrochureName,
      ctaType,
      setCtaType,
    };
  return (
    <div
      className="w-full flex flex-col items-center justify-center relative bg-cover bg-center text-white"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
    
    <div className="w-full flex flex-col gap-3 md:gap-4 max-w-[1140px] p-5">
        <h2 className="text-[18px] md:text-[22px] font-bold">Our Learning Methodology</h2>
        <p className="text-[12px] md:text-[14px]">
          Discover our innovative learning methodology that empowers you to master and build cutting-edge, high-performance.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {items.map((item, index) => (
            <div key={index} className="flex items-start gap-2 transition duration-500 ease-in-out transform hover:scale-110 cursor-pointer">
              <CheckCircle className="text-green-400 mt-1" size={20} />
              <span className="text-[12px] md:text-[14px]">{item}</span>
            </div>
          ))}
        </div>

        <div className="flex justify-start items-start">
          <CTAButton name="Enroll Now"
              styleClasses="w-fit bg-[#0057E2] hover:bg-[#0047C2] text-white hover:text-white rounded-full font-semibold text-[12px] md:text-[14px] md:px-[44px] border-none cursor-pointer"
              _this={_this}
            />
        </div>
      </div>
      
    </div>
  );
};

