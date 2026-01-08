"use client";
import { useState } from "react";
import React from "react";
import Image from "next/image";
import CTAButton from "@/components/common/CtaButton";
export default function Cards() {
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
    "Prompt Engineering with AI Course"
  ];
  const Brochure = "https://drive.google.com/file/d/1eGFi7GlCRTLehu5nljGHAwOyFvdwUFiJ/view?usp=sharing";  //needed
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
    <>
      <section className="w-full max-w-[1240px] p-4 md:p-10 flex flex-col md:flex-row justify-center items-center gap-4">
        {/* Left Content */}
        <div className="w-full space-y-3 md:max-w-[620px]">
          <div className="w-full flex justify-center md:justify-start items-baseline md:gap-2 text-[18px] md:text-[22px] font-semibold text-[#4B4B4B] md:leading-normal">
            Our
            <span className="flex flex-col items-end">
              <span className="text-[18px] md:text-[22px] text-[#232D63]">
                Vision
              </span>
              <Image
                src="/assets/images/Home/icons/StudentsLineVector.svg"
                alt="Justicial"
                width={60}
                height={30}
                className="md:ml-2"
              />
            </span>
          </div>

          <p className="text-gray-600 text-center md:text-start text-[14px] md:text-[16px] text-[#4B4B4B] ">
            To be a leading Institute in India, recognized for empowering
            individuals with the knowledge, skills and values necessary to excel
            in their careers and contribute to the nation’s growth.
          </p>
          <div className="w-full flex">
            <CTAButton
              name="Talk to our expert"
              styleClasses="mt-4 text-white bg-[#0057E2] hover:bg-[#0047C2] hover:text-gray-50 rounded-xl z-30 border-none !px-12 "
              _this={_this}
            />
          </div>
        </div>

        {/* Right Content */}
        <div className="w-full flex flex-row gap-4 justify-center">
          <Image
            src="https://eme25.s3.ap-south-1.amazonaws.com/assets/images/About_Us/About_Us_Card1.webp"
            alt="MD Sir"
            width={500}
            height={500}
            className="rounded-xl w-full h-[200px] md:w-[550px] md:h-[280px] object-cover"
          />
        </div>
      </section>

      <section className="w-full max-w-[1240px] px-4 md:px-10 flex flex-col-reverse md:flex-row justify-center items-center gap-4">
        {/* Left Content */}

        <div className="w-full flex flex-row gap-4 justify-center">
          <Image
            src="https://eme25.s3.ap-south-1.amazonaws.com/assets/images/About_Us/About_Us_Card2.jpeg"
            alt="MD Sir"
            width={500}
            height={500}
            className="rounded-xl w-full h-[200px] md:w-[550px] md:h-[280px] object-cover"
          />
        </div>
        {/* Right Content */}

        <div className="flex flex-col w-full gap-3 md:max-w-[620px]">
          <div className="flex justify-center md:justify-start items-baseline gap-2 text-[18px] md:text-[22px] font-semibold text-[#4B4B4B] md:leading-[1]">
            Our
            <span className="flex flex-col items-end">
              <span className="text-[18px] md:text-[22px] text-[#232D63]">
                Mission
              </span>
              <Image
                src="/assets/images/Home/icons/StudentsLineVector.svg"
                alt="Justicial"
                width={60}
                height={30}
                className="md:ml-2"
              />
            </span>
          </div>

          <p className="text-gray-600 text-center md:text-start text-[14px] md:text-[16px] text-[#4B4B4B]">
            To provide high-quality, industry-relevant training programs that
            foster lifelong learning and professional development. Institute is
            committed to: Delivering innovative and practical learning solutions
            through experienced educators and leveraging advanced technologies.
            Creating a supportive and inclusive learning environment that
            nurtures talent and encourages personal and professional growth.
          </p>
          <CTAButton
            name="Talk to our expert"
            styleClasses="mt-4 text-white bg-[#0057E2] hover:bg-[#0047C2] hover:text-gray-50 rounded-xl z-30 border-none !px-12 "
            _this={_this}
          />
        </div>
      </section>
    </>
  );
}
