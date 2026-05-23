"use client";
import { useState } from "react";
import certiface from "../../../public/assets/images/certified.png";
import iso from "../../../public/assets/images/isoNew.png";
import startup from "../../../public/assets/images/startup.png";
import Image from "next/image";
import msme from "../../../public/assets/images/msmeOne.svg";
import AdmissionForm from "@/components/common/LandingAdmissionForm";

function AIMLLandingHero({
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

  const handleScrollToForm = () => {
    const element = document.getElementById("admission-form-section");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="w-full max-w-[1380px] mx-auto flex flex-col lg:flex-row items-stretch justify-between gap-y-8 lg:gap-x-12 py-8 lg:py-16 px-5 md:px-24">
      {/* Left Column: Text & Stats */}
      <div className="w-full lg:w-[65%] flex flex-col justify-center items-start text-start">
        {/* Mobile Subtitle */}
        <div className="lg:hidden w-full mb-3">
          <span className="bg-blue-600/10 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
            Western India's No. 1 AI & ML Institute
          </span>
        </div>

        {/* Heading */}
        <h1 className="text-[#232D63] text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight">
          Best Machine Learning & <br className="hidden md:inline" />
          <span className="text-[#00A2E7]">Artificial Intelligence</span> Institute in Mumbai
        </h1>

        {/* Description */}
        <p className="text-gray-700 text-base md:text-lg font-normal mt-5 leading-relaxed max-w-[800px]">
          Begin your journey in the world of advanced algorithms and data with the Best AI Institute Western India has to offer. An intensive Deep Learning Course in Mumbai to accelerate your IT career, it's time to explore your passions and engineer your future.
        </p>

        {/* Stats Badges */}
        <div className="flex flex-wrap items-center gap-3 md:gap-4 mt-6">
          <div className="flex items-center gap-1.5 bg-white/80 backdrop-blur-md border border-amber-200 px-3.5 py-2 rounded-full shadow-sm text-sm font-semibold text-amber-800">
            <span className="text-amber-500 text-lg">⭐</span> 4.5/5.0 Rating
          </div>
          <div className="flex items-center gap-1.5 bg-white/80 backdrop-blur-md border border-blue-200 px-3.5 py-2 rounded-full shadow-sm text-sm font-semibold text-blue-800">
            <span>🏆</span> 12k Enrolled
          </div>
          <div className="flex items-center gap-1.5 bg-white/80 backdrop-blur-md border border-emerald-200 px-3.5 py-2 rounded-full shadow-sm text-sm font-semibold text-emerald-800">
            <span>🌐</span> English, Hindi
          </div>
        </div>

        {/* CTA Register Button for Mobile/Tablet */}
        <div className="lg:hidden w-full mt-8">
          <button
            onClick={handleScrollToForm}
            className="w-full bg-[#E87D1A] hover:bg-[#d66e13] text-white text-base font-bold py-3.5 px-6 rounded-lg transition-all duration-300 shadow-md transform hover:-translate-y-0.5 active:translate-y-0"
          >
            Register Now
          </button>
        </div>

        {/* Trust Badges (Desktop) */}
        <div className="hidden lg:flex flex-col items-start gap-y-4 mt-10 w-full border-t border-gray-200/50 pt-8">
          <div className="flex items-center gap-x-2">
            <Image
              className="w-6 h-6"
              width={24}
              height={24}
              src={certiface}
              alt="Certified Icon"
            />
            <span className="text-gray-900 text-base font-bold">Certified by</span>
          </div>

          <div className="flex items-center gap-x-6">
            <Image
              className="h-10 w-auto object-contain"
              width={120}
              height={40}
              src={msme}
              alt="MSME Certified"
            />
            <Image
              className="h-10 w-auto object-contain"
              width={120}
              height={40}
              src={startup}
              alt="Startup India"
            />
            <Image
              className="h-10 w-auto object-contain"
              width={50}
              height={40}
              src={iso}
              alt="ISO Certified"
            />
          </div>
        </div>
      </div>

      {/* Right Column: Admission Form (Desktop) */}
      <div id="admission-form-section" className="w-full lg:w-[35%] flex justify-center lg:justify-end items-center">
        <div className="w-full max-w-[400px]">
          <AdmissionForm {..._this} />
        </div>
      </div>
    </div>
  );
}

export default AIMLLandingHero;