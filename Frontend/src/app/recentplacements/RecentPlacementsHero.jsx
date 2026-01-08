'use client'
import React from "react";
import { motion } from "framer-motion";
import { StudentCard } from "./StudentCard";
import Image from "next/image";
import CTAButton from "../../components/common/CtaButton";
import Marquee from "react-fast-marquee";
const stats = [
  { number: "2 Lakh+", label: "Aspirants Mentored" },
  { number: "1500+", label: "Cohorts Delivered" },
  { number: "40+", label: "Industry Mentors" },
];

export default function RecentPlacementsHero({ students = [] }) {
  const [isLoaded, setIsLoaded] = React.useState(false);
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [ctaType, setCtaType] = React.useState(null);
  const Courses = "All Course"
  const email_sender = "ALL"
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
  const Brochure = "https://drive.google.com/file/d/1Sa3EPxn939y85I9D7YwJJ2gGwpw7RGyx/view?usp=sharing";
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
  React.useEffect(() => {
    const timeout = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timeout);
  }, []);


  return (
    <section className="w-full max-w-[1300px] mx-auto flex flex-col md:flex-row items-center justify-between px-6">
      {/* Left Section */}
      <div className="mt-2 md:mt-0 w-full md:max-w-[50%] space-y-3 md:space-y-6 py-10 md:py-20 ">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 rounded-full border border-transparent bg-[#FFF8F1] px-4 py-2 text-xs md:text-sm text-[#FD7900] font-semibold shadow-sm"
        >
          <Image
            src="/assets/images/Home/icons/tickIcon.svg"
            width={14}
            height={14}
            alt="Ticked"
          />
          Career Building Program
        </motion.div>

        {/* heading  */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="space-y-3"
        >
          <h1 className="text-[22px] sm:text-[32px] md:text-[46px] font-extrabold leading-8 md:leading-[50px] text-[#2D292D]">
            The Latest {" "}
            <span className="relative inline-flex flex-col text-orange-500">
              Success Stories
              <motion.span
                className="flex justify-end items-end"
                initial={{ width: 0 }}
                animate={isLoaded ? { width: "100%" } : { width: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                <Image
                  src="/assets/images/Home/icons/StudentsLineVector.svg"
                  alt="Underline"
                  width={160}
                  height={50}
                  className="ml-1 w-[90px] md:w-[150px] h-3 md:h-4"
                />
              </motion.span>
            </span>
            {" "}Of EME Academy
          </h1>

          <p className="text-[#4A5568] text-sm md:text-[16px] md:leading-normal">
            Future-Proof Your Career with Industry-Oriented Courses Designed for High Placement Success
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isLoaded ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="grid grid-cols-3 gap-6 bg-white border border-[#EEEEEE] rounded-lg p-5"
        >
          {stats.map((s, i) => (
            <div key={i} className="text-start space-y-1 md:space-y-3">
              <h3 className="text-xl md:text-[28px] font-bold bg-gradient-to-r from-[#2251FF] to-[#042A76] bg-clip-text text-transparent">
                {s.number}
              </h3>
              <p className="text-sm md:text-[16px] text-[#7F7F7F]">{s.label}</p>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isLoaded ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="flex flex-wrap mt-5 md:mt-0 gap-4 justify-center md:justify-start">
          <CTAButton name="Explore Our Courses"
            styleClasses="text-white bg-[#0057E2] hover:bg-[#0047C2] hover:text-gray-50 rounded-lg"
            _this={_this}
          />
          <CTAButton name="Book A Free Demo Class"
            styleClasses="bg-white text-[#2251FF] rounded-lg border border-gray-300 hover:bg-gray-50"
            _this={_this}
          />
        </motion.div>
      </div>


      {/* Right Vertical Marquee */}
      <div className="hidden md:flex w-full md:w-1/2 max-w-[600px] gap-6 justify-center items-center h-full">
        {/* Upward scroll */}
        <div className="overflow-hidden h-[600px] w-[250px]">
          <div className="marquee-up flex flex-col gap-4">
            {[...students.slice(0, 13), ...students.slice(0, 13)].map((s, i) => (
              <StudentCard key={i} student={s} />
            ))}
          </div>
        </div>

        {/* Downward scroll */}
        <div className="overflow-hidden h-[600px] w-[250px]">
          <div className="marquee-down flex flex-col gap-4">
            {[...students.slice(13), ...students.slice(13)].map((s, i) => (
              <StudentCard key={i} student={s} />
            ))}
          </div>
        </div>
      </div>

      <div className="w-full md:hidden px-2">
        <Marquee direction="right" className="pb-4">
          {[...(students || []), ...(students || [])].map((s, i) => (
            <div key={i} className="mx-3">
              <StudentCard student={s} />
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  )
}