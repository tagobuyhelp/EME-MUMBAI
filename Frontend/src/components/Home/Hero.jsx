"use client";
import React from "react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import CTAButton from "../common/CtaButton";

const courseCategories = [
  {
    id: 1,
    name: "Web Development",
    color: "bg-white",
    position: { top: "5%", right: "14%" },
    delay: 0.2,
  },
  {
    id: 2,
    name: "Data Analytics",
    color: "bg-white",
    position: { top: "34%", right: "29%" },
    delay: 0.4,
  },
  {
    id: 3,
    name: "Digital Marketing",
    color: "bg-white",
    position: { top: "38%", right: "12%" },
    delay: 0.6,
  },
  {
    id: 4,
    name: "Web Designing",
    color: "bg-white",
    position: { top: "65%", right: "21%" },
    delay: 0.8,
  },
  {
    id: 5,
    name: "SAP",
    color: "bg-white",
    position: { top: "78%", right: "16%" },
    delay: 1.0,
  },
];

// Seven fixed positions (and delays) where profiles float
const profilePositions = [
  { id: 1, position: { top: "5%", right: "5%" }, delay: 0.3 },
  { id: 2, position: { top: "7%", right: "28%" }, delay: 0.5 },
  { id: 3, position: { top: "79%", right: "4%" }, delay: 0.7 },
  { id: 4, position: { top: "45%", right: "28%" }, delay: 0.9 },
  { id: 5, position: { top: "48%", right: "2%" }, delay: 1.1 },
  { id: 6, position: { top: "80%", right: "30%" }, delay: 1.3 },
  { id: 7, position: { top: "50%", right: "18%" }, delay: 1.5 },
];

