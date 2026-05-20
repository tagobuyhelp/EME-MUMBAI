"use client"

import Image from "next/image"
import { Card } from "@/components/ui/card"
import { useState } from "react";
import CTAButton from "../common/CtaButton";

function CoursesCareerProsoects({
  title = "Complete the Course. Set Your Career.",
  subtitle = "Whether You're a Parent or a Graduate — These Paths Are Yours.",
  description = "Parents who want to set their child's career, or graduates looking for their first job — all these options are open for you:",
  careerRoles = [
    "Digital Marketing Executive",
    "SEO/PPC Specialist",
    "Social Media Manager",
    "Content Marketer",
    "Marketing Automation Specialist",
    "Freelancer / Entrepreneur",
  ],
  salaryInfo = "Average starting salary: ₹4–12 LPA — and this is just the beginning.",
  image,
  Courses,
  SelectCourses,
  email_sender,
  Brochure,
  BrochureName,
  formVariant,
  name = "Download Free Brochure"
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
    formVariant,
  };

  return (
    <section className="w-full py-8 md:py-12 bg-white overflow-hidden">
      <div className="w-full max-w-[1200px] mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-center">
          <div className="space-y-4 md:space-y-5">
            <div className="space-y-2">
              <h2
                className="text-[20px] md:text-[32px] font-black text-[#232D63] leading-tight"
                dangerouslySetInnerHTML={{ __html: title }}
              />
              <p className="text-[#0057E2] font-bold text-[12px] md:text-[14px]">
                {subtitle}
              </p>
              <p className="text-[#4B4B4B] font-medium text-[12px] md:text-[14px] leading-relaxed">
                {description}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 md:gap-3">
              {careerRoles?.map((role, index) => (
                <Card
                  key={index}
                  className="flex flex-row items-center gap-2.5 bg-white p-3 rounded-2xl shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-[#EEF2F7]"
                >
                  <div className="flex-shrink-0 h-6 w-6 rounded-lg bg-[#F4FBFE] border border-[#E6F3FA] flex items-center justify-center">
                    <Image
                      src="/assets/images/Data_Analytics_Landing/icons/tick2.svg"
                      alt="check"
                      width={14}
                      height={14}
                      className="object-contain"
                    />
                  </div>
                  <span className="text-[#232D63] text-[12px] md:text-[13px] font-bold leading-tight">
                    {role}
                  </span>
                </Card>
              ))}
            </div>

            <p className="font-bold text-[#4B4B4B] text-[12px] md:text-[14px]" dangerouslySetInnerHTML={{ __html: `💰 ${salaryInfo}` }} />

            <div className="w-full flex justify-start">
              <CTAButton
                name={name}
                styleClasses="h-11 px-10 bg-[#0057E2] hover:bg-[#0047C2] text-white rounded-xl font-black text-xs md:text-sm shadow-lg shadow-blue-50 transition-all hover:scale-105 active:scale-95 border-none"
                _this={_this}
              />
            </div>
          </div>

          <div className="w-full flex justify-center md:justify-end">
            <div className="relative w-full max-w-[520px] aspect-square rounded-3xl overflow-hidden border border-[#EEF2F7] bg-[#F8FAFC] shadow-[0_10px_40px_rgba(0,0,0,0.06)]">
              <Image
                src={image}
                alt="Career prospects visualization"
                fill
                sizes="(max-width: 768px) 100vw, 520px"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CoursesCareerProsoects
