import { AnotherHeader } from "@/components/common/AnotherHeader";
import { Footer } from "@/components/common/Footer";
import React from "react";
import DigitalMarketing from "./blog";
import Awards from "@/components/common/Awards";
import CareerCall from "@/components/common/CareerCall";
import StickyCTAButton from "../Components/stickyCTAButton";
import { NewsHomeLanding } from "@/components/common/NewsHomeLanding";

export const metadata = {
  title: "Digital Marketing Training Institute in Mumbai with Placement",
  description:
    "EME Academy Mumbai Provides The digital marketing training institute in Mumbai with placement, digital marketing course in Mumbai, best digital marketing academy in Mumbai.",
  keywords: [
    "digital marketing course in mumbai",
    "digital marketing institute in mumbai",
    "bba in digital marketing colleges in mumbai",
    "best digital marketing institute in mumbai",
    "best institute for digital marketing in mumbai",
    "digital marketing colleges in mumbai",
    "digital marketing course fees in mumbai",
    "digital marketing course fees mumbai",
    "digital marketing course in mumbai fees",
    "digital marketing training in mumbai",
    "digital marketing training institute in mumbai",
    "top digital marketing institute in mumbai",
    "best digital marketing academy in mumbai",
    "best digital marketing course in mumbai with placement",
    "best institute for digital marketing course in mumbai",
    "digital marketing certificate course in mumbai",
    "digital marketing course in mumbai and course fees",
    "digital marketing course institute in mumbai",
    "digital marketing offline course in mumbai",
    "digital marketing online course in mumbai",
    "online digital marketing course in mumbai",
    "advanced digital marketing certificate course in mumbai",
    "best bba in digital marketing colleges in mumbai",
    "best digital marketing institute in mumbai with placement",
    "digital marketing course fees in mumbai with placement",
    "digital marketing training in mumbai with placement",
    "digital marketing training institute in mumbai with placement",
  ],
  alternates: {
    canonical:
      "https://mumbai.emeacademy.co.in/blogs/digital-marketing-training-institute-in-mumbai-with-placement",
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
