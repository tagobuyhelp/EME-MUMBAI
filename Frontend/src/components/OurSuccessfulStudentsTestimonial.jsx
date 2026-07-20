import { Card } from "@/components/ui/card";
import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";

export default function OurSuccessfulStudentsTestimonial() {
  return (
    <main className="w-full bg-[#F4FBFE]">
      <div className="w-full max-w-[1160px] flex flex-col gap-5 text-[15px] mx-auto  rounded-[14px] py-6">
        <div>
          <div className="text-[#232D63] text-[13px] md:text-[15px] text-center font-[700]">
            Some of Our Successful Students
          </div>
          <p className="text-[#232D63] text-[13px] md:text-[15px] text-center font-[700]">
            <strong>“Salary Ranges up to ₹40,000 per month.”</strong>
          </p>
        </div>
        <Marquee autoFill className=" px-4 pb-2  gap-5">
          <Card className="w-[150px] md:w-[180px] rounded-[18px] border bg-white flex flex-col justify-center items-center gap-2 py-9 md:p-6 mx-4">
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
              width={60}
              height={80}
              src="/assets/images/concentrix2.png"
              alt="Full Stack Development"
            />
          </Card>
          <Card className="w-[150px] md:w-[180px] rounded-[18px] border bg-white flex flex-col justify-center items-center gap-2 py-7 md:p-4 mx-4">
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
              width={50}
              height={50}
              src="/assets/images/TcsLogo.svg"
              alt="Full Stack Development"
            />
          </Card>

          <Card className="w-[150px] md:w-[180px] rounded-[18px] border bg-white flex flex-col justify-center items-center gap-2 p-5 mx-4">
            <Image
              className="rounded-full w-[50px] h-[50px] object-cover object-right-top border"
              width={50}
              height={50}
              src="https://eme25.s3.ap-south-1.amazonaws.com/assets/images/sap_landing/Subham_Sambui.jpg"
              alt="profileTwo"
            />
            <div className="text-[14px] font-[400] text-center">
              <p className="font-[600]">Subham Sambui</p>
              {/* <p className="text-[12px] px-8 md:px-0">SAP MM Consultant</p> */}
            </div>
            <Image
              className=""
              width={80}
              height={80}
              src="/assets/images/Oxford.jpg"
              alt="Full Stack Development"
            />
          </Card>
          <Card className="w-[150px] md:w-[180px] rounded-[18px] border bg-white flex flex-col justify-center items-center gap-2 py-7 md:p-4 mx-4">
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
          <Card className="w-[150px] md:w-[180px] rounded-[18px] border bg-white flex flex-col justify-center items-center gap-2 py-7 md:p-4 mx-4">
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
              width={50}
              height={50}
              src="/assets/images/TcsLogo.svg"
              alt="Full Stack Development"
            />
          </Card>
          <Card className="w-[150px] md:w-[180px] rounded-[18px] border bg-white flex flex-col justify-center items-center gap-2 p-5 mx-4">
            <Image
              className="rounded-full w-[50px] h-[50px] object-cover object-right-top border"
              width={50}
              height={50}
              src="https://eme25.s3.ap-south-1.amazonaws.com/assets/images/sap_landing/Avick_Chakraborty.jpg"
              alt="profileTwo"
            />
            <div className="text-[14px] font-[400] text-center">
              <p className="font-[600]">Avick Chakraborty</p>
              {/* <p className="text-[12px] px-8 md:px-0">SAP MM Consultant</p> */}
            </div>
            <Image
              className=""
              width={80}
              height={80}
              src="/assets/images/Oxford.jpg"
              alt="Full Stack Development"
            />
          </Card>
        </Marquee>
      </div>
    </main>
  );
}
