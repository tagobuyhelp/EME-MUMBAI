"use client";
import React from "react";
import Marquee from "react-fast-marquee";
import { StudentCard } from "./StudentCard";
import { motion } from "framer-motion";
import Image from "next/image";
import CTAButton from "@/components/common/CtaButton";

const CertifiedStudent = ({
  students = [],
  title,
  titleHighlight,
  subtitle,
  Courses,
  email_sender,
  SelectCourses = [],
  Brochure,
  BrochureName,
}) => {
  const [isLoaded, setIsLoaded] = React.useState(false);
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [ctaType, setCtaType] = React.useState(null);

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
    <div className="w-full max-w-[1300px] gap-4 md:gap-2 flex flex-col justify-center items-center pb-4 md:pb-6 px-6 mx-auto bg-[#F4FBFE]" >
      <div className="max-w-7xl mx-auto h-px w-full bg-linear-to-r from-[#EEEEEE] via-[#D2D2D2] to-[#EEEEEE] mb-6" />
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 10 }}
        animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
        transition={{ delay: 0.1, duration: 0.6 }}
      >
        <h1 className="text-xl md:text-[26px] font-semibold text-[#4B4B4B] mb-1 md:mb-0">
          {title}{" "}
          <span className="relative inline-flex flex-col text-[#232D63]">
            {titleHighlight}
            <motion.span
              className="flex justify-end items-end overflow-hidden"
              initial={{ width: 0 }}
              animate={isLoaded ? { width: "100%" } : { width: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <div className="w-20 md:w-[100px] h-3 md:h-4 ml-1">
                <Image
                  src="/assets/images/Home/icons/StudentsLineVector.svg"
                  alt="Underline"
                  width={160}
                  height={50}
                  className="object-contain w-full h-full"
                />
              </div>
            </motion.span>
          </span>
        </h1>
        <p className="text-[#454545] text-xs md:text-base">{subtitle}</p>
      </motion.div>

      <Marquee direction="left" className="py-4">
        {[...(students || []), ...(students || [])].map((s, i) => (
          <div key={i} className="mx-3">
            <StudentCard student={s} />
          </div>
        ))}
      </Marquee>

      <CTAButton name="Explore Our Courses"
        styleClasses="text-white bg-[#0057E2] hover:bg-[#0047C2] hover:text-gray-50 rounded-lg"
        _this={_this}
      />
    </div>
  );
};

export default CertifiedStudent;