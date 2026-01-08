import { AnotherHeader } from "@/components/common/AnotherHeader";
import { Footer } from "@/components/common/Footer";
import React from "react";
import Awards from "@/components/common/Awards";
import CareerCall from "@/components/common/CareerCall";
import StickyCTAButton from "../Components/stickyCTAButton";
import HrBlog from "./blog";
import { NewsHomeLanding } from "@/components/common/NewsHomeLanding";

export const metadata = {
  title:
    "Advance Your Career with Executive HR Programs in Kolkata | EME Academy",
  description:
    "Explore EME Academy’s executive HR courses in Kolkata designed for working professionals. Learn recruitment, employee relations, performance management, and leadership skills to thrive in top HR roles.",
  keywords: [""],
  alternates: {
    canonical:
      "https://emeacademy.co.in/blogs/executive-human-resources-programs",
  },
};

const Courses = "HR Management Course";
const email_sender = "ALL";
const Brochure = "https://drive.google.com/file/d/1DPG-VGq7n_6xSFvJ-xmZv9Kr8OtapZpc/view?usp=sharing";
const BrochureName = "hrm_brochure.pdf";
const _this = {
  Courses,
  email_sender,
  Brochure,
  BrochureName,
};

export default function hr_blog() {
  return (
    <main className="flex flex-col justify-center items-center w-full gap-4">
      <AnotherHeader />
      <div className="w-full mx-auto">
        <HrBlog {..._this}/>
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
      <StickyCTAButton {..._this} />
    </main>
  );
}
