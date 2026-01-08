import { AnotherHeader } from "@/components/common/AnotherHeader";
import { Footer } from "@/components/common/Footer";
import React from "react";
import WebDevelopmentBlog from "./blog";
import Awards from "@/components/common/Awards";
import CareerCall from "@/components/common/CareerCall";
import StickyCTAButton from "../Components/stickyCTAButton";
import { NewsHomeLanding } from "@/components/common/NewsHomeLanding";

export const metadata = {
  title: "Best Institute For Web Development Course in Kolkata",
  description:
    "We Provide the best web development institute in kolkata with placement, web development training in kolkata, web design and development course in kolkata.",
  keywords: [
    "web development course kolkata",
    "best institute for web development course in kolkata",
    "best web development institute in kolkata",
    "best web development training institute in kolkata",
    "web design and development course in kolkata",
    "web design training institute in kolkata",
    "web developer course in kolkata",
    "web development course fees in kolkata",
    "web development course in kolkata with placement",
    "web development training in kolkata",
    "web development training institute in kolkata",
    "best web development institute in kolkata with placement",
  ],
  alternates: {
    canonical:
      "https://emeacademy.co.in/blogs/best-institute-for-web-development-course-in-kolkata",
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

export default function web_development_blog() {
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
      <StickyCTAButton {..._this}/>
    </main>
  );
}
