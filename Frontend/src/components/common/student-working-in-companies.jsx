"use client";
import { useState } from "react";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import CTAButton from "./CtaButton";

const companies1 = [
  {
    src: "/assets/icons/companies/Infosys_icon.svg",
    alt: "Infosys",
    width: 120,
    height: 70,
  },
  {
    src: "/assets/icons/companies/itcInfo.png",
    alt: "ITC Info",
    width: 160,
    height: 120,
  },
  {
    src: "/assets/icons/companies/Deloitte2.svg",
    alt: "Deloitte",
    width: 120,
    height: 120,
  },
  {
    src: "/assets/icons/companies/capgemini.svg",
    alt: "Capgemini",
    width: 120,
    height: 120,
  },
  {
    src: "/assets/icons/companies/AccentureIcon.svg",
    alt: "Accenture",
    width: 100,
    height: 80,
  },
  {
    src: "/assets/icons/companies/CognizantIcon.svg",
    alt: "Cognizant",
    width: 100,
    height: 60,
  },
];

const companies2 = [
  {
    src: "/assets/icons/companies/WiproIcon.svg",
    alt: "Wipro",
    width: 60,
    height: 50,
  },
  {
    src: "/assets/icons/companies/BTIcon.svg",
    alt: "BT",
    width: 50,
    height: 40,
  },
  {
    src: "/assets/icons/companies/TCS_icon.svg",
    alt: "TCS",
    width: 90,
    height: 80,
  },
  {
    src: "/assets/icons/companies/genpact.svg",
    alt: "Genpact",
    width: 90,
    height: 40,
  },
  {
    src: "/assets/icons/companies/HCLIcon.svg",
    alt: "HCL",
    width: 90,
    height: 40,
  },
  {
    src: "/assets/icons/companies/Tech_Mahindra-Logo.svg",
    alt: "TechMahindra",
    width: 90,
    height: 40,
  },
];

function StudentsWorkingInCompanies({
  brochureName,
  brochure,
  courses,
  SelectCourses = [],
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [ctaType, setCtaType] = useState(null);
  const Courses = courses;
  const email_sender = "ALL";
  const Brochure = brochure;
  const BrochureName = brochureName;
  const _this = {
    isModalOpen,
    setIsModalOpen,
    Courses,
    SelectCourses: SelectCourses ? SelectCourses : [],
    email_sender,
    Brochure,
    BrochureName,
    ctaType,
    setCtaType,
  };

  return (
    <>
      {/* Bottom CTA Card mobile view*/}
      <div className="md:hidden mt-3 relative w-full flex flex-col items-center justify-center px-4 py-6 md:py-10">
        <Card className="w-full max-w-[340px] p-4 shadow-l border border-gray-200 rounded-2xl">
          <div className="flex flex-col items-center gap-3 text-[12px] text-[#727272]">
            <div className="flex flex-row justify-between items-center gap-10">
              <div className="flex flex-col justify-center items-center gap-2">
                <Image
                  src="/assets/icons/PlacementIcon.svg"
                  alt="EMI Icon"
                  width={36}
                  height={36}
                />
                <div className="flex flex-col text-[12px] text-[#121112] text-center">
                  <strong>100% </strong>
                  <strong>Placement</strong>
                </div>
              </div>
              <div className="flex flex-col justify-center items-center gap-2">
                <Image
                  src="/assets/icons/BudgetIcon.svg"
                  alt="EMI Icon"
                  width={36}
                  height={36}
                />
                <div className="flex flex-col text-[12px] text-[#121112] text-center">
                  <strong>10+ Years</strong>
                  <strong>of Excellence</strong>
                </div>
              </div>
              <div className="flex flex-col justify-center items-center gap-2">
                <Image
                  src="/assets/icons/EMIIcon.svg"
                  alt="EMI Icon"
                  width={36}
                  height={36}
                />
                <div className="flex flex-col text-[12px] text-[#121112] text-center">
                  <strong>EMI at</strong>
                  <strong>0% Interest</strong>
                </div>
              </div>
            </div>

            <div className="w-full flex items-center justify-center">
             
              <CTAButton
                name="Apply Now"
                styleClasses="bg-[#0057E2] hover:bg-[#0057E2] text-white font-bold py-1 px-6 text-[12px] rounded-[24px] transition-all flex items-center justify-center hover:text-white"
                _this={_this}
              />
            </div>
          </div>
        </Card>
      </div>

      <div className="md:mt-10 w-full  max-w-[1380px] mx-auto flex flex-col items-center justify-between gap-0.5 py-5 md:py-6  px-[20px] md:px-24 ">
        <div className="w-full text-[#042A76] md:leading-5 text-[18px] md:text-[22px] font-bold flex flex-row gap-2 justify-center items-center my-2">
          <div>Our Students are</div>
          <div className="text-[#2251FF] lg:leading-5 font-bold">
            <span className="text-[#E87D1A]">Working In</span>
          </div>
        </div>

        <div className="w-full space-y-4 py-4">
          {/* first marquee */}
          <Marquee speed={30} autoFill className="overflow-hidden">
            {companies1.map((company, index) => (
              <Card
                key={index}
                className="w-[100px] h-[64px] md:w-[150px] md:h-[74px] mx-4 md:mx-7 cursor-pointer transition items-center justify-center rounded-[15px]"
              >
                <CardContent className="p-2 flex items-center justify-center h-full">
                  <Image
                    className="object-contain h-fit"
                    width={company.width}
                    height={company.height}
                    src={company.src}
                    alt={company.alt}
                  />
                </CardContent>
              </Card>
            ))}
          </Marquee>

          {/* second marquee */}
          <Marquee speed={30} autoFill direction="right" className="">
            {companies2.map((company, index) => (
              <Card
                key={index}
                className="w-[100px] h-[64px] md:w-[150px] md:h-[74px] mx-4 md:mx-7 cursor-pointer transition items-center justify-center rounded-[15px]"
              >
                <CardContent className="p-2 flex items-center justify-center h-full">
                  <Image
                    className="object-contain h-fit"
                    width={company.width}
                    height={company.height}
                    src={company.src}
                    alt={company.alt}
                  />
                </CardContent>
              </Card>
            ))}
          </Marquee>
        </div>

        {/* cta btn */}
        <div className="flex justify-center bg-[#ffffff] my-2">
          <CTAButton
            name="Enquire Now"
            styleClasses="text-white bg-[#0057E2] hover:bg-[#0047C2] hover:text-gray-100 !px-6 rounded-md"
            _this={_this}
          />
        </div>
      </div>
    </>
  );
}

export default StudentsWorkingInCompanies;
