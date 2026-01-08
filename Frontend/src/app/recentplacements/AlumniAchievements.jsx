"use client";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import Marquee from 'react-fast-marquee'

const companies1 = [
  {  src: "/assets/icons/companies/Infosys_icon.svg", alt: "Infosys", width: 120, height: 70 },
  { src: "/assets/icons/companies/itcInfo.png", alt: "ITC Info", width: 160, height: 120 },
  { src: "/assets/icons/companies/Deloitte2.svg", alt: "Deloitte", width: 120, height: 120 },
  { src: "/assets/icons/companies/capgemini.svg", alt: "Capgemini", width: 120, height: 120 },
  { src: "/assets/icons/companies/AccentureIcon.svg", alt: "Accenture", width: 100, height: 80 },
  { src: "/assets/icons/companies/CognizantIcon.svg", alt: "Cognizant", width: 100, height: 60 },
];

const companies2 = [
  { src:  "/assets/icons/companies/WiproIcon.svg", alt: "Wipro", width: 60, height: 50 },
  { src: "/assets/icons/companies/BTIcon.svg", alt: "BT", width: 50, height: 40 },
  { src:  "/assets/icons/companies/TCS_icon.svg", alt: "TCS", width: 90, height: 80 },
  { src: "/assets/icons/companies/genpact.svg", alt: "Genpact", width: 90, height: 40 },
  { src: "/assets/icons/companies/HCLIcon.svg", alt: "HCL", width: 90, height: 40 },
  { src: "/assets/icons/companies/Tech_Mahindra-Logo.svg", alt: "TechMahindra", width: 90, height: 40 },
];

const AlumniAchievements = () => {
  const [isLoaded, setIsLoaded] = React.useState(false);

  React.useEffect(() => {
    const timeout = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timeout);
  }, []);
  return (
    <section className="w-full bg-[#F5F6F9] pt-6 pb-2 md:py-10 px-4">
      <div className="max-w-7xl mx-auto md:px-12">
        {/* Heading */}
        <motion.div className="text-center mb-6 md:mb-10"
          initial={{ opacity: 0, y: 10 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ delay: 0.1, duration: 0.6 }}
        >
          <h1 className="text-xl md:text-[26px] font-semibold text-[#4B4B4B]">
            EME Alumni Achievements {" "}
            <span className="relative inline-flex flex-col text-[#232D63]">
              at a Glance
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
                  className="ml-1 w-20 md:w-[100px] h-3 md:h-4"
                />
              </motion.span>
            </span>
          </h1>
          <p className="text-[#454545] text-xs md:text-base">
            Get a glimpse into the success of EME’s students through powerful statistics and measurable milestones.
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-6">
          {/* Left Section*/}
          <div className="md:w-1/2 overflow-hidden bg-white rounded-2xl shadow-sm px-6 py-8 flex flex-col justify-center gap-4 md:gap-12">
            <p className="md:text-lg font-semibold text-[#232D63] w-full">
              <span className="text-[#E87D1A] font-semibold text-base md:text-xl text-center md:text-start">80%</span> of EME Students Are Placed At <br />Organizations
            </p>
            <div className="w-full space-y-3 sm:space-y-4 px-2 sm:px-0">
              {/* First marquee */}
              <Marquee
                speed={25}
                autoFill
                className="overflow-y-hidden"
              >
                {companies1.map((company, index) => (
                  <Card
                    key={index}
                    className="mx-2 sm:mx-4 md:mx-6 flex items-center justify-center bg-white shadow-sm hover:shadow-md transition-shadow duration-300 rounded-lg sm:rounded-xl w-[130px] md:w-[140px] h-[60px]"
                  >
                    <CardContent className="flex items-center justify-center w-full h-full p-2">
                      <div className="relative w-full h-full flex items-center justify-center">
                        <Image
                          src={company.src}
                          alt={company.alt}
                          width={100}
                          height={50}
                          className="object-contain p-1 sm:p-2 max-w-[90px] max-h-[60px]"
                        />
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </Marquee>

              {/* Second marquee */}
              <Marquee
                speed={25}
                autoFill
                direction="right"
                className="overflow-y-hidden"
              >
                {companies2.map((company, index) => (
                  <Card
                    key={index}
                    className="mx-2 sm:mx-4 md:mx-6 flex items-center justify-center bg-white shadow-sm hover:shadow-md transition-shadow duration-300 rounded-lg sm:rounded-xl w-[130px] md:w-[140px] h-[60px] border border-[#EEEEEE]"
                  >
                    <CardContent className="flex items-center justify-center w-full h-full p-2">
                      <div className="relative w-full h-full flex items-center justify-center">
                        <Image
                          src={company.src}
                          alt={company.alt}
                          width={100}
                          height={50}
                          className="object-contain p-1 sm:p-2 max-w-[90px] max-h-[60px]"
                        />
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </Marquee>
            </div>


          </div>

          {/* Right Section - Animated Graph */}
          <div className="bg-white rounded-2xl shadow-sm p-6 relative overflow-hidden">
            <p className="md:text-lg font-semibold text-[#232D63] mb-4 w-full">
              <span className="text-[#E87D1A] font-bold text-base md:text-xl text-center md:text-start">54%</span> Average Salary Hike
            </p>

            <div className="relative w-full">
              <img src="/assets/images/Graph.svg" alt="Graph" />
              {/* Floating card */}
              <motion.div
                className="absolute bg-white border border-[#EEEEEE] rounded-xl shadow-sm p-2 md:p-3 flex items-center gap-3 top-0 md:top-2 right-7 md:right-28"
                // style={{ right: "7rem", top: "0.5rem" }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.4, duration: 0.5 }}
              >
                <div>
                  <p className="text-xs md:text-sm text-gray-500">Salary Hike</p>
                  <p className="text-base md:text-lg font-semibold text-[#042A76]">₹10LPA</p>
                </div>
                <span className="text-green-600 font-semibold bg-green-100 px-1 py-1 rounded-lg text-[10px]">
                  +60%
                </span>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default AlumniAchievements;