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
            title: "Hands-On Generative AI Projects",
            description:
            "Work on real-world AI projects using ChatGPT, LLMs, Prompt Engineering, and AI automation tools under the Best AI Training Institute Mumbai. Gain experience in building AI-powered applications to stand out in future trends and strengthen your resume with the AI App Development Course.",
            icon: <Image width={50} height={50} src={ExpertIcon} alt="Hands-On Projects"/>,
          },
          {
            title: "Industry-Focused AI Curriculum",
            description:
            "Master in-demand technologies, including Generative AI, Machine Learning, NLP, LangChain, and AI App Development through a structured curriculum designed according to current industry trends and hiring requirements.",
            icon: <Image width={50} height={50} src={ContempCurrIcon} alt="Industry-Focused AI Curriculum"/>, 
          },
          {
            title: "Professional Mentors",
            description:
            "Equip skills with industry experts and experienced professionals, providing real-world AI knowledge, practical insights, and hands-on mentorship to help you understand how AI is used across modern industries and businesses. Strengthen your growth with AI course in Mumbai through their expertise.",            
            icon: <Image width={50} height={50} src={ServerIcon} alt="Professional Mentors"/>, 
          },
          {
            title: "Advanced AI Tools & Technologies",
            description:
            "EME Academy’s AI Course in Mumbai offers an opportunity to work with trending AI tools and platforms, including ChatGPT, LangChain, Python, APIs, LLMs, and automation frameworks used in today’s AI-driven ecosystem, with the latest tools in the market.",
            icon: <Image width={50} height={50} src={GlobalIcon} alt="Advanced AI Tools & Technologies"/>, 
          },
          {
            title: "Flexible Learning for Beginners & Professionals",
            description:
            "At EME Academy, we offer the best technologies and guidance for each student. Whether you are a student, fresher, freelancer, or working professional, our flexible online and offline learning options help you learn Generative AI at your own pace.",
            icon: <Image width={50} height={50} src={FlexibleIcon} alt="Flexible Learning"/>, 
          },
          {
            title: "Career Guidance & Placement Support",
            description:
            "Our Generative AI Course with Certificate build an industry-ready resume, prepares for interviews, improves problem-solving skills, and provides placement assistance to confidently start your career in Artificial Intelligence and Generative AI.",
            icon: <Image width={50} height={50} src={PlacementIcon} alt="Career Guidance & Placement Support"/>, 
          },
    ]
  return (
      <div className='w-full max-w-[1380px] mx-auto flex flex-col items-start gap-2 md:gap-5 py-10 md:py-15  px-5 md:px-24 '>
          <div className="w-full flex flex-col justify-center items-center">
                  <div className="flex flex-col justify-center text-center text-[#232D63] text-[16px] lg:text-[22px] font-[700]">
                      What our ML & AI Course in Mumbai Provides
                  </div>
                  <p className="text-[12px] lg:text-[16px] text-[#727272] max-w-[800px] text-center mt-2">
                      EME Academy’s Generative AI Institute in Mumbai is shaping your career path for future market trends, with practical training, real-world exposure, and an advanced Generative AI Course with placement support for Freshers, Beginners, and working professionals.
                  </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mt-6">
              {data.map((item, index) => (
                <div
                      key={index}
                      className="bg-white border-[1px] rounded-[16px] border-[#EEEEEE] p-5 text-left lg:max-w-[416px]"
                  >
                      <div className="my:auto">{item.icon}</div>
                      <h3 className=" text-[15px] lg:text-[20px] leading-[28px] font-semibold text-[#232D63] pt-2">
                          {item.title}
                      </h3>
                      <p className="text-[12px] lg:text-[15px] leading-[20px] lg:leading-[24px] text-[#727272] py-2">{item.description}</p>
                  </div>
              ))}
          </div>
      </div>
  )
}
