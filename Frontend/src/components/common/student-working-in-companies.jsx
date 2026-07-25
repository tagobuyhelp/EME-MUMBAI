"use client";
import { useState } from "react";

import { Card } from "@/components/ui/card";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import CTAButton from "./CtaButton";

const companies1 = [
  { src: "/assets/icons/companies/Infosys_icon.svg", alt: "Infosys" },
  { src: "/assets/icons/companies/Deloitte2.svg", alt: "Deloitte" },
  { src: "/assets/icons/companies/AccentureIcon.svg", alt: "Accenture" },
  { src: "/assets/icons/companies/flipkart.png", alt: "Flipkart" },
  { src: "/assets/icons/companies/ntt-data.png", alt: "NTT DATA" },
  { src: "/assets/icons/companies/birlasoft.png", alt: "Birlasoft" },
  { src: "/assets/icons/companies/hp.png", alt: "HP" },
  { src: "/assets/icons/companies/maruti-suzuki.png", alt: "Maruti Suzuki" },
  { src: "/assets/icons/companies/yash-technologies.png", alt: "YASH Technologies" },
  { src: "/assets/icons/companies/teamlease.png", alt: "TeamLease" },
  { src: "/assets/icons/companies/m-pokket.png", alt: "mPokket" },
  { src: "/assets/icons/companies/lead-height.png", alt: "Lead Height" },
  { src: "/assets/icons/companies/mervice-infotech.png", alt: "Mervice Infotech" },
  { src: "/assets/icons/companies/monotel.png", alt: "Monotel" },
  { src: "/assets/icons/companies/edominer-expand.png", alt: "eDominer EXPAND" },
  { src: "/assets/icons/companies/devant-it-solutions.png", alt: "Devant IT Solutions" },
  { src: "/assets/icons/companies/ahrc.png", alt: "AHRC Consultancy" },
  { src: "/assets/icons/companies/i-vista-techgen.png", alt: "I-Vista Techgen" },
];

const companies2 = [
  { src: "/assets/icons/companies/TCS_icon.svg", alt: "TCS" },
  { src: "/assets/icons/companies/WiproIcon.svg", alt: "Wipro" },
  { src: "/assets/icons/companies/capgemini.svg", alt: "Capgemini" },
  { src: "/assets/icons/companies/CognizantIcon.svg", alt: "Cognizant" },
  { src: "/assets/icons/companies/genpact.svg", alt: "Genpact" },
  { src: "/assets/icons/companies/Tech_Mahindra-Logo.svg", alt: "TechMahindra" },
  { src: "/assets/icons/companies/HCLIcon.svg", alt: "HCL" },
  { src: "/assets/icons/companies/fusion.png", alt: "Fusion BPO" },
  { src: "/assets/icons/companies/meraqui.png", alt: "Meraqui" },
  { src: "/assets/icons/companies/sjk-business-solutions.png", alt: "SJK Business Solutions" },
  { src: "/assets/icons/companies/jpk-metallics.png", alt: "JPK Metallics" },
  { src: "/assets/icons/companies/visa-steel.png", alt: "VISA Steel" },
  { src: "/assets/icons/companies/samishti.png", alt: "Samishti Infotech" },
  { src: "/assets/icons/companies/dr-p-banerji.png", alt: "Dr. P Banerji Homeopathy" },
  { src: "/assets/icons/companies/hamilton-research.jpeg", alt: "Hamilton Research" },
  { src: "/assets/icons/companies/neem-tree.png", alt: "Neem Tree" },
  { src: "/assets/icons/companies/iimi.png", alt: "IIMI" },
  { src: "/assets/icons/companies/yati-resource.png", alt: "Yati Resource" },
];

function StudentsWorkingInCompanies({
  brochureName,
  brochure,
  courses,
  SelectCourses = [],
  formVariant,
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
    formVariant,
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
                  <strong>100%</strong>
                  <strong>Placement</strong>
                  <strong>Support</strong>
                </div>
              </div>
              <div className="flex flex-col justify-center items-center gap-2">
                <Image
                  src="/assets/icons/BudgetIcon.svg"
                  alt="EMI Icon"
                  width={36}
                  height={36}
                />
                <div className="flex flex-nowrap flex-col text-[12px] text-[#121112] text-center">
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

      <div className="md:mt-10 w-full max-w-[1380px] mx-auto flex flex-col items-center justify-between gap-0.5 py-5 md:py-6 px-[20px] md:px-24">
        <div className="w-full flex flex-col items-center justify-center text-center gap-2 my-2">
          <div className="text-[#232D63] text-[18px] md:text-[26px] font-bold leading-tight">
            Our Students Are Now Working at These Companies
          </div>
          <div className="text-[#4B4B4B] text-[12px] md:text-[14px] font-medium max-w-[820px]">
            750+ placements in the last year alone. Salary ranging up to ₹40,000/month — and that&apos;s just the start.
          </div>
        </div>

        <div className="w-full space-y-4 py-4">
          {/* first marquee */}
          <Marquee speed={35} autoFill className="overflow-hidden">
            {companies1.map((company, index) => (
              <div
                key={index}
                className="w-[130px] h-[58px] md:w-[170px] md:h-[68px] mx-2.5 md:mx-4 flex items-center justify-center rounded-[16px] bg-white border border-gray-200/80 shadow-sm hover:shadow-md px-3.5 py-2 transition-all duration-300 cursor-pointer"
              >
                <img
                  className="max-h-[38px] md:max-h-[46px] max-w-[100px] md:max-w-[135px] w-auto h-auto object-contain"
                  src={company.src}
                  alt={company.alt}
                />
              </div>
            ))}
          </Marquee>

          {/* second marquee */}
          <Marquee speed={35} autoFill direction="right" className="overflow-hidden">
            {companies2.map((company, index) => (
              <div
                key={index}
                className="w-[130px] h-[58px] md:w-[170px] md:h-[68px] mx-2.5 md:mx-4 flex items-center justify-center rounded-[16px] bg-white border border-gray-200/80 shadow-sm hover:shadow-md px-3.5 py-2 transition-all duration-300 cursor-pointer"
              >
                <img
                  className="max-h-[38px] md:max-h-[46px] max-w-[100px] md:max-w-[135px] w-auto h-auto object-contain"
                  src={company.src}
                  alt={company.alt}
                />
              </div>
            ))}
          </Marquee>
        </div>

        {/* cta btn */}
        <div className="flex justify-center bg-[#ffffff] my-2">
          <CTAButton
            name="See Where Your Future Can Take You →"
            styleClasses="text-white bg-[#0057E2] hover:bg-[#0047C2] hover:text-gray-100 !px-6 rounded-md"
            _this={_this}
          />
        </div>
      </div>
    </>
  );
}

export default StudentsWorkingInCompanies;
