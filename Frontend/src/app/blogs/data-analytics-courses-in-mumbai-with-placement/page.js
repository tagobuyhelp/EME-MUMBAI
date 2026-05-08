import { AnotherHeader } from "@/components/common/AnotherHeader";
import { Footer } from "@/components/common/Footer";
import React from "react";
import DataAnalyticsBlog from "./blog";
import CareerCall from "@/components/common/CareerCall";
import Awards from "@/components/common/Awards";
import StickyCTAButton from "../Components/stickyCTAButton";
import { NewsHomeLanding } from "@/components/common/NewsHomeLanding";

export const metadata = {
  title: "Best Data Analytics Courses in Mumbai With Placement",
  description:
    "Join the best data analytics courses in Mumbai at a top data analytics institute in Mumbai with affordable data analyst course fees in Mumbai. Enroll now!",
  keywords: [
    "data analytics courses in Mumbai",
    "data analyst course in Mumbai",
    "data analytics courses in Mumbai with placement",
    "data analyst course fee in Mumbai",
    "best data analytics courses in Mumbai",
    "data analytics institute in Mumbai",
    "data analytics training in Mumbai",
    "best institute for data analyst course in Mumbai",
  ],
  alternates: {
    canonical:
      "https://mumbai.emeacademy.co.in/blogs/data-analytics-courses-in-mumbai-with-placement",
  },
};


const Courses = "Data Analytics Course";
const email_sender = "ALL";
const Brochure = "https://drive.google.com/file/d/1eGFi7GlCRTLehu5nljGHAwOyFvdwUFiJ/view?usp=sharing";
const BrochureName = "data_analitics_brochure.pdf";
const _this = {
  Courses,
  email_sender,
  Brochure,
  BrochureName,
};

export default function data_analytics() {
  return (
    <main className="flex flex-col justify-center items-center w-full gap-4">
      <AnotherHeader />
      <div className="w-full mx-auto">
        <DataAnalyticsBlog {..._this} />
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
      <StickyCTAButton  {..._this}/>
    </main>
  );
}
