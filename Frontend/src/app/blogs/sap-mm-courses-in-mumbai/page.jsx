import { AnotherHeader } from "@/components/common/AnotherHeader";
import { Footer } from "@/components/common/Footer";
import React from "react";
import Awards from "@/components/common/Awards";
import CareerCall from "@/components/common/CareerCall";
import StickyCTAButton from "../Components/stickyCTAButton";
import SAPMMBlog from "./blog";
import { NewsHomeLanding } from "@/components/common/NewsHomeLanding";


export const metadata = {
  title: "Top 5 Benefits of SAP MM for Revolutionising Supply Chain Management Process",
  description:
    "Top 5 benefits of SAP MM in transforming supply chain management, enhancing efficiency, transparency, and overall operational success.",
  keywords: [
    "benefits of sap mm",
  ],
  alternates: {
    canonical:
      "https://mumbai.emeacademy.co.in/blogs/sap-mm-courses-in-mumbai",
  },
};

const Courses = "Sap Course";
const email_sender = "SAP";
const Brochure = "https://drive.google.com/file/d/1Sa3EPxn939y85I9D7YwJJ2gGwpw7RGyx/view?usp=sharing";
const BrochureName = "SAP_MM_brochure.pdf";
const _this = {
  Courses,
  email_sender,
  Brochure,
  BrochureName,
};


export default function sap_mm_blog() {
  return (
    <main className="flex flex-col justify-center items-center w-full gap-4">
      <AnotherHeader />
      <div className="w-full mx-auto">
        <SAPMMBlog {..._this}/>
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
