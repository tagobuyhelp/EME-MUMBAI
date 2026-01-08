import { AnotherHeader } from "@/components/common/AnotherHeader";
import { Footer } from "@/components/common/Footer";
import React from "react";
import WebDevelopmentBlog from "./blog";
import Awards from "@/components/common/Awards";
import CareerCall from "@/components/common/CareerCall";
import StickyCTAButton from "../Components/stickyCTAButton";
import { NewsHomeLanding } from "@/components/common/NewsHomeLanding";

export const metadata = {
  title: "Full stack web development course in kolkata with placement",
  description:
    "We Provide the Full stack web development course in Kolkata with placement, full stack developer course in Kolkata, full stack training in Kolkata.",
  keywords: [
    "full stack developer course in kolkata",
    "full stack web development course in kolkata",
    "full stack development course in kolkata",
    "full stack training in kolkata",
    "mean stack training in kolkata",
    "full stack developer course in kolkata with placement",
    "full stack development course in kolkata with placement",
    "full stack web development course in kolkata with placement",
  ],
  alternates: {
    canonical:
      "https://emeacademy.co.in/blogs/full-stack-development-course-in-kolkata",
  },
};


const Courses = "Web Development Course";
const SelectCourses = [
  "Full Stack (MERN)",
  "Full Stack (MEAN)",
  "PHP & MySQL",
  "WordPress",
];
const email_sender = "ALL";
const Brochure = "https://drive.google.com/file/d/1K-P-2y5yhYWxXXDqulEz72Dm9LdwxqjG/view?usp=sharing";
const BrochureName = "web-dev-brochure.pdf";
const _this = {
  Courses,
  SelectCourses,
  email_sender,
  Brochure,
  BrochureName,
};

export default function fullstack() {
  return (
    <main className="flex flex-col justify-center items-center w-full gap-4">
      <AnotherHeader />
      <div className="w-full mx-auto">
        <WebDevelopmentBlog {..._this}/>
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
