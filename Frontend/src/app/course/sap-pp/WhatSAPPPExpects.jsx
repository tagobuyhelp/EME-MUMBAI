import React from 'react'
import Image from "next/image";
import OneIcon from "../../../../public/assets/images/Graphic_Designing/01.svg";
import TwoIcon from "../../../../public/assets/images/SAP_Course/SAP_ABAP/WhatExpert/02.svg";
import ThreeIcon from "../../../../public/assets/images/SAP_Course/SAP_ABAP/WhatExpert/03.svg";


export default function WhatSAPPPExpects() {
    const data = [
        {
            title: "Working mode",
            description:"SAP FICO is a unit in SAP ERP that deals with Financial Accounting and Cost Controlling.",
            icon: <Image src={OneIcon} alt="Step 1"/>,
          },
          {
            title: "Controlling skills",
            description:"Complete understanding of sales, distribution, material management, production planning, and finance controlling skills",
            icon: <Image src={TwoIcon} alt="Step 2"/>, 
          },
          {
            title: "Help Access",
            description:"Complete understanding of sales, distribution, material management, production planning, and finance controlling skills",
            icon: <Image src={ThreeIcon} alt="Step 3"/>, 
          }
    ]
  return (
      <div className='w-full  max-w-[1380px] mx-auto flex flex-col items-start md:gap-10 py-5 md:py-10  px-5 md:px-24 '>
          <div className="w-full flex flex-col justify-center items-center">
                  <div className="flex flex-col justify-center text-center text-[#232D63] text-[16px] lg:text-[22px] font-[700]">
                      What You can Expect From The Course
                  </div>
                  <p className="mt-1 text-[12px] lg:text-[16px] text-[#727272] max-w-[637px] text-center">
                      At EME Academy, our mission is to equip you with the skills needed to
                      thrive in this competitive field.
                  </p>
          </div>

          <div className="lg:mt-1 mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
              {data.map((item, index) => (
                  <div
                      key={index}
                      className="bg-white border-[1px] rounded-[16px] border-[#EEEEEE] p-6 text-left lg:max-w-[373px]"
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
