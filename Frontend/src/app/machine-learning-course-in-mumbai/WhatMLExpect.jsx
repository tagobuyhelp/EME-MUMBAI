import React from 'react'
import Image from "next/image";
import ExpertIcon from "../../../public/assets/images/Web_Development/Group1.svg";
import ContempCurrIcon from "../../../public/assets/images/Web_Development/Group2.svg";
import ServerIcon from "../../../public/assets/images/Web_Development/Group3.svg";
import GlobalIcon from "../../../public/assets/images/Web_Development/Group4.svg";
import FlexibleIcon from "../../../public/assets/images/Web_Development/Group5.svg";
import PlacementIcon from "../../../public/assets/images/Web_Development/Group6.svg";


export default function WhatMLExpect() {
    const data = [
        {
            title: "Working on Hands-on Projects",
            description:
            "Courses are choc-a-bloc with practical projects that mimic real-world development tasks. You learn how to build responsive websites, web applications, and e-commerce platforms. A robust portfolio eases your job prospects.",
            icon: <Image width={50} height={50} src={ExpertIcon} alt="24/7 Server Access"/>,
          },
          {
            title: "Comprehensive Curriculum",
            description:
            "You’ll cover a wide range of topics, from basic HTML and CSS to advanced JavaScript frameworks like React and Vue.js. EME Academy helps you master both front-end and back-end development, giving you full-stack capabilities.",
            icon: <Image width={50} height={50} src={ContempCurrIcon} alt="24/7 Server Access"/>, 
          },
          {
            title: "Skilled Teachers",
            description:
            "Industry experts mentor our students to become the future of the sector. With years of experience by their side, and deep insights into industry trends, students get to learn about the best practices and problem-solving strategies.",            
            icon: <Image width={50} height={50} src={ServerIcon} alt="24/7 Server Access"/>, 
          },
          {
            title: "Industry-Specific Instruments and Systems",
            description:
            "EME Academy offers the latest tools in the market as students practice and master working with front-end and back-end libraries, cloud hosting services, Git, and npm. ",
            icon: <Image width={50} height={50} src={GlobalIcon} alt="24/7 Server Access"/>, 
          },
          {
            title: "Flexible Learning Paths",
            description:
            "Flexible classes help students learn at their own pace as per their availability. EME Academy thus offers both online and in-person classes, to accommodate working professionals or full-time students.",
            icon: <Image width={50} height={50} src={FlexibleIcon} alt="24/7 Server Access"/>, 
          },
          {
            title: "Career Guidance and Job Placement",
            description:
            "Our personalized career support includes resume workshops, interview coaching, and networking opportunities. EME Academy has close ties with industry professionals.",
            icon: <Image width={50} height={50} src={PlacementIcon} alt="24/7 Server Access"/>, 
          },
    ]
  return (
      <div className='w-full max-w-[1380px] mx-auto flex flex-col items-start gap-2 md:gap-5 py-10 md:py-15  px-5 md:px-24 '>
          <div className="w-full flex flex-col justify-center items-center">
                  <div className="flex flex-col justify-center text-center text-[#232D63] text-[16px] lg:text-[22px] font-[700]">
                      What You can Expect From The Course
                  </div>
                  <p className="text-[12px] lg:text-[16px] text-[#727272] max-w-[637px] text-center">
                      At EME Academy, our mission is to equip you with the skills needed to
                      thrive in this competitive field.
                  </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl">
              {data.map((item, index) => (
                <div
                      key={index}
                      className="bg-white border-[1px] rounded-[16px] border-[#EEEEEE] p-5 text-left lg:max-w-[416px]"
                  >
                      <div className="my:auto">{item.icon}</div>
                      <h3 className=" text-[15px] lg:text-[20px] leading-[28px] font-semibold text-[#232D63] pt-2">
                          {item.title}
                      </h3>
                      <p className="text-[12px] lg:text-[15px] leading-[20px] lg:Leading-[24px] text-[#727272] py-2">{item.description}</p>
                  </div>
              ))}
          </div>
      </div>
  )
}
