"use client";
import React from "react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import CTAButton from "../common/CtaButton";
import { alumniStudents } from "@/data/alumniStudentsData";

const courseCategories = [
  {
    id: 1,
    name: "Data Analytics",
    link: "/data-analytics-course-in-mumbai",
  },
  {
    id: 2,
    name: "SAP",
    link: "/maincourse/sap-training-mumbai",
  },
  {
    id: 3,
    name: "HR",
    link: "/human-resource-course-in-mumbai",
  },
  {
    id: 4,
    name: "Digital Marketing",
    link: "/maincourse/digital-marketing-course-in-mumbai",
  },
  {
    id: 5,
    name: "Full-Stack IT",
    link: "/maincourse/web-development",
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
    "Prompt Engineering with AI Course",
    "LinkedIn Course",
  ];
  const Brochure = "https://drive.google.com/file/d/1eGFi7GlCRTLehu5nljGHAwOyFvdwUFiJ/view?usp=sharing";
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
    <section className="w-full pt-4 pb-4 md:pt-6 md:pb-6 lg:pt-8 lg:pb-8 bg-gradient-to-br from-[#EEF7FF] via-[#F4F1FE] to-[#FFF9F2] bg-[linear-gradient(to_right,#042A7608_0.1px,transparent_0.9px),linear-gradient(to_bottom,#042A7608_0.1px,transparent_0.9px)] bg-[size:90px_50px] 2xl:bg-[size:100px_80px] relative overflow-hidden">
      {/* Premium Floating Animated Blobs */}
      <div className="absolute top-[10%] left-[5%] w-72 h-72 bg-sky-400/20 rounded-full blur-3xl pointer-events-none animate-blob-float-1" />
      <div className="absolute bottom-[20%] right-[10%] w-80 h-80 bg-violet-400/20 rounded-full blur-3xl pointer-events-none animate-blob-float-2" />

      {/* Mumbai Iconic Landmarks Vector Background Overlay */}
      <div className="absolute bottom-0 left-0 w-full h-[150px] md:h-[220px] pointer-events-none z-0 opacity-[0.08] select-none overflow-hidden">
        <svg
          viewBox="0 0 1440 220"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full object-cover object-bottom"
          preserveAspectRatio="none"
        >
          {/* Bandra-Worli Sea Link */}
          {/* Bridge Deck */}
          <path
            d="M0 185 L1440 185"
            stroke="#042A76"
            strokeWidth="3"
            strokeDasharray="4 4"
          />
          <path
            d="M0 190 L1440 190"
            stroke="#042A76"
            strokeWidth="2"
          />
          
          {/* Sea Link Pylons & Cables */}
          {/* Left Pylon */}
          <path
            d="M200 190 L240 70 L260 70 L300 190"
            fill="none"
            stroke="#042A76"
            strokeWidth="3.5"
            strokeLinejoin="round"
          />
          <path
            d="M245 70 L245 190 M255 70 L255 190"
            stroke="#042A76"
            strokeWidth="1.5"
          />
          {/* Cables from Left Pylon */}
          <path d="M250 80 L140 190 M250 95 L160 190 M250 110 L180 190 M250 125 L200 190 M250 140 L220 190" stroke="#042A76" strokeWidth="1" opacity="0.6" />
          <path d="M250 80 L360 190 M250 95 L340 190 M250 110 L320 190 M250 125 L300 190 M250 140 L280 190" stroke="#042A76" strokeWidth="1" opacity="0.6" />

          {/* Right Pylon */}
          <path
            d="M400 190 L440 70 L460 70 L500 190"
            fill="none"
            stroke="#042A76"
            strokeWidth="3.5"
            strokeLinejoin="round"
          />
          <path
            d="M445 70 L445 190 M455 70 L455 190"
            stroke="#042A76"
            strokeWidth="1.5"
          />
          {/* Cables from Right Pylon */}
          <path d="M450 80 L340 190 M450 95 L360 190 M450 110 L380 190 M450 125 L400 190 M450 140 L420 190" stroke="#042A76" strokeWidth="1" opacity="0.6" />
          <path d="M450 80 L560 190 M450 95 L540 190 M450 110 L520 190 M450 125 L500 190 M450 140 L480 190" stroke="#042A76" strokeWidth="1" opacity="0.6" />

          {/* Gateway of India */}
          <g transform="translate(750, 60)">
            {/* Main structure block */}
            <path
              d="M0 130 L0 30 L20 30 L20 0 L40 0 L40 30 L110 30 L110 0 L130 0 L130 30 L150 30 L150 130 Z"
              fill="none"
              stroke="#042A76"
              strokeWidth="3"
            />
            {/* Center Dome */}
            <path
              d="M45 30 C45 10, 105 10, 105 30 Z"
              fill="none"
              stroke="#042A76"
              strokeWidth="2.5"
            />
            {/* Side Minarets */}
            <path d="M5 30 L5 10 M145 30 L145 10" stroke="#042A76" strokeWidth="2" />
            <circle cx="5" cy="8" r="3" stroke="#042A76" strokeWidth="1.5" fill="none" />
            <circle cx="145" cy="8" r="3" stroke="#042A76" strokeWidth="1.5" fill="none" />
            
            {/* Central Archway */}
            <path
              d="M40 130 L40 80 C40 50, 110 50, 110 80 L110 130"
              fill="none"
              stroke="#042A76"
              strokeWidth="3"
            />
            {/* Left Archway */}
            <path
              d="M10 130 L10 95 C10 85, 30 85, 30 95 L30 130"
              fill="none"
              stroke="#042A76"
              strokeWidth="2"
            />
            {/* Right Archway */}
            <path
              d="M120 130 L120 95 C120 85, 140 85, 140 95 L140 130"
              fill="none"
              stroke="#042A76"
              strokeWidth="2"
            />
          </g>

          {/* Mumbai Local Train moving left to right */}
          <g transform="translate(50, 155)">
            {/* Track */}
            <line x1="-50" y1="35" x2="300" y2="35" stroke="#042A76" strokeWidth="1.5" />
            {/* Train Engine Car */}
            <rect x="0" y="5" width="80" height="25" rx="4" fill="none" stroke="#042A76" strokeWidth="2.5" />
            {/* Windows */}
            <rect x="10" y="10" width="15" height="10" rx="1" fill="none" stroke="#042A76" strokeWidth="1.5" />
            <rect x="35" y="10" width="15" height="10" rx="1" fill="none" stroke="#042A76" strokeWidth="1.5" />
            <rect x="60" y="10" width="12" height="10" rx="1" fill="none" stroke="#042A76" strokeWidth="1.5" />
            {/* Wheels */}
            <circle cx="20" cy="32" r="4" stroke="#042A76" strokeWidth="2" fill="none" />
            <circle cx="60" cy="32" r="4" stroke="#042A76" strokeWidth="2" fill="none" />
            
            {/* Connected Train Car 2 */}
            <path d="M80 20 L90 20" stroke="#042A76" strokeWidth="3" />
            <rect x="90" y="5" width="80" height="25" rx="3" fill="none" stroke="#042A76" strokeWidth="2.5" />
            {/* Windows for Car 2 */}
            <rect x="100" y="10" width="15" height="10" rx="1" fill="none" stroke="#042A76" strokeWidth="1.5" />
            <rect x="125" y="10" width="15" height="10" rx="1" fill="none" stroke="#042A76" strokeWidth="1.5" />
            <rect x="150" y="10" width="12" height="10" rx="1" fill="none" stroke="#042A76" strokeWidth="1.5" />
            {/* Wheels for Car 2 */}
            <circle cx="110" cy="32" r="4" stroke="#042A76" strokeWidth="2" fill="none" />
            <circle cx="150" cy="32" r="4" stroke="#042A76" strokeWidth="2" fill="none" />
          </g>

          {/* Mumbai Skyline Skyscrapers */}
          {/* Tower 1 */}
          <path d="M620 190 L620 40 L650 40 L650 190" stroke="#042A76" strokeWidth="1.5" opacity="0.5" />
          <path d="M628 50 L642 50 M628 70 L642 70 M628 90 L642 90 M628 110 L642 110 M628 130 L642 130" stroke="#042A76" strokeWidth="1" opacity="0.3" />

          {/* Tower 2 */}
          <path d="M670 190 L670 60 L700 30 L700 190" stroke="#042A76" strokeWidth="1.5" opacity="0.5" />
          <line x1="685" y1="60" x2="685" y2="190" stroke="#042A76" strokeWidth="1" opacity="0.3" />

          {/* Tower 3 */}
          <path d="M980 190 L980 20 L1010 40 L1010 190" stroke="#042A76" strokeWidth="1.5" opacity="0.5" />
          <path d="M988 50 L1002 50 M988 70 L1002 70 M988 90 L1002 90 M988 110 L1002 110" stroke="#042A76" strokeWidth="1" opacity="0.3" />

          {/* Tower 4 */}
          <path d="M1040 190 L1040 50 L1070 50 L1070 190" stroke="#042A76" strokeWidth="1.5" opacity="0.5" />
          
          {/* Waves / Marine Drive Arabian Sea */}
          <path
            d="M0 200 C300 195, 400 215, 800 200 C1200 185, 1300 205, 1440 200 L1440 220 L0 220 Z"
            fill="#042A76"
            opacity="0.08"
          />
          <path
            d="M0 208 C360 200, 600 220, 960 208 C1320 196, 1440 212, 1440 208 L1440 220 L0 220 Z"
            fill="#042A76"
            opacity="0.12"
          />
        </svg>
      </div>

      <div className="w-full h-full max-w-[1280px] flex flex-row justify-center items-center px-4 md:px-8 py-0.5 relative mx-auto z-10">
        <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-center">
          {/* Left side content */}
          <div className="mt-1 md:mt-0 w-full md:max-w-[60%] space-y-2 md:space-y-3">
            <div className="inline-flex items-center rounded-full border px-3.5 py-1.5 text-[12px] md:text-sm text-[#FD7900] font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-[#FFF8F1] cursor-pointer shadow-sm hover:shadow-md transition-all duration-300">
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
              Explore Courses
            </div>
 
            <div className="space-y-2 md:space-y-3">
              <h1 className="text-[22px] sm:text-[32px] md:text-[38px] lg:text-[40px] font-extrabold tracking-tight leading-[1.2] text-slate-900">
                EME Academy Mumbai | Western{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-rose-500 to-indigo-600 relative inline-block">
                  India’s No. 1
                  <motion.span
                    className="absolute bottom-[-4px] left-0 w-full overflow-hidden"
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                  >
                    <Image
                      src="/assets/images/Home/icons/StudentsLineVector.svg"
                      alt="Underline"
                      width={150}
                      height={12}
                      className="w-full h-1 md:h-2 object-cover filter brightness-105"
                      priority
                    />
                  </motion.span>
                </span>{" "}
                Professional Training Institute
              </h1>
              <p className="text-muted-foreground text-[14px] md:text-[16px] leading-relaxed">
                Future-proof your career with Mumbai's leading IT training
                institute. EME Academy offers industry-oriented courses and
                guaranteed support from a top placement institute. Book a free
                demo today!
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-2 md:flex md:flex-row md:items-center md:gap-8 pt-1 w-full">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.id}
                  className="flex flex-col sm:flex-row items-center text-center sm:text-left gap-1.5 sm:gap-3 bg-white/40 backdrop-blur-[2px] border border-white/30 rounded-2xl px-2 py-2 sm:px-4 sm:py-2.5 shadow-sm w-full"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + 0.1 * index, duration: 0.5 }}
                >
                  <div className="p-1 sm:p-1.5 bg-blue-50/50 rounded-xl">
                    <Image
                      src={stat.icon}
                      width={24}
                      height={24}
                      alt="icon"
                      className="w-5 h-5 sm:w-6 sm:h-6 md:h-8 md:w-8"
                      priority
                    />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[14px] sm:text-[16px] md:text-[22px] font-extrabold text-[#042A76] leading-none">
                      {stat.value}
                    </span>
                    <span className="text-[8px] sm:text-[10px] md:text-[12px] text-slate-600 font-semibold mt-0.5 sm:mt-1">
                      {stat.label}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>            <div className="flex flex-wrap gap-1.5 pt-1 z-10 relative">
              {courseCategories.map((category) => (
                <a
                  key={category.id}
                  href={category.link}
                  className="px-4 py-1.5 rounded-full bg-white/80 backdrop-blur-sm text-[11px] md:text-xs font-semibold text-[#042A76] border border-slate-200/60 hover:border-blue-500 hover:bg-[#042A76] hover:text-white hover:shadow-[0_4px_12px_rgba(4,42,118,0.15)] hover:-translate-y-0.5 transition-all duration-300"
                >
                  {category.name}
                </a>
              ))}
            </div>
 
            {/* Certifications */}
            <motion.div
              className="flex items-center gap-4 pt-0.5"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 bg-white/30 backdrop-blur-[1px] border border-white/20 rounded-2xl px-2.5 py-1.5 sm:px-4 sm:py-2">
                <Image
                  src="/assets/images/Data_Analytics_Landing/Certifiedby.svg"
                  alt="Certified By"
                  width={80}
                  height={80}
                  className="w-14 sm:w-16 md:w-20"
                />
                <div className="h-8 w-[1px] bg-slate-300/60 mx-1 hidden sm:block" />
                <div className="flex items-center gap-2">
                  <Image
                    src="/assets/images/Data_Analytics_Landing/MSMEblack.svg"
                    alt="MSME"
                    width={60}
                    height={50}
                    className="w-11 sm:w-12 md:w-16 filter opacity-90 hover:opacity-100 transition-opacity"
                  />
                  <Image
                    src="/assets/icons/ISOIcon.svg"
                    alt="ISO"
                    width={60}
                    height={45}
                    className="w-11 sm:w-12 md:w-16 filter opacity-90 hover:opacity-100 transition-opacity"
                  />
                  <Image
                    src="/assets/icons/StartUpIndiaIcon.svg"
                    alt="Start Up India"
                    width={90}
                    height={35}
                    className="w-18 sm:w-20 md:w-24 mt-1 filter opacity-90 hover:opacity-100 transition-opacity"
                  />
                </div>
              </div>
            </motion.div>
 
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-2 pt-1 w-full">
              <motion.div
                className="w-full sm:w-auto"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1, duration: 0.5 }}
              >
                <CTAButton
                  name="Explore Our Courses"
                  styleClasses="w-full text-white bg-[#0057E2] hover:bg-[#0047C2] hover:text-gray-50 rounded-xl px-6 py-3 font-semibold shadow-md shadow-blue-500/20 hover:shadow-blue-500/35 transition-all duration-300"
                  _this={_this}
                />
              </motion.div>

              <motion.div
                className="w-full sm:w-auto"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.2, duration: 0.5 }}
              >
                <CTAButton
                  name="Book A Free Demo Class"
                  styleClasses="w-full bg-white/80 backdrop-blur-sm text-[#2251FF] rounded-xl border border-blue-200 hover:border-blue-500 px-6 py-3 font-semibold hover:bg-blue-50/50 transition-all duration-300"
                  _this={_this}
                />
              </motion.div>
            </div>
          </div>

          <div className="w-full md:max-w-[40%] mt-4 md:mt-0 flex justify-center relative">
            <motion.div
              className="relative w-full max-w-[270px]"
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
            >
              {/* Floating success badges */}
              <div className="absolute -top-3 -left-3 z-20 bg-white/95 backdrop-blur-md border border-slate-200/50 rounded-xl px-3 py-1.5 shadow-[0_8px_30px_rgb(0,0,0,0.06)] flex items-center gap-1.5 animate-badge-drift-1">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
                </span>
                <span className="text-[9px] md:text-[10px] font-extrabold text-slate-800 tracking-wider uppercase">🔥 100% Placement</span>
              </div>

              <div className="absolute -bottom-3 -right-3 z-20 bg-white/95 backdrop-blur-md border border-slate-200/50 rounded-xl px-3 py-1.5 shadow-[0_8px_30px_rgb(0,0,0,0.06)] flex items-center gap-1.5 animate-badge-drift-2">
                <span className="text-xs">💼</span>
                <span className="text-[9px] md:text-[10px] font-extrabold text-slate-800 tracking-wider uppercase">MNC Partners</span>
              </div>

              {/* Alumni Card Content */}
              <div className="relative w-full rounded-[1.5rem] bg-white/90 backdrop-blur-sm shadow-[0_24px_70px_rgba(15,23,42,0.15)] border border-[#E5E7EB] overflow-hidden p-3 md:p-4 flex flex-col gap-3">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(37,99,235,0.08),transparent_55%),radial-gradient(circle_at_bottom,_rgba(56,189,248,0.08),transparent_55%)] pointer-events-none" />
                
                <div className="relative flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-[8px] uppercase tracking-[0.2em] font-bold text-slate-400">
                      Success Stories
                    </span>
                    <span className="text-xs font-extrabold text-[#111827]">
                      Placed EME Alumni
                    </span>
                  </div>
                  <div className="flex items-center gap-1 rounded-full bg-cyan-50/70 border border-cyan-100 px-2 py-0.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-cyan-500 animate-pulse" />
                    <span className="text-[8px] font-bold text-cyan-700 uppercase tracking-wide">
                      Live Updates
                    </span>
                  </div>
                </div>

                {hasProfiles && currentProfile && (
                  <div className="relative w-full aspect-[4/5] rounded-xl overflow-hidden bg-slate-100 border border-slate-100">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={flipIndex}
                        className="absolute inset-0 w-full h-full"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 1.05 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                      >
                        <Image
                          src={currentProfile.img || "/placeholder.svg"}
                          alt={currentProfile.title || "Placed student"}
                          fill
                          className="object-cover"
                          sizes="(min-width: 1024px) 250px, 60vw"
                          priority
                        />
                        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent p-3 pt-8">
                          <div className="flex flex-col gap-0.5">
                            <span className="text-[8px] text-orange-400 font-bold uppercase tracking-wider">
                              Alumni Spotlight
                            </span>
                            <span className="text-sm font-bold text-white leading-tight">
                              {currentProfile.title}
                            </span>
                            <div className="mt-0.5 flex items-center justify-between gap-1">
                              <span className="text-[10px] text-slate-300">
                                EME Graduate
                              </span>
                              <span className="px-2 py-0.5 rounded-full bg-white/10 backdrop-blur-md text-[8px] font-semibold text-white border border-white/15 truncate max-w-[120px]">
                                {currentProfile.companyName &&
                                currentProfile.companyName !== "Not Specified"
                                  ? `Hired by ${currentProfile.companyName}`
                                  : "Hired by top company"}
                              </span>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    </AnimatePresence>
                  </div>
                )}

                {hasProfiles && (
                  <div className="relative flex items-center justify-between mt-0.5 z-10">
                    <div className="flex -space-x-2">
                      {[1, 2, 3].map((offset) => (
                        <motion.div
                          key={offset}
                          className="relative h-7 w-7 rounded-full border-2 border-white overflow-hidden bg-slate-100 shadow-sm"
                          whileHover={{ scale: 1.1, y: -2 }}
                        >
                          <Image
                            src={getProfile(offset).img}
                            alt={getProfile(offset).title}
                            fill
                            className="object-cover"
                            sizes="28px"
                          />
                        </motion.div>
                      ))}
                    </div>
                    <div className="flex flex-col items-end">
                      <span className="text-[11px] font-extrabold text-[#111827]">
                        5,000+ Careers Transitioned
                      </span>
                      <span className="text-[9px] text-slate-500 font-semibold">
                        Next batch starting soon
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
