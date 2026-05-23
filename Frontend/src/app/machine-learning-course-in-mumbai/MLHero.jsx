"use client";
import { useState } from "react";
import Image from "next/image";
import OurRecuiter from "@/components/common/OurRecuiter";
import CTAButton from "@/components/common/CtaButton";
import { Star, Trophy, Globe } from "lucide-react";

export default function MLHero({
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

  return (
    <>
      <div className="w-full flex flex-col lg:flex-row justify-between gap-10 items-center py-10 lg:py-16 px-5 md:px-24 max-w-[1380px] mx-auto">
        {/* Left Column: Text & Stats */}
        <div className="w-full lg:w-[60%] flex flex-col items-start gap-y-5 text-[#232D63]">
          <div className="rounded-full bg-blue-50 border border-blue-200/50 px-4 py-1.5 text-[12px] font-semibold text-[#00A2E7]">
            Western India's No. 1 AI & ML Institute
          </div>

          <h1 className="text-3xl lg:text-5xl font-extrabold leading-tight text-[#232D63] text-left">
            Best Machine Learning & <br className="hidden md:inline" />
            <span className="text-[#00A2E7]">Artificial Intelligence</span> Institute in Mumbai
          </h1>

          <p className="text-gray-700 text-sm lg:text-lg leading-relaxed text-left max-w-[700px]">
            Begin your journey in the world of advanced algorithms and data with the Best AI Institute Western India has to offer. An intensive Deep Learning Course in Mumbai to accelerate your IT career, it's time to explore your passions and engineer your future.
          </p>

          {/* Stats Row */}
          <div className="flex flex-wrap items-center gap-4 py-2">
            <div className="flex items-center gap-1.5 bg-white border border-amber-200 px-3.5 py-2 rounded-full shadow-sm text-sm font-semibold text-amber-800">
              <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
              <span>4.5/5.0 Rating</span>
            </div>
            <div className="flex items-center gap-1.5 bg-white border border-blue-200 px-3.5 py-2 rounded-full shadow-sm text-sm font-semibold text-blue-800">
              <Trophy className="w-4 h-4 text-blue-600" />
              <span>12k Enrolled</span>
            </div>
            <div className="flex items-center gap-1.5 bg-white border border-emerald-200 px-3.5 py-2 rounded-full shadow-sm text-sm font-semibold text-emerald-800">
              <Globe className="w-4 h-4 text-emerald-600" />
              <span>English, Hindi</span>
            </div>
          </div>

          <div className="pt-4">
            <CTAButton
              name="Register Now"
              styleClasses="flex flex-row text-white text-sm rounded-lg bg-[#E87D1A] hover:bg-[#d66e13] px-8 py-3.5 font-bold transition-all duration-300 shadow-md transform hover:-translate-y-0.5"
              _this={_this}
            />
          </div>
        </div>

        {/* Right Column: Hero Image */}
        <div className="w-full lg:w-[40%] flex justify-center lg:justify-end">
          <div className="relative w-full max-w-[450px] aspect-[4/3] rounded-2xl overflow-hidden shadow-lg border border-gray-100">
            <Image
              className="w-full h-full object-cover"
              src="https://eme25.s3.ap-south-1.amazonaws.com/assets/images/AiMLImage.jpg"
              width={450}
              height={337}
              alt="AI and Machine Learning training at EME Academy"
              priority
            />
          </div>
        </div>
      </div>

      <div className="flex w-full max-h-auto bg-[#ffffff] bg-[linear-gradient(to_right,#4f4f4f23_0.1px,transparent_0.9px),linear-gradient(to_bottom,#4f4f4f23_0.1px,transparent_0.9px)] lg:bg-[linear-gradient(to_right,#4f4f4f23_0.1px,transparent_0.8px),linear-gradient(to_bottom,#4f4f4f23_0.1px,transparent_0.8px)] bg-[size:90px_50px] 2xl:bg-[size:100px_80px]">
        <OurRecuiter />
      </div>
    </>
  );
}
