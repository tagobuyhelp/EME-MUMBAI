import { AnotherHeader } from "@/components/common/AnotherHeader";
import { Footer } from "@/components/common/Footer";
import React from "react";
import PowerBiBlog from "./blog";
import Awards from "@/components/common/Awards";
import CareerCall from "@/components/common/CareerCall";
import StickyCTAButton from "../Components/stickyCTAButton";
import { NewsHomeLanding } from "@/components/common/NewsHomeLanding";

export const metadata = {
  title: "Top 7 Benefits of Learning Power BI for Career Growth - EME Academy",
  description:
    "Want to grow your career in data analytics? Discover 7 reasons to take a Power BI course in Mumbai 2025 and gain in-demand skills!",
  keywords: [""],
  alternates: {
    canonical:
      "https://mumbai.emeacademy.co.in/blogs/7-reasons-to-enroll-in-a-power-bi-course",
  },
};

const Courses = "Power BI Course";
const email_sender = "ALL";
const Brochure = "https://drive.google.com/file/d/1Sa3EPxn939y85I9D7YwJJ2gGwpw7RGyx/view?usp=sharing";
const BrochureName = "power_bi_brochure.pdf";
const _this = {
  Courses,
  email_sender,
  Brochure,
  BrochureName,
};

export default function power_bi_blog() {
  return (
    <main className="flex flex-col justify-center items-center w-full gap-4">
      <AnotherHeader />
      <div className="w-full mx-auto">
        <PowerBiBlog {..._this}/>
      </div>
      <div className="w-full py-5">
        <Awards />
      </div>
      <div className="flex w-full  bg-[#ffffff] ">
        <NewsHomeLanding {..._this} />
      </div>
      <div className="flex w-full  bg-[#ffffff] px-4">
        <CareerCall />
      </div>
      <Footer />
      <StickyCTAButton {..._this}/>
    </main>
  );
}
