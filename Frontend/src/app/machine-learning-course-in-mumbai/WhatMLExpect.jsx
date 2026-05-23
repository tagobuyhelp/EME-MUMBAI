"use client";
import React from "react";
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
        "Our curriculum is packed with practical projects that mimic real-world corporate data challenges. You will learn how to clean datasets, deploy predictive algorithms, and train neural networks. Building a robust portfolio of live AI models dramatically accelerates your job prospects.",
      icon: <Image width={50} height={50} src={ExpertIcon} alt="Working on Hands-on Projects" />,
    },
    {
      title: "Industry-Focused Curriculum",
      description:
        "You will cover a massive range of topics, starting from foundational logic in our Python for Machine Learning Course Mumbai to advanced architectures in our Deep Learning Course in Mumbai. We help you master both supervised and unsupervised learning, giving you full-stack data capabilities.",
      icon: <Image width={50} height={50} src={ContempCurrIcon} alt="Industry-Focused Curriculum" />,
    },
    {
      title: "Professional Mentors",
      description:
        "Data Scientists and Lead AI Engineers mentor our students to become the future of the tech sector. With years of corporate experience by their side, students learn the exact best practices and algorithmic problem-solving strategies used by the Best AI and ML Institute in Mumbai.",
      icon: <Image width={50} height={50} src={ServerIcon} alt="Professional Mentors" />,
    },
    {
      title: "Industry-Specific Instruments and Systems",
      description:
        "EME Academy provides access to the exact tech stacks used by global MNCs. Students will master model deployment working with TensorFlow, PyTorch, cloud-based AI services, and gain critical visualization skills through our AI ML Course with Power BI Certification.",
      icon: <Image width={50} height={50} src={GlobalIcon} alt="Industry-Specific Instruments and Systems" />,
    },
    {
      title: "Flexible Learning Paths",
      description:
        "Flexible classes allow students to learn at their own pace without sacrificing their current commitments. EME Academy offers both an interactive Online AI ML Course Mumbai and an immersive AI Course Weekend Batch Mumbai, perfectly accommodating working professionals and full-time students.",
      icon: <Image width={50} height={50} src={FlexibleIcon} alt="Flexible Learning Paths" />,
    },
    {
      title: "Career Guidance & Placement Support",
      description:
        "Our personalized career support guarantees your corporate transition. Backed by our dedicated AI ML Course with Placement Mumbai, we offer technical resume workshops, white-board interview coaching, and exclusive networking via our AI ML Course with Internship Mumbai track.",
      icon: <Image width={50} height={50} src={PlacementIcon} alt="Career Guidance & Placement Support" />,
    },
  ];

  return (
    <div className="w-full max-w-[1380px] mx-auto flex flex-col items-start gap-2 md:gap-5 py-10 md:py-15 px-5 md:px-24">
      <div className="w-full flex flex-col justify-center items-center">
        <h2 className="flex flex-col justify-center text-center text-[#232D63] text-[20px] lg:text-[24px] font-[700]">
          What our ML & AI Course in Mumbai Provides
        </h2>
        <p className="text-[12px] lg:text-[16px] text-[#727272] max-w-[800px] text-center mt-2 leading-relaxed">
          At EME Academy, our mission is to equip you with the advanced data skills and algorithmic logic needed to dominate this highly competitive tech sector.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mt-6">
        {data.map((item, index) => (
          <div
            key={index}
            className="bg-white border-[1px] rounded-[16px] border-[#EEEEEE] p-5 text-left lg:max-w-[416px] flex flex-col justify-start items-start hover:shadow-md transition-shadow duration-300"
          >
            <div className="mb-4">{item.icon}</div>
            <h3 className="text-[15px] lg:text-[20px] leading-[28px] font-semibold text-[#232D63]">
              {item.title}
            </h3>
            <p className="text-[12px] lg:text-[15px] leading-[20px] lg:leading-[24px] text-[#727272] mt-3">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
