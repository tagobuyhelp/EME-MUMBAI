import { AnotherHeader } from "@/components/common/AnotherHeader";
import { Footer } from "@/components/common/Footer";
import React from "react";
import DataAnalyticsBlog from "./blog";
import Awards from "@/components/common/Awards";
import CareerCall from "@/components/common/CareerCall";
import StickyCTAButton from "../Components/stickyCTAButton";
import { NewsHomeLanding } from "@/components/common/NewsHomeLanding";

export const metadata = {
  title: "How to Become a Data Analyst in Mumbai: Complete Roadmap",
  description:
    "Want a data analyst career in Mumbai? This roadmap covers skills, salary benchmarks, portfolio tips, and a step-by-step plan to land your first job without a CS degree.",
  keywords: [
    "Data Analyst Jobs in Mumbai",
    "Data Analytics Career Path",
    "Data Analyst Salary in Mumbai 2026",
    "Data Analytics Course in Mumbai",
    "Data Analyst Skills for Beginners",
  ],
  alternates: {
    canonical:
      "https://emeacademy.co.in/blogs/how-to-become-a-data-analyst-in-mumbai-roadmap",
  },
};

const Courses = "Data Analytics Course";
const SelectCourses = [
  "Data Analytics",
  "Data Science",
];
const email_sender = "ALL";
const Brochure = "https://drive.google.com/file/d/1K-P-2y5yhYWxXXDqulEz72Dm9LdwxqjG/view?usp=sharing";
const BrochureName = "data-analytics-brochure.pdf";
const _this = {
  Courses,
  SelectCourses,
  email_sender,
  Brochure,
  BrochureName,
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://emeacademy.co.in"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Blogs",
      "item": "https://emeacademy.co.in/blogs"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "How to Become a Data Analyst in Mumbai: Complete 2026 Roadmap",
      "item": "https://emeacademy.co.in/blogs/how-to-become-a-data-analyst-in-mumbai-roadmap"
    }
  ]
};

export default function data_analytics_blog() {
  return (
    <main className="flex flex-col justify-center items-center w-full gap-4">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <AnotherHeader />
      <div className="w-full mx-auto">
        <DataAnalyticsBlog {..._this}/>
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
