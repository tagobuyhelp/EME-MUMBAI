import CTAButton from "@/components/common/CtaButton";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import React, { useState } from "react";
import Marquee from "react-fast-marquee";

export default function BlogTestimonial({ _this }) {
  return (
    <div className="flex flex-col gap-2 text-[15px]  bg-[#F0F3F8] rounded-[14px]">
      <div className="mt-1.5 px-4 text-[#232D63] text-[13px] md:text-[15px] text-center font-[700]">
        Our Successful Students
      </div>
      <p className="text-[#232D63] text-[13px] md:text-[15px] text-center font-[700]">
        <strong>“Salary Ranges from ₹25,000 to ₹60,000 per month.”</strong>
      </p>
      <Marquee autoFill className=" px-4 pb-2  gap-5">
        <Card className="w-[150px] md:w-[180px] rounded-[18px] border bg-white flex flex-col justify-center items-center gap-2 p-4 mx-4">
          <Image
            className="rounded-full w-[50px] h-[50px] object-cover object-right-top"
            width={50}
            height={50}
            src="https://eme25.s3.ap-south-1.amazonaws.com/assets/images/AitrikBanerjee.webp"
            alt="Full Stack Development"
          />
          <div className="text-[14px] font-[400] text-center">
            <p className="font-[600]">Aitrik Banerjee</p>
            {/* <p className="text-[12px] px-8 md:px-0">SAP MM Consultant</p> */}
          </div>
          <Image
            className=""
            width={80}
            height={80}
            src="/assets/images/TcsLogo.svg"
            alt="Full Stack Development"
          />
        </Card>
        <Card className="w-[150px] md:w-[180px] rounded-[18px] border bg-white flex flex-col justify-center items-center gap-2 p-4 mx-4">
          <Image
            className="rounded-full w-[50px] h-[50px] object-cover object-right-top border"
            width={50}
            height={50}
            src="https://eme25.s3.ap-south-1.amazonaws.com/assets/images/sap_landing/profileTwo.png"
            alt="profileTwo"
          />
          <div className="text-[14px] font-[400] text-center">
            <p className="font-[600]">Rahul Rana</p>
            {/* <p className="text-[12px]">SAP ABAP Consultant</p> */}
          </div>
          <Image
            className=""
            width={80}
            height={80}
            src="/assets/images/TcsLogo.svg"
            alt="Full Stack Development"
          />
        </Card>
        <Card className="w-[150px] md:w-[180px] rounded-[18px] border bg-white flex flex-col justify-center items-center gap-2 p-4 mx-4">
          <Image
            className="rounded-full w-[50px] h-[50px] object-cover object-right-top border"
            width={50}
            height={50}
            src="https://eme25.s3.ap-south-1.amazonaws.com/assets/images/sap_landing/profileThree.png"
            alt="profileTwo"
          />
          <div className="text-[14px] font-[400] text-center">
            <p className="font-[600]">Rahul Singh</p>
            {/* <p className="text-[12px]">SAP ABAP Consultant</p> */}
          </div>
          <Image
            className=""
            width={80}
            height={80}
            src="/assets/images/TcsLogo.svg"
            alt="Full Stack Development"
          />
        </Card>

        <Card className="w-[150px] md:w-[180px] rounded-[18px] border bg-white flex flex-col justify-center items-center gap-2 p-4 mx-4">
          <Image
            className="rounded-full w-[50px] h-[50px] object-cover object-right-top border"
            width={50}
            height={50}
            src="https://eme25.s3.ap-south-1.amazonaws.com/assets/images/sap_landing/profileFour.png"
            alt="profileTwo"
          />
          <div className="text-[14px] font-[400] text-center">
            <p className="font-[600]">Probhat Routh</p>
            {/* <p className="text-[12px] px-8 md:px-0">SAP MM Consultant</p> */}
          </div>
          <Image
            className=""
            width={80}
            height={80}
            src="/assets/images/TcsLogo.svg"
            alt="Full Stack Development"
          />
        </Card>
      </Marquee>

      <CTAButton
        name="Enquire Now"
        styleClasses="text-white bg-[#00a2e7] hover:bg-[#068bc3] hover:text-gray-100 !px-6 rounded-md mb-4"
        _this={_this}
      />
    </div>
  );
}
