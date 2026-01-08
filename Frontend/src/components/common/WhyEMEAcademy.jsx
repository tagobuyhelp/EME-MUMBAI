"use client";
import { useState } from "react";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import CTAButton from "./CtaButton";

const features = [
  {
    icon: "/assets/icons/IndustryIcon1.svg",
    title: "Industry-Experienced Trainers",
    subtitle:
      "Gain in-depth knowledge from experienced, certified professionals who bring real industry insights to every session.",
  },
  {
    icon: "/assets/icons/PlacementIcon2.svg",
    title: "100% Placement Support",
    subtitle:
      "Receive end-to-end placement guidance, including resume building, interview prep, and job referrals until you get hired.",
  },
  {
    icon: "/assets/icons/FlexibleIcon3.svg",
    title: "Flexible Schedule",
    subtitle:
      "Learn at your convenience with batch timings designed to suit working professionals and students alike.",
  },
  {
    icon: "/assets/icons/CapstoneIcon4.svg",
    title: "Capstone Projects & Hands-on Learning",
    subtitle:
      "Enhance your skills with practical projects to apply concepts confidently.",
  },
  {
    icon: "/assets/icons/LifetimeIcon5.svg",
    title: "Lifetime Career Assistance",
    subtitle:
      "Stay supported throughout your career with continuous mentorship, skill updates, and career guidance.",
  },
  {
    icon: "/assets/icons/EMIIcon6.svg",
    title: "EMI Options",
    subtitle:
      "Make your learning affordable with easy monthly installment plans tailored to your budget.",
  },
];

export default function WhyEMEAcademy() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [ctaType, setCtaType] = useState(null);
  const Courses = "All Course";
  const email_sender = "ALL";
  const SelectCourses = [
    "Data Analytics Course",
    "Sap Course",
    "Digital Marketing Course",
    "HR Management Course",
    "Web Development Course",
    "Data Science Course",
    "Graphics Designing Course",
    "Cyber Security Course",
    "UI UX Course",
    "Animation & VFX Course",
    "Cloud Computing Course",
    "Prompt Engineering with AI Course",
  ];
  const Brochure =
    "https://drive.google.com/file/d/1Sa3EPxn939y85I9D7YwJJ2gGwpw7RGyx/view?usp=sharing";
  const BrochureName = "EME-brochure-2024.pdf";
  const _this = {
    isModalOpen,
    setIsModalOpen,
    SelectCourses,
    Courses,
    email_sender,
    Brochure,
    BrochureName,
    ctaType,
    setCtaType,
  };
  return (
    <div className="w-full max-w-[1380px] mx-auto flex flex-col justify-center items-center">
      <div className="flex flex-col gap-4 items-center text-center py-8 md:py-10 px-4 mx-auto">
        <div className="flex items-baseline gap-2 text-[18px] md:text-[22px] font-[600] text-[#4B4B4B]">
          Why Choose
          <span className="flex flex-col items-end">
            <span className="text-[18px] md:text-[22px] text-[#232D63]">
              EME Academy
            </span>
            <Image
              src="/assets/images/Home/icons/StudentsLineVector.svg"
              alt="line"
              width={80}
              height={40}
              className="ml-2"
            />
          </span>
        </div>

        <div className="w-full md:max-w-[1150px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full mt-4 ">
          {features.map((feature, idx) => (
            <Card
              key={idx}
              className="border border-[#EEEEEE] rounded-[20px] bg-white shadow-sm 
  flex flex-col md:h-[390px] overflow-hidden"
            >
              {/* Top Image */}
              <div className="w-full flex justify-center items-center pb-2">
                <Image
                  src={feature.icon}
                  alt="icon"
                  width={0}
                  height={0}
                  className="w-[140px] h-[140px] md:w-[160px] md:h-[160px] object-contain mx-auto"
                />
              </div>

              {/* Divider */}
              <hr className="w-full border-t border-[#EEEEEE] " />

              {/* Text Content */}
              <div className="px-4  text-start">
                <h3 className="text-[20px] md:text-[22px] font-bold text-[#232D63] font-[700] leading-[26px]">
                  {feature.title}
                </h3>

                <p className="text-[14px] md:text-[16px] text-[#4B4B4B] mt-3 leading-[1.5]">
                  {feature.subtitle}
                </p>
              </div>
            </Card>
          ))}
        </div>

        <CTAButton
          name="Enroll Now"
          styleClasses="mt-6 md:w-fit w-full bg-[#0057E2] hover:bg-[#004CA3] text-[#ffffff] hover:text-[#ffffff] rounded-[12px] font-semibold text-[12px] md:text-[14px] md:px-[50px]"
          _this={_this}
        />
      </div>
    </div>
  );
}
