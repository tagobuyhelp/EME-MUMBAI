"use client";
// import { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
// import { Button } from '@/components/ui/button'
import Image from "next/image";
// import FeesIcon from '../../../public/assets/icons/BudgetIcon.svg'
// import DurationIcon from '../../../public/assets/icons/PlacementIcon.svg'
// import EMIIcon from '../../../public/assets/icons/EMIIcon.svg'
import infosys from "/assets/images/infosys.webp";
import itcInfo from "../../../public/assets/icons/companies/itcInfo.png";
import deloitte from "../../../public/assets/images/deloitte.png";
// import ibm from '../../../public/assets/images/ibm.png'
import wipro from "../../../public/assets/icons/companies/WiproIcon.svg";
import BTIcon from "../../../public/assets/icons/companies/BTIcon.svg";
import tcs from "../../../public/assets/icons/companies/TCS_icon.svg";
import genpact from "../../../public/assets/images/genpact.png";
import Accenture from "../../../public/assets/icons/companies/AccentureIcon.svg";
import Cognizant from "../../../public/assets/images/Data_Analytics_Landing/icons/CognizantIcon.png";
import HCL from "../../../public/assets/images/Data_Analytics_Landing/icons/HCLIcon.png";
import TechMahindra from "../../../public/assets/icons/Tech_Mahindra-Icon.png";
import Marquee from "react-fast-marquee";
import CTAButton from "../../components/common/CtaButton";

const companies1 = [
  { src: infosys, alt: "Infosys", width: 120, height: 70 },
  { src: itcInfo, alt: "ITC Info", width: 150, height: 70 },
  { src: deloitte, alt: "Deloitte", width: 120, height: 120 },
  {
    src: "https://eme25.s3.ap-south-1.amazonaws.com/assets/images/capgemini.png",
    alt: "Capgemini",
    width: 120,
    height: 120,
  },
  { src: Accenture, alt: "Accenture", width: 100, height: 80 },
  { src: Cognizant, alt: "Cognizant", width: 100, height: 60 },
];

const companies2 = [
  // { src: ibm, alt: 'IBM', width: 70, height: 60 },
  { src: wipro, alt: "Wipro", width: 60, height: 50 },
  { src: BTIcon, alt: "BT", width: 50, height: 40 },
  { src: tcs, alt: "BT", width: 90, height: 80 },
  { src: genpact, alt: "genpact", width: 90, height: 40 },
  { src: HCL, alt: "HCL", width: 90, height: 40 },
  { src: TechMahindra, alt: "TechMahindra", width: 90, height: 40 },
];

function OurStudentsWorkIn() {
  return (
    <>
      <div className="md:mt-10 w-full  max-w-[1380px] mx-auto flex flex-col items-center justify-between gap-0.5 py-5 md:py-6  px-[20px] md:px-24 ">
        <div className="text-center mb-2">
          <div className="flex flex-wrap justify-center items-baseline leading-1 gap-2 text-[18px] md:text-[22px] font-semibold text-[#4B4B4B]">
            Our
            <span className="flex flex-col items-end">
              <span className="text-[18px] md:text-[22px] text-[#232D63]">
                Students are Working In
              </span>
              <Image
                src="/assets/images/Home/icons/StudentsLineVector.svg"
                alt="Decorative line"
                width={80}
                height={40}
                className="ml-2"
              />
            </span>
          </div>
        </div>

        <div className="w-full space-y-4 py-4">
          {/* first marquee */}
          <Marquee speed={30} autoFill className="">
            {companies1.map((company, index) => (
              <Card
                key={index}
                className="w-[100px] h-[64px] md:w-[150px] md:h-[74px] mx-4 md:mx-7 cursor-pointer transition items-center justify-center rounded-[15px]"
              >
                <CardContent className="p-2 flex items-center justify-center h-full">
                  <Image
                    className="object-contain max-w-full max-h-full"
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
                    className="object-contain max-w-full max-h-full"
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
        <div className="flex justify-center bg-[#fff]">
          <CTAButton name="Talk to our expert" />
        </div>
      </div>
    </>
  );
}

export default OurStudentsWorkIn;
