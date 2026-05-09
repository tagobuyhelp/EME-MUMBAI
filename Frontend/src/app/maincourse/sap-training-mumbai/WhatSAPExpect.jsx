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
            title: "Mentored by Industry Veterans",
            description:
              "Forget academic professors. You are trained by active corporate experts who have executed massive enterprise projects. This isn't just a class; it's an elite SAP Consultant Course where you learn the exact parameters and frameworks used at top MNCs.",
            icon: <Image width={50} height={50} src={ExpertIcon} alt="Expert Trainers"/>,
          },
          {
            title: "Next-Gen S/4 HANA Curriculum",
            description:
              "The industry is evolving, and so are we. Our syllabus strictly follows the latest global standards, making us the ultimate destination for an advanced SAP S4 HANA Course in Mumbai. Learn the up-to-date skills that tech giants are aggressively hiring for right now.",
            icon: <Image width={50} height={50} src={ContempCurrIcon} alt="Next-Gen Curriculum"/>, 
          },
          {
            title: "24/7 Live Server Access",
            description:
              "Theory alone won't get you hired. We provide continuous, round-the-clock remote server access so you can practice your configurations, run real-time business scenarios, and build a tangible portfolio whenever inspiration strikes.",
            icon: <Image width={50} height={50} src={ServerIcon} alt="24/7 Server Access"/>, 
          },
          {
            title: "Global Certification Readiness",
            description:
              "We prepare you for more than just a local job. Our rigorous training modules ensure you are fully equipped to clear internationally recognized SAP certification exams, instantly elevating your global job prospects and salary brackets.",
            icon: <Image width={50} height={50} src={GlobalIcon} alt="Global Certification"/>, 
          },
          {
            title: "Adaptive Learning for Your Lifestyle",
            description:
              "Whether you need an SAP Course for Freshers in Mumbai with in-person mentoring or a flexible SAP Course Online Mumbai format, we have tailored tracks. It is the perfect SAP Course for Working Professionals looking to upskill seamlessly at their own pace.",
            icon: <Image width={50} height={50} src={FlexibleIcon} alt="Flexible Learning"/>, 
          },
          {
            title: "Unmatched Placement Support",
            description:
              "Your success is our ultimate metric. From resume-building and simulated HR interviews to direct referrals with our corporate hiring partners, we offer the most reliable SAP Course with Placement Mumbai has to offer. We stand by you until you get the offer letter.",
            icon: <Image width={50} height={50} src={PlacementIcon} alt="Placement Support"/>, 
          },
    ]
  return (
      <div className='w-full  max-w-[1380px] mx-auto mt- flex flex-col items-start gap-5 md:gap-10 py-10 md:py-15  px-5 md:px-24 '>
          <div className="w-full flex flex-col justify-center items-center">
                  <h2 className=" flex flex-col justify-center text-center text-[#232D63] text-[24px] lg:text-[40px] font-[700] leading-tight">
                      What to Expect from Mumbai’s Premier SAP Program
                  </h2>
                  <p className="mt-4 text-[12px] lg:text-[16px] text-[#727272] max-w-[800px] text-center">
                      We don't just teach software; we engineer careers. Here is exactly how we transform you from a beginner into a highly paid SAP specialist ready to dominate the corporate landscape.
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
