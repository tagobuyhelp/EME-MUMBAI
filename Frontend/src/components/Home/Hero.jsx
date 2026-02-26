"use client";
import React from "react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import CTAButton from "../common/CtaButton";
import { alumniStudents } from "@/data/alumniStudentsData";

const courseCategories = [
  {
    id: 1,
    name: "Data Analytics",
    link: "/data-analytics-course-in-kolkata",
  },
  {
    id: 2,
    name: "SAP",
    link: "/maincourse/sap-training-kolkata",
  },
  {
    id: 3,
    name: "HR",
    link: "/human-resource-course-in-kolkata",
  },
  {
    id: 4,
    name: "Digital Marketing",
    link: "/maincourse/digital-marketing-course-in-kolkata",
  },
];

// Stats for the hero section
const stats = [
  {
    id: 1,
    value: "2 Lakh+",
    label: "Aspirants Mentored",
    icon: "/assets/images/Home/icons/aspirants.svg",
  },
  {
    id: 2,
    value: "1500+",
    label: "Cohorts Delivered",
    icon: "/assets/images/Home/icons/cohorts.svg",
  },
  {
    id: 3,
    value: "40+",
    label: "Industry Mentors",
    icon: "/assets/images/Home/icons/mentors.svg",
  },
];

export const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [ctaType, setCtaType] = useState(null);
  // Which flip (batch) we are currently showing: 0 -> 1 -> 2 -> repeat
  const [flipIndex, setFlipIndex] = useState(0);
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

  const heroProfiles = alumniStudents;
  const hasProfiles = heroProfiles.length > 0;
  const currentImageIndex = hasProfiles ? flipIndex % heroProfiles.length : 0;
  const currentProfile = hasProfiles ? heroProfiles[currentImageIndex] : null;
  const getProfile = (offset) =>
    heroProfiles[
      (currentImageIndex + offset + heroProfiles.length) % heroProfiles.length
    ];

  useEffect(() => {
    const interval = setInterval(() => {
      setFlipIndex((prev) => (prev + 1) % Math.max(heroProfiles.length, 1));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const downloadBrochure = () => {
    const pdfUrl = "/assets/documents/AllCourseBrochure/EME-brochure-2024.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "Brochure.pdf";
    link.click();
  };

  return (
    <section className="w-full pt-3 pb-4 md:pt-0 mb:pb-0 md:pb-16 lg:pb-16 bg-[#E9F8FF] bg-[linear-gradient(to_right,#042A7610_0.1px,transparent_0.9px),linear-gradient(to_bottom,#042A7610_0.1px,transparent_0.9px),linear-gradient(to_right,#2251FF10_0.1px,transparent_0.9px),linear-gradient(to_bottom,#2251FF10_0.1px,transparent_0.9px)] bg-[size:90px_50px] 2xl:bg-[size:100px_80px]">
      <div className="w-full h-full max-w-[1240px] flex flex-row justify-center items-center container px-4 py-1 md:px-6 md:py-4 relative mx-auto">
        <div className="flex flex-col md:flex-row gap-2 items-center">
          {/* Left side content */}
          <div className="mt-1 md:mt-0 w-full md:max-w-[60%] space-y-4">
            <div className="inline-flex items-center rounded-full border px-3 py-2 text-[12px] md:text-sm text-[#FD7900] font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-[#FFF8F1] cursor-pointer">
              <span className="text-xs mr-1">
                <Image
                  src="/assets/images/Home/icons/tickIcon.svg"
                  width={10}
                  height={10}
                  alt="Ticked"
                  className="h-4 w-4 mr-1"
                  priority
                />
              </span>{" "}
              Career Building Program
            </div>

            <div className="space-y-3">
              <h1 className="text-[22px] flex flex-wrap gap-1 font-bold tracking-tight sm:text-[22px] md:text-[42px] leading-[1]">
                Learn from Eastern{" "}
                <span className="text-orange-500 relative flex flex-col">
                  India’s No. 1
                  <motion.span
                    className="flex flex-col justify-end items-end"
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                  >
                    <Image
                      src="/assets/images/Home/icons/StudentsLineVector.svg"
                      alt="Justicial"
                      width={150}
                      height={50}
                      className="relative ml-2 w-[75px] h-2 md:w-[140px] md:h-3"
                      priority
                    />
                  </motion.span>
                </span>{" "}
                Professional Training Institute
              </h1>
              <p className="text-muted-foreground text-[14px] md:text-[16px]">
                Future-Proof Your Career with Industry-Oriented Courses Designed
                for High Placement Success
              </p>
            </div>

            {/* Stats */}
            <div className="flex flex-row items-center gap-3 md:gap-8 pt-1">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.id}
                  className="flex items-center gap-2"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + 0.1 * index, duration: 0.5 }}
                >
                  <Image
                    src={stat.icon}
                    width={24}
                    height={24}
                    alt="icon"
                    className="w-6 h-6 md:h-8 md:w-8"
                    priority
                  />
                  <div className="flex flex-col">
                    <span className="text-[15px] md:text-[20px] font-bold text-[#042A76] leading-none">
                      {stat.value}
                    </span>
                    <span className="text-[10px] md:text-[13px] text-gray-600 font-medium mt-0.5">
                      {stat.label}
                    </span>
                  </div>
                  {index < stats.length - 1 && (
                    <div className="h-8 w-[1px] bg-gray-300 ml-2 hidden md:block" />
                  )}
                </motion.div>
              ))}
            </div>

            <div className="flex flex-wrap gap-2 pt-1">
              {courseCategories.map((category) => (
                <a
                  key={category.id}
                  href={category.link}
                  className="px-3 py-1 rounded-full bg-white text-[10px] md:text-xs text-[#042A76] border border-[#E5E7EB] hover:bg-[#042A76] hover:text-white transition-colors duration-300"
                >
                  {category.name}
                </a>
              ))}
            </div>

            {/* Certifications */}
            <motion.div
              className="flex items-center gap-4 pt-1"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              <div className="flex items-center gap-3">
                <Image
                  src="/assets/images/Data_Analytics_Landing/Certifiedby.svg"
                  alt="Certified By"
                  width={80}
                  height={80}
                  className="w-16 md:w-20"
                />
                <div className="flex items-center gap-3">
                  <Image
                    src="/assets/images/Data_Analytics_Landing/MSMEblack.svg"
                    alt="MSME"
                    width={60}
                    height={50}
                    className="w-12 md:w-16"
                  />
                  <Image
                    src="/assets/icons/ISOIcon.svg"
                    alt="ISO"
                    width={60}
                    height={45}
                    className="w-12 md:w-16"
                  />
                  <Image
                    src="/assets/icons/StartUpIndiaIcon.svg"
                    alt="Start Up India"
                    width={90}
                    height={35}
                    className="w-20 md:w-24 mt-1"
                  />
                </div>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1, duration: 0.5 }}
              >
                <CTAButton
                  name="Explore Our Courses"
                  styleClasses="text-white bg-[#0057E2] hover:bg-[#0047C2] hover:text-gray-50 rounded-lg"
                  _this={_this}
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.2, duration: 0.5 }}
              >
                <CTAButton
                  name="Book A Free Demo Class"
                  styleClasses="bg-white text-[#2251FF] rounded-lg border border-gray-300 hover:bg-gray-50 hidden md:block"
                  _this={_this}
                />
              </motion.div>
            </div>
          </div>

          <div className="w-full md:max-w-[40%] mt-2 md:mt-0 flex justify-center">
            <motion.div
              className="relative w-full max-w-sm rounded-3xl bg-white/80 backdrop-blur shadow-[0_24px_60px_rgba(15,23,42,0.18)] border border-[#E5E7EB] overflow-hidden"
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(37,99,235,0.12),transparent_55%),radial-gradient(circle_at_bottom,_rgba(56,189,248,0.12),transparent_55%)] pointer-events-none" />
              <div className="relative p-4 md:p-5 flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-[11px] uppercase tracking-[0.18em] text-[#6B7280]">
                      Success Stories
                    </span>
                    <span className="text-sm md:text-base font-semibold text-[#111827]">
                      Placed EME Alumni
                    </span>
                  </div>
                  <div className="flex items-center gap-1 rounded-full bg-[#ECFEFF] px-3 py-1">
                    <span className="h-2 w-2 rounded-full bg-[#22C55E]" />
                    <span className="text-[10px] md:text-[11px] font-medium text-[#0891B2]">
                      Live placement updates
                    </span>
                  </div>
                </div>

                {hasProfiles && currentProfile && (
                  <motion.div
                    className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden bg-[#E5E7EB]"
                    initial={{ scale: 0.95, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <Image
                      src={currentProfile.img || "/placeholder.svg"}
                      alt={currentProfile.title || "Placed student"}
                      fill
                      className="object-cover"
                      sizes="(min-width: 1024px) 320px, 80vw"
                      priority
                    />
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent p-3 md:p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex flex-col">
                          <span className="text-xs text-white/80">
                            From learner to professional
                          </span>
                          <span className="text-sm md:text-base font-semibold text-white">
                            {currentProfile.title}
                          </span>
                        </div>
                        <div className="px-3 py-1 rounded-full bg-white/90 max-w-full">
                          <span
                            className="text-[10px] md:text-[11px] font-semibold text-[#111827] whitespace-nowrap max-w-[180px] md:max-w-[220px] overflow-hidden text-ellipsis"
                          >
                            {currentProfile.companyName &&
                            currentProfile.companyName !== "Not Specified"
                              ? `Hired by ${currentProfile.companyName}`
                              : "Hired by top company"}
                          </span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}

                {hasProfiles && (
                  <div className="flex items-center justify-between mt-1">
                    <div className="flex -space-x-2">
                      {[1, 2, 3].map((offset) => (
                        <motion.div
                          key={offset}
                          className="relative h-8 w-8 md:h-9 md:w-9 rounded-full border-2 border-white overflow-hidden bg-[#E5E7EB]"
                          whileHover={{ scale: 1.08, y: -2 }}
                        >
                          <Image
                            src={getProfile(offset).img}
                            alt={getProfile(offset).title}
                            fill
                            className="object-cover"
                            sizes="36px"
                          />
                        </motion.div>
                      ))}
                    </div>
                    <div className="flex flex-col items-end">
                      <span className="text-xs md:text-sm font-semibold text-[#111827]">
                        5000+ successful careers
                      </span>
                      <span className="text-[10px] md:text-[11px] text-[#6B7280]">
                        Join our next placement batch
                      </span>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