// Pool of profile images to cycle through
const profileImages = [
  "https://eme25.s3.ap-south-1.amazonaws.com/assets/images/sap_landing/Aniket_Shome.png",
  "https://eme25.s3.ap-south-1.amazonaws.com/assets/images/sap_landing/Nuruzzaman_Mondal.jpg",
  "https://eme25.s3.ap-south-1.amazonaws.com/assets/images/sap_landing/Sukanya_Ghosh.png",
  "https://eme25.s3.ap-south-1.amazonaws.com/assets/images/sap_landing/Vaishnavi.png",
  "https://eme25.s3.ap-south-1.amazonaws.com/assets/images/sap_landing/profile_twelve.png",
  "https://eme25.s3.ap-south-1.amazonaws.com/assets/images/sap_landing/profile_thirteen.jpg",
  "https://eme25.s3.ap-south-1.amazonaws.com/assets/images/sap_landing/profile_fourteen.png",
  // Additional 7 images from public
  "https://eme25.s3.ap-south-1.amazonaws.com/assets/images/sap_landing/profile_fifteen.png",
  "https://eme25.s3.ap-south-1.amazonaws.com/assets/images/sap_landing/profile_sixteen.jpg",
  "https://eme25.s3.ap-south-1.amazonaws.com/assets/images/sap_landing/profile_seventeen.png",
  "https://eme25.s3.ap-south-1.amazonaws.com/assets/images/sap_landing/profile_eighteen.png",
  "https://eme25.s3.ap-south-1.amazonaws.com/assets/images/sap_landing/profile_nineteen.png",
  "https://eme25.s3.ap-south-1.amazonaws.com/assets/images/sap_landing/profile_twenty.png",
  "https://eme25.s3.ap-south-1.amazonaws.com/assets/images/sap_landing/profile_twentyOne.png",
  //More 7
  "https://eme25.s3.ap-south-1.amazonaws.com/assets/images/sap_landing/profileOne2.png",
  "https://eme25.s3.ap-south-1.amazonaws.com/assets/images/sap_landing/Subham_Sambui.jpg",
  "https://eme25.s3.ap-south-1.amazonaws.com/assets/images/sap_landing/profileTwo2.png",
  "https://eme25.s3.ap-south-1.amazonaws.com/assets/images/sap_landing/profileFour2.png",
  "https://eme25.s3.ap-south-1.amazonaws.com/assets/images/sap_landing/profileThree.png",
  "https://eme25.s3.ap-south-1.amazonaws.com/assets/images/sap_landing/Avick_Chakraborty.jpg",
  "https://eme25.s3.ap-south-1.amazonaws.com/assets/images/sap_landing/profileFive2.png",
  // Newly added images
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

  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Auto-cycle flips: show 7 images per flip for 3 flips, then repeat
  useEffect(() => {
    const interval = setInterval(() => {
      setFlipIndex((prev) => (prev + 1) % 3);
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
    <section className="w-full pt-4 pb-2 md:pt-0 mb:pb-0 md:pb-24 lg:pb-25 bg-[#E9F8FF] bg-[linear-gradient(to_right,#042A7610_0.1px,transparent_0.9px),linear-gradient(to_bottom,#042A7610_0.1px,transparent_0.9px),linear-gradient(to_right,#2251FF10_0.1px,transparent_0.9px),linear-gradient(to_bottom,#2251FF10_0.1px,transparent_0.9px)] bg-[size:90px_50px] 2xl:bg-[size:100px_80px]">
      <div className="w-full h-full max-w-[1240px] flex flex-row justify-center items-center container px-4 py-1 md:px-6 md:py-6 relative mx-auto">
        <div className="flex flex-col md:flex-row gap-2 items-center">
          {/* Left side content */}
          <div className="mt-1 md:mt-0 w-full md:max-w-[60%] space-y-4">
            <div className="inline-flex items-center rounded-full border px-3 py-2 text-[10px] md:text-sm text-[#FD7900] font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-[#FFF8F1] cursor-pointer">
              <span className="text-xs mr-1">
                <Image
                  src="/assets/images/Home/icons/tickIcon.svg"
                  width={10}
                  height={10}
                  alt="Ticked"
                  className="h-4 w-4 mr-1"
                />
              </span>{" "}
              Career Building Program
            </div>

            <div className="space-y-3">
              <h1 className="text-[18px] flex flex-wrap gap-1 font-bold tracking-tight sm:text-[22px] md:text-[42px] leading-[1]">
                Learn from Eastern{" "}
                <span className="text-orange-500 relative flex flex-col">
                  India’s No. 1
                  <motion.span
                    className="flex flex-col justify-end items-end"
                    initial={{ width: 0 }}
                    animate={isLoaded ? { width: "100%" } : { width: 0 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                  >
                    <Image
                      src="/assets/images/Home/icons/StudentsLineVector.svg"
                      alt="Justicial"
                      width={150}
                      height={50}
                      className="relative ml-2 w-[75px] h-2 md:w-[140px] md:h-3"
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
            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.id}
                  className="flex flex-col md:flex-row items-start md:items-center p-2 rounded-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                  }
                  transition={{ delay: 0.5 * index, duration: 0.5 }}
                >
                  <Image
                    src={stat.icon}
                    width={40}
                    height={40}
                    alt="icon"
                    className="w-9 h-9 md:h-12 md:w-12 md:mr-1"
                  />
                  <div className="flex flex-col items-start justify-center">
                    <div className="text-[14px] md:text-[18px] font-bold text-primary md:mb-1">
                      {stat.value}
                    </div>
                    <div className="text-[12px] md:text-[14px] text-muted-foreground text-nowrap md:text-center">
                      {stat.label}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={
                  isLoaded ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                }
                transition={{ delay: 0.8, duration: 0.5 }}
              >
                <div className="flex flex-col md:flex-row md:justify-center md:items-center justify-start items-start gap-2">
                  <div>
                    <Image
                      src="/assets/images/Data_Analytics_Landing/Certifiedby.svg"
                      alt="Certified By Icon"
                      width={100}
                      height={100}
                    />
                  </div>
                  <div className="flex flex-row gap-2">
                    <Image
                      src="/assets/images/Data_Analytics_Landing/MSMEblack.svg"
                      alt="MSME Logo"
                      width={80}
                      height={70}
                    />
                    <Image
                      src="/assets/icons/ISOIcon.svg"
                      alt="ISO Logo"
                      width={80}
                      height={60}
                    />
                    <Image
                      src="/assets/icons/StartUpIndiaIcon.svg"
                      alt="Start Up India Logo"
                      width={110}
                      height={42}
                      className="mt-2"
                    />
                  </div>
                </div>
              </motion.div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={
                  isLoaded ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                }
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
                animate={
                  isLoaded ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                }
                transition={{ delay: 1.2, duration: 0.5 }}
              >
                <CTAButton
                  name="Book A Free Demo Class"
                  styleClasses="bg-white text-[#2251FF] rounded-lg border border-gray-300 hover:bg-gray-50"
                  _this={_this}
                />
              </motion.div>
            </div>
          </div>

          {/* Right side animation */}
          <div className="max-w-[40%] hidden lg:block">
            {/* Floating course categories */}
            {courseCategories.map((category) => (
              <motion.div
                key={category.id}
                className={`absolute px-4 py-1 rounded-full ${category.color} whitespace-nowrap border border-[#042A76]`}
                style={{
                  top: category.position.top,
                  right: category.position.right,
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isLoaded
                    ? {
                        opacity: 1,
                        y: 0,
                        x: [0, 10, 0, -10, 0],
                        y: [0, -10, 0, 10, 0],
                      }
                    : { opacity: 0, y: 20 }
                }
                transition={{
                  delay: category.delay,
                  duration: 0.8,
                  x: {
                    repeat: Number.POSITIVE_INFINITY,
                    duration: 5 + Math.random() * 2,
                    ease: "easeInOut",
                  },
                  y: {
                    repeat: Number.POSITIVE_INFINITY,
                    duration: 6 + Math.random() * 2,
                    ease: "easeInOut",
                  },
                }}
                whileHover={{
                  scale: 1.1,
                  transition: { duration: 0.2 },
                }}
              >
                <div className="bg-gradient-to-r from-[#042A76] to-[#2251FF] bg-clip-text text-transparent">
                  {category.name}
                </div>
              </motion.div>
            ))}

            {/* Auto-cycling profile images: 7 images per flip, 3 flips, repeat */}
            {profilePositions.map((pos, index) => {
              const batchStart =
                (flipIndex * 7) % Math.max(profileImages.length, 1);
              const imageIndex = (batchStart + index) % profileImages.length;
              return (
                <motion.div
                  key={pos.id}
                  className="absolute"
                  style={{ top: pos.position.top, right: pos.position.right }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={
                    isLoaded
                      ? {
                          opacity: 1,
                          scale: 1,
                          x: [0, 15, 0, -15, 0],
                          y: [0, -15, 0, 15, 0],
                        }
                      : { opacity: 0, scale: 0 }
                  }
                  transition={{
                    delay: pos.delay,
                    duration: 0.8,
                    x: {
                      repeat: Number.POSITIVE_INFINITY,
                      duration: 7 + Math.random() * 3,
                      ease: "easeInOut",
                    },
                    y: {
                      repeat: Number.POSITIVE_INFINITY,
                      duration: 8 + Math.random() * 3,
                      ease: "easeInOut",
                    },
                  }}
                  whileHover={{
                    scale: 1.2,
                    transition: { duration: 0.2 },
                  }}
                >
                  <motion.div
                    className="w-auto h-auto rounded-lg shadow-[3px_3px_0px_0px_#199ADA] overflow-hidden z-[99]"
                    key={`${pos.id}-${flipIndex}`}
                    initial={{ opacity: 0, scale: 0.8, rotateY: 90 }}
                    animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                    transition={{
                      duration: 0.6,
                      ease: "easeInOut",
                      type: "spring",
                      stiffness: 100,
                    }}
                  >
                    <Image
                      width={115}
                      height={115}
                      src={profileImages[imageIndex] || "/placeholder.svg"}
                      alt={`Profile ${imageIndex + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                </motion.div>
              );
            })}

            {/* Decorative elements */}
            <motion.div
              className="absolute w-6 h-6"
              style={{ top: "10%", right: "40%" }}
              animate={{
                x: [0, 20, 0, -20, 0],
                y: [0, -20, 0, 20, 0],
              }}
              transition={{
                repeat: Number.POSITIVE_INFINITY,
                duration: 10,
                ease: "easeInOut",
              }}
            >
              <Image
                src="/assets/images/Home/icons/Floatingicons1.svg"
                alt="Vector 1"
                width={100}
                height={100}
              />
            </motion.div>

            <motion.div
              className="absolute w-8 h-8"
              style={{ top: "27%", right: "20%" }}
              animate={{
                x: [0, -15, 0, 15, 0],
                y: [0, 15, 0, -15, 0],
              }}
              transition={{
                repeat: Number.POSITIVE_INFINITY,
                duration: 8,
                ease: "easeInOut",
              }}
            >
              <Image
                src="/assets/images/Home/icons/Floatingicons2.svg"
                alt="Vector 1"
                width={100}
                height={100}
              />
            </motion.div>

            <motion.div
              className="absolute w-10 h-10"
              style={{ top: "52%", right: "23%" }}
              animate={{
                x: [0, 10, 0, -10, 0],
                y: [0, -10, 0, 10, 0],
              }}
              transition={{
                repeat: Number.POSITIVE_INFINITY,
                duration: 9,
                ease: "easeInOut",
              }}
            >
              <Image
                src="/assets/images/Home/icons/Floatingicons3.svg"
                alt="Vector 1"
                width={100}
                height={100}
              />
            </motion.div>
            <motion.div
              className="absolute w-10 h-10"
              style={{ top: "70%", right: "35%" }}
              animate={{
                x: [0, 10, 0, -10, 0],
                y: [0, -10, 0, 10, 0],
              }}
              transition={{
                repeat: Number.POSITIVE_INFINITY,
                duration: 9,
                ease: "easeInOut",
              }}
            >
              <Image
                src="/assets/images/Home/icons/Floatingicons4.svg"
                alt="Vector 1"
                width={100}
                height={100}
              />
            </motion.div>
            <motion.div
              className="absolute w-10 h-10"
              style={{ top: "9%", right: "0%" }}
              animate={{
                x: [0, 10, 0, -10, 0],
                y: [0, -10, 0, 10, 0],
              }}
              transition={{
                repeat: Number.POSITIVE_INFINITY,
                duration: 9,
                ease: "easeInOut",
              }}
            >
              <Image
                src="/assets/images/Home/icons/Floatingicons5.svg"
                alt="Vector 1"
                width={100}
                height={100}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
