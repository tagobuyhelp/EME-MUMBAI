"use client";
import { useState } from "react";
import Image from "next/image";
import CTAButton from "@/components/common/CtaButton";

export default function FoundersMessage() {
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
  const Brochure = "https://drive.google.com/file/d/1Sa3EPxn939y85I9D7YwJJ2gGwpw7RGyx/view?usp=sharing"; //needed
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
    <div className="w-full max-w-[1200px] gap-4 md:gap-2 flex flex-col-reverse md:flex-row justify-center items-center py-2 md:py-6 px-6 mx-auto">
      <div className="flex flex-col gap-2">
        <div className="flex justify-center md:justify-start items-baseline md:gap-2 text-[18px] md:text-[22px] font-semibold text-[#4B4B4B] md:leading-[1.2]">
          Our
          <span className="flex flex-col items-end">
            <span className="text-[18px] md:text-[22px] text-[#232D63]">
              Founder’s Message
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
        <Image
          src="https://eme25.s3.ap-south-1.amazonaws.com/assets/images/About_Us/founder.jpg"
          alt="MD Sir"
          width={490}
          height={290}
          className="rounded-xl w-[480px] h-[300px] object-cover"
        />
        <CTAButton
          name="Explore Our Courses"
          styleClasses="md:hidden mt-4 text-white bg-[#0057E2] hover:bg-[#0047C2] hover:text-gray-50 rounded-full"
          _this={_this}
        />
      </div>

      <div className="flex-1 space-y-4 p-3 md:p-6">
        <Image
          src="https://eme25.s3.ap-south-1.amazonaws.com/assets/images/About_Us/doubledot.png"
          width={40}
          height={33}
          alt="Ticked"
          className="h-8 w-8 mr-1"
        />
        <h2 className="text-[18px] md:text-[24px] font-bold text-gray-800">
          Education is the key to the future
        </h2>
        <p className="text-[#757575] text-[16px]">
          At EME Academy Mumbai, we believe that education should not only to provide
          information but to ensure transformation. Since day one, our mission
          has been to enable every learner with contemporary & futuristic
          skills. With industry demand driven training and global opportunities,
          we’re committed to building the career of our students. Success of our
          students is our greatest reward
        </p>
        <div>
          <h3 className="text-[#0057E2] text-[20px] font-[700]">
            Kazi Mahasin Azim
          </h3>
          <p className="text-[#757575] text-[14px]">
            Founder & Chairman, EME Academy Mumbai
          </p>
        </div>
      </div>
    </div>
  );
}
