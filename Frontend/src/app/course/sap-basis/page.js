import AllSapCourseDetails from "./AllSapCourseDetails";
import CareerCall from "@/components/common/CareerCall";
import SapBasicHero from "./SapBasicHero";
import OtherSAPBasicCourse from "./OtherSAPBasicCourse";
import KeypointSapBasic from "./KeypointSapBasic";
import WhatSAPBasicExpects from "./WhatSAPBasicExpects";
import { Footer } from "@/components/common/Footer";
import StickyCTAButton from "@/app/blogs/Components/stickyCTAButton";

export const metadata = {
  title:
    "SAP BASIS Training in Mumbai | SAP Basis Certification Training institute Mumbai - EME Academy Mumbai",
  description:
    "Discover the best SAP BASIS training institute in Mumbai for comprehensive learning. Unlock your potential with expert guidance and practical skills.",
  keywords: [
    "Best SAP BASIS Training in Mumbai",
    "SAP BASIS Training in Mumbai",
    "SAP Basis Certification Training institute Mumbai",
  ],
  alternates: {
    canonical: "https://mumbai.emeacademy.co.in/course/sap-basis",
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

  const benefits = [
    "Comprehensive Course Selection ",
    "Career Advancement",
    "Industry-Approved Certification",
    "20+ S A P Experts as Trainer",
  ];

  return (
    <main className="flex flex-col justify-center items-center w-full min-h-screen">
      <div className="w-full bg-gradient-to-r from-[#CAE5FF] from-0% to-[#FFF] to-100%">
        <SapBasicHero {..._this} />
      </div>
      <div className="flex w-full  bg-[#ffffff] ">
        <KeypointSapBasic />
      </div>
      <div className="flex w-full  bg-[#ffffff] ">
        <AllSapCourseDetails {..._this} />
      </div>

      {/*<=-------------------------------------------Seprator Line------------------------------------------=>  */}
      <div className="w-full h-[1px] bg-[#EEEEEE] mx-auto mt-[20px] lg:mt-[15px]"></div>
      <div className="flex w-full  bg-[#ffffff] ">
        <OtherSAPBasicCourse />
      </div>
      {/*<=-------------------------------------------Seprator Line------------------------------------------=>  */}
      <div className="w-full h-[1px] bg-[#EEEEEE] mx-auto mt-[20px] lg:mt-[15px]"></div>
      <div className="flex w-full  bg-[#ffffff] ">
        <WhatSAPBasicExpects />
      </div>

      <div className="flex w-full  bg-[#ffffff] ">
        <CareerCall />
      </div>
      <Footer />
      <StickyCTAButton {..._this} />
    </main>
  );
}
