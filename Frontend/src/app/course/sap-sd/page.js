import CareerCall from "@/components/common/CareerCall";
import SapSDHero from "./SapSDHero";
import OtherSAPSDCourse from "./OtherSAPSDCourse";
import AllSapCourseDetails from "./AllSapCourseDetails";
import KeypointSD from "./KeypointSD";
import WhatSAPSDExpects from "./WhatSAPSDExpects";
import { Footer } from "@/components/common/Footer";
import StickyCTAButton from "@/app/blogs/Components/stickyCTAButton";

export const metadata = {
  title: "Best SAP SD Training in Mumbai - EME Academy Mumbai",
  description:
    "Get the best SAP SD training in Mumbai at EME Academy Mumbai. Learn from expert trainers, gain real-world skills, and boost your career in sales and distribution.",
  keywords: [
    "Best SAP SD Training in Mumbai",
    "SAP SD Training in Mumbai",
    "SAP SD Training course in Mumbai",
  ],
  alternates: {
    canonical: "https://mumbai.emeacademy.co.in/course/sap-sd",
  },
};

export default function page() {
  const Courses = "Sap Course";
  const email_sender = "SAP";
  const Brochure =
    "https://drive.google.com/file/d/1QM7Y9wH57uG080onb8Kk6XTWezuUikgS/view?usp=sharing";
  const BrochureName = "sap_brochure.pdf";
  const _this = {
    Courses,
    email_sender,
    Brochure,
    BrochureName,
  };

  return (
    <main className="flex flex-col justify-center items-center w-full min-h-screen ">
      <div className="w-full bg-gradient-to-r from-[#CAE5FF] from-0% to-[#FFF] to-100%">
        <SapSDHero {..._this} />
      </div>
      <div className="flex w-full  bg-[#ffffff] ">
        <KeypointSD />
      </div>
      <div className="flex w-full  bg-[#ffffff] ">
        <AllSapCourseDetails {..._this} />
      </div>
      {/*<=-------------------------------------------Seprator Line------------------------------------------=>  */}
      <div className="w-full h-[1px] bg-[#EEEEEE] mx-auto mt-[20px] lg:mt-[15px]"></div>
      <div className="flex w-full  bg-[#ffffff] ">
        <OtherSAPSDCourse />
      </div>
      {/*<=-------------------------------------------Seprator Line------------------------------------------=>  */}
      <div className="w-full h-[1px] bg-[#EEEEEE] mx-auto mt-[20px] lg:mt-[15px]"></div>
      <div className="flex w-full  bg-[#ffffff] ">
        <WhatSAPSDExpects />
      </div>
      <div className="flex w-full  bg-[#ffffff] ">
        <CareerCall />
      </div>
      <Footer />
      <StickyCTAButton {..._this} />
    </main>
  );
}
