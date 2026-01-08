import { AnotherHeader } from "@/components/common/AnotherHeader";
import { Footer } from "@/components/common/Footer";
import React from "react";
import DigitalMarketing from "./blog";
import Awards from "@/components/common/Awards";
import CareerCall from "@/components/common/CareerCall";
import StickyCTAButton from "../Components/stickyCTAButton";
import { NewsHomeLanding } from "@/components/common/NewsHomeLanding";

export const metadata = {
  title: "Digital Marketing Training Institute in kolkata with Placement",
  description:
    "EME Academy Provides The digital marketing training institute in kolkata with placement, digital marketing course in kolkata, best digital marketing academy in kolkata.",
  keywords: [
    "digital marketing course in kolkata",
    "digital marketing institute in kolkata",
    "bba in digital marketing colleges in kolkata",
    "best digital marketing institute in kolkata",
    "best institute for digital marketing in kolkata",
    "digital marketing colleges in kolkata",
    "digital marketing course fees in kolkata",
    "digital marketing course fees kolkata",
    "digital marketing course in kolkata fees",
    "digital marketing training in kolkata",
    "digital marketing training institute in kolkata",
    "top digital marketing institute in kolkata",
    "best digital marketing academy in kolkata",
    "best digital marketing course in kolkata with placement",
    "best institute for digital marketing course in kolkata",
    "digital marketing certificate course in kolkata",
    "digital marketing course in kolkata and course fees",
    "digital marketing course institute in kolkata",
    "digital marketing offline course in kolkata",
    "digital marketing online course in kolkata",
    "online digital marketing course in kolkata",
    "advanced digital marketing certificate course in kolkata",
    "best bba in digital marketing colleges in kolkata",
    "best digital marketing institute in kolkata with placement",
    "digital marketing course fees in kolkata with placement",
    "digital marketing training in kolkata with placement",
    "digital marketing training institute in kolkata with placement",
  ],
  alternates: {
    canonical:
      "https://emeacademy.co.in/blogs/digital-marketing-training-institute-in-kolkata-with-placement",
  },
};

 const Courses = "Digital Marketing Course";
  const SelectCourses = [
    "Advanced Digital Marketing (Facebook & Google Ads)",
    "Master Digital Marketing with AI",
  ];
  const email_sender = "ALL";
  const Brochure = "https://drive.google.com/file/d/1UkM4UILziWhL-n7secspw-j4K3lFoaXP/view?usp=sharing";
  const BrochureName = "digital_marketing-brochure.pdf";
  const _this = {
    Courses,
    SelectCourses,
    email_sender,
    Brochure,
    BrochureName,
  };
  
export default function digital_marketing() {
  return (
    <main className="flex flex-col justify-center items-center w-full gap-4">
      <AnotherHeader />
      <div className="w-full mx-auto">
        <DigitalMarketing {..._this}/>
      </div>
      <div className="w-full py-5">
        <Awards />
      </div>
      <div className="flex w-full  bg-[#ffffff] ">
        <NewsHomeLanding {..._this}/>  
      </div>
      <div className="flex w-full  bg-[#ffffff] px-4">
        <CareerCall />
      </div>
      <Footer />
      <StickyCTAButton {..._this}/>
    </main>
  );
}
