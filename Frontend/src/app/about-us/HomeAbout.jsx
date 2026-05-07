"use client";
import Image from "next/image";
import CTAButton from "@/components/common/CtaButton";
import { useState } from "react";

export default function HomeAbout() {
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
    <div className="w-full  bg-[#070B23] ">
      <div className="w-full min-h-[80vh] md:min-h-[100vh] flex flex-col justify-center items-center py-[46px]   mx-auto relative ">
        {/* <div className="z-20 inline-flex items-center rounded-full border px-6 py-1.5 md:py-2 text-[10px] md:text-sm text-[#FD7900] font-[500] transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-[#FFF8F1] cursor-pointer">
          About Us
        </div> */}
        <h1 className="w-full max-w-[935px] flex flex-wrap justify-center items-center leading-[1] gap-2 text-white text-center text-2xl lg:text-[38px] font-[700] z-20 p-3 lg:py-5 lg:p-0">
          Western India’s
          <span className="text-orange-500 relative flex flex-col justify-end items-end lg:justify-center lg:items-end">
            No. 1 Professional
            <Image
              src="/assets/images/Home/icons/StudentsLineVector.svg"
              alt="Justicial"
              width={200}
              height={50}
              className="relative ml-2 w-[75px] h-2 md:w-[170px] md:h-3"
            />
          </span>
          Training Institute
        </h1>
        <p className="hidden md:block w-full max-w-[1240px] mx-auto px-4 md:px-10 text-white text-sm md:text-[16px] leading-5 lg:leading-7 font-normal md:font-[500]   text-center z-20 pb-3 lg:pb-5">
          Greetings from EME Academy Mumbai! The best Institute for professional
          Training in Western India on Digital Marketing, Data Science, Web
          Development, UI/UX, Data Analytics and many more in Mumbai. With a
          decade-long legacy and an expanding international footprint in
          Islington, London, EME Academy Mumbai is where careers are crafted, futures
          are built and dreams take wings.
        </p>

        <p className="md:hidden w-full max-w-[1240px] mx-auto px-4 md:px-10 text-white text-sm md:text-[16px] leading-5 lg:leading-7 font-normal md:font-[500]   text-center z-20 pb-3 lg:pb-5">
          Greetings from EME Academy Mumbai! Western India’s leading institute for
          professional training in Digital Marketing, Data Science, Web
          Development, UI/UX, and more. With a legacy of excellence and global
          presence in London, we shape careers and build futures.
        </p>
        <div className="w-fit md:w-full">
          <CTAButton
            name="Explore Our Courses"
            styleClasses="text-white bg-[#0057E2] hover:bg-[#0047C2] hover:text-gray-50 rounded-lg z-30 border-none"
            _this={_this}
          />
        </div>
        <div className="w-full h-full  absolute inset-0 z-10 ">
          <video
            // src='./assets/videos/aboutUs.mp4' className='w-full h-full object-cover'
            src="https://eme25.s3.ap-south-1.amazonaws.com/videos/aboutUs.mp4"
            className="w-full h-full object-cover"
            muted
            loop
            autoPlay
            playsInline
            preload="none"
          />
        </div>

        <div className="w-full h-full bg-black/60 absolute inset-0 z-10"></div>
      </div>
    </div>
  );
}
