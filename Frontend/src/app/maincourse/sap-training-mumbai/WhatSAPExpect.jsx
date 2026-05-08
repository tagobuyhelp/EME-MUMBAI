import React from 'react'
import Image from "next/image";
import ExpertIcon from "../../../../public/assets/images/Web_Development/Group6.svg";
import ContempCurrIcon from "../../../../public/assets/images/Web_Development/Group2.svg";
import ServerIcon from "../../../../public/assets/images/Web_Development/Group6.svg";
import GlobalIcon from "../../../../public/assets/images/Web_Development/Group6.svg";
import FlexibleIcon from "../../../../public/assets/images/Web_Development/Group6.svg";
import PlacementIcon from "../../../../public/assets/images/Web_Development/Group6.svg";


export default function WhatSAPExpect() {
    const data = [
        {
            title: "Expert Trainers",
            description:
              "Our SAP instructors are all industry veterans who bring years of real-world experience to the classroom. The course has been tailored as per the standards they dictated. This helps you match the parameters needed at top companies.",
            icon: <Image width={50} height={50} src={ExpertIcon} alt="24/7 Server Access"/>,
          },
          {
            title: "Contemporary Curriculum",
            description:
              "EME Academy's SAP training modules all follow the latest S/4 HANA curriculum. Thus our students learn the most relevant and up-to-date skills that industries are actively seeking.",
            icon: <Image width={50} height={50} src={ContempCurrIcon} alt="24/7 Server Access"/>, 
          },
          {
            title: "24/7 Server Access",
            description:
              "We provide our students with continuous server access. This helps them practice skills and complete projects anytime. We prioritize remote learning and flexibility.",
            icon: <Image width={50} height={50} src={ServerIcon} alt="24/7 Server Access"/>, 
          },
          {
            title: "Global Certification Guidance",
            description:
              "We at EME Academy get you ready for internationally recognized SAP certifications that prove your abilities and improve your job prospects.",
            icon: <Image width={50} height={50} src={GlobalIcon} alt="24/7 Server Access"/>, 
          },
          {
            title: "Flexible Learning Modes",
            description:
              "Students and working professionals can conveniently learn at their own speed and comfort level with our range of online and offline learning choices.",
            icon: <Image width={50} height={50} src={FlexibleIcon} alt="24/7 Server Access"/>, 
          },
          {
            title: "Endless Placement Support",
            description:
              "With resume-building seminars, simulated interviews, hiring partners from a variety of industries, and 100% placement support, EME Academy makes sure you not only learn but also get your ideal career.",
            icon: <Image width={50} height={50} src={PlacementIcon} alt="24/7 Server Access"/>, 
          },
    ]
  return (
      <div className='w-full  max-w-[1380px] mx-auto mt- flex flex-col items-start gap-5 md:gap-10 py-10 md:py-15  px-5 md:px-24 '>
          <div className="w-full flex flex-col justify-center items-center">
                  <div className=" flex flex-col justify-center text-center text-[#232D63] text-[16px] lg:text-[22px] font-[700]">
                      What You can Expect From The Course
                  </div>
                  <p className="mt-4 text-[12px] lg:text-[16px] text-[#727272] max-w-[637px] text-center">
                      At EME Academy, our mission is to equip you with the skills needed to
                      thrive in this competitive field.
                  </p>
          </div>

          <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {data.map((item, index) => (
                <div
                      key={index}
                      className="bg-white border-[1px] rounded-[16px] border-[#EEEEEE] p-6 text-left lg:max-w-[416px]"
                  >
                      <div className="my:auto">{item.icon}</div>
                      <h3 className=" text-[15px] lg:text-[20px] leading-[52px] font-semibold text-[#232D63]">
                          {item.title}
                      </h3>
                      <p className="text-[12px] lg:text-[15px] leading-[20px] lg:Leading-[24px] text-[#727272]">{item.description}</p>
                  </div>
              ))}
          </div>
      </div>
  )
}
