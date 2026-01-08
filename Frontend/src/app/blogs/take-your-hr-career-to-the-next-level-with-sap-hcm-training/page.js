import { AnotherHeader } from "@/components/common/AnotherHeader";
import { Footer } from "@/components/common/Footer";
import React from "react";
import Awards from "@/components/common/Awards";
import CareerCall from "@/components/common/CareerCall";
import StickyCTAButton from "../Components/stickyCTAButton";
import SAP_HCM_Blog from "./blog";
import { NewsHomeLanding } from "@/components/common/NewsHomeLanding";

export const metadata = {
  title: "Take Your HR Career to the Next Level with SAP HCM Training",
  description:
    "Excel in your HR career with our SAP HCM course in EME Academy. Gain essential skills and knowledge to excel in human resources management today!",
  keywords: ["SAP HCM Course"],
  alternates: {
    canonical:
      "https://emeacademy.co.in/blogs/take-your-hr-career-to-the-next-level-with-sap-hcm-training",
  },
};

const Courses = "Sap Course";
// const SelectCourses = [
//   "SAP Main Course",
//   "SAP ABAP",
//   "SAP FICO",
//   "SAP MM",
//   "SAP SD",
//   "SAP HANA",
//   "SAP HCM",
//   "SAP PP",
//   "SAP Success Factor",
//   "SAP BASIS",
//   "SAP Analytics",
// ];
const email_sender = "SAP";
const Brochure = "https://drive.google.com/file/d/1DPG-VGq7n_6xSFvJ-xmZv9Kr8OtapZpc/view?usp=sharing";
const BrochureName = "SAP_HCM_brochure.pdf";
const _this = {
  Courses,
  // SelectCourses,
  email_sender,
  Brochure,
  BrochureName,
};

export default function power_bi_blog() {
  return (
    <main className="flex flex-col justify-center items-center w-full gap-4">
      <AnotherHeader />
      <div className="w-full mx-auto">
        <SAP_HCM_Blog {..._this}/>
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
      <StickyCTAButton {..._this} />
    </main>
  );
}
