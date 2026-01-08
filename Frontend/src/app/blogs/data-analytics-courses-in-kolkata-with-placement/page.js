import { AnotherHeader } from "@/components/common/AnotherHeader";
import { Footer } from "@/components/common/Footer";
import React from "react";
import DataAnalyticsBlog from "./blog";
import CareerCall from "@/components/common/CareerCall";
import Awards from "@/components/common/Awards";
import StickyCTAButton from "../Components/stickyCTAButton";
import { NewsHomeLanding } from "@/components/common/NewsHomeLanding";

export const metadata = {
  title: "Best Data Analytics Courses in Kolkata With Placement",
  description:
    "Join the best data analytics courses in Kolkata at a top data analytics institute in Kolkata with affordable data analyst course fees in Kolkata. Enroll now!",
  keywords: [
    "data analytics courses in kolkata",
    "data analyst course in kolkata",
    "data analytics courses in kolkata with placement",
    "data analyst course fee in kolkata",
    "best data analytics courses in kolkata",
    "data analytics institute in kolkata",
    "data analytics training in kolkata",
    "best institute for data analyst course in kolkata",
  ],
  alternates: {
    canonical:
      "https://emeacademy.co.in/blogs/data-analytics-courses-in-kolkata-with-placement",
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
